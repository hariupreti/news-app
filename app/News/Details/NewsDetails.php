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

    public function getBreakingNews(){
        $this->newsContract->setSource($this->newsContract->source);
        switch ($this->newsContract->source[0]) {
            case 'newsapi':
                return [
                    "contract" => $this->newsContract,
                    "news" => ["breakingNews" => $this->getBreakingNewsForNewsAPI()]
                ];
                break;
            case 'TheGuardian':
                return [
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForTheGuardian()]
                ];
                break;
            case 'newscred':
                return [
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()]
                ];
                break;
            default:
                return [
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()],
                ];
        }
    }

    public function getSearchArticles($keyword,$date){
        $this->newsContract->setSource($this->newsContract->source);
        switch ($this->newsContract->source[0]) {
            case 'newsapi':
                return [
                    "contract" => $this->newsContract,
                    "news" => ["articles" => $this->searchArticlesForNewsAPI($keyword,$date)]
                ];
                break;
            case 'TheGuardian':
                return [
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForTheGuardian()]
                ];
                break;
            case 'newscred':
                return [
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()]
                ];
                break;
            default:
                return [
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()],
                ];
        }
    }

    private function getTopHeadlinesForNewsAPI(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/top-headlines?country=us&pageSize=20";
        return Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer $apikey"])
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            })->json();
    }

    private function getBreakingNewsForNewsAPI(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $breakingNewsURL = "$urlForHeadlines/everything?q=breaking&pageSize=24";
        return Http::accept('application/json')
        ->withHeaders(['Authorization' => "Bearer $apikey"])
        ->get($breakingNewsURL)
        ->throw(function ($response, $e) {
        })->json();
    }

    private function searchArticlesForNewsAPI($keyword,$date){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $searchArticlesURL = "$urlForHeadlines/everything?q=$keyword&from=$date&sortBy=publishedAt&pageSize=20";
        return Http::accept('application/json')
        ->withHeaders(['Authorization' => "Bearer $apikey"])
        ->get($searchArticlesURL)
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
                dd($e->getMessage());
            });
        $newsonly = $response->body();
        $decodeNews = json_decode($newsonly);
        $topHeadlines = [
            "news" => $decodeNews->response->results
        ];
        return $topHeadlines;
    }
    
}
