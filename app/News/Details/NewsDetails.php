<?php
namespace App\News\Details;
use App\News\Contracts\NewsContract;
use Illuminate\Support\Facades\Http;

class NewsDetails
{
    protected $newsContract;

    public function __construct(NewsContract $newsContract)
    {
        $this->newsContract = $newsContract;
    }

    public function getHomePageNews(){
        $this->newsContract->setSource($this->newsContract->source);
        switch ($this->newsContract->source[0]) {
            case 'newsapi':
                return [
                    "description" => "User wants to view news from newsapi source",
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()]
                ];
                break;
            case 'TheGuardian':
                return [
                    "description" => "User wants to view news from opennews source",
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForTheGuardian()]
                ];
                break;
            case 'newscred':
                return [
                    "description" => "User wants to view news from newscred source",
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()]
                ];
                break;
            default:
                return [
                    "description" => "Get default news source from newsapi",
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()],
                ];
        }
    }

    private function getTopHeadlinesForNewsAPI(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $headlinesFullURL = "$urlForHeadlines/top-headlines?country=us&pageSize=20";
        return Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
            })->json();
    }

    private function getTopHeadlinesForTheGuardian(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/search?page=1&q=debate&api-key=$apikey";
        $response = Http::accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
            });
        $newsonly = $response->body();
        $decodeNews = json_decode($newsonly);
        $topHeadlines = [
            "news" => $decodeNews->response->results
        ];
        return $topHeadlines;
    }
    
}
