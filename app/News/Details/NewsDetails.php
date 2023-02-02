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
                    "news" => "User wants to view news from newsapp source",
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()]
                ];
                break;

            case 'sdew':
                return [
                    "news" => "Default",
                    "contract" => $this->newsContract
                ];
                break;
                //Starting Brining news for newsapi client

            default:
            return [
                "description" => "Get default news source from newsapi",
                "contract" => $this->newsContract,
                "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()],
            ];
        }
    }

    private function getTopHeadlinesForNewsAPI(){
        return Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get('https://newsapi.org/v2/top-headlines?country=us&pageSize=20')
            ->throw(function ($response, $e) {
            })->json();
    }
    
}
