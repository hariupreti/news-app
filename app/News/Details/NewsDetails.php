<?php
namespace App\News\Details;

use App\Http\Resources\News\NewsAPI\HomePageNewsResources;
use App\Http\Resources\News\NewsAPI\RecentNews;
use App\Http\Resources\News\TheGuardian\HomePageNewsResources as TheGuardianHomePageNewsResources;
use App\Http\Resources\News\TheNewYorkTimes\HomePageNewsResources as TheNewYorkTimesHomePageNewsResources;
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
            case 'NewYorkTimes':
                return [
                    "description" => "User wants to view news from NewYorkTimes source",
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewYorkTimes()]
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

    public function getRecentNews($interest){
        $this->newsContract->setSource($this->newsContract->source);
        switch ($this->newsContract->source[0]) {
            case 'newsapi':
                return [
                    "description" => "User wants to view news from newsapi source",
                    "contract" => $this->newsContract,
                    "news" => ["recentNews" => $this->getRecentNewsForNewsAPI($interest)]
                ];
                break;
            case 'TheGuardian':
                return [
                    "description" => "User wants to view news from opennews source",
                    "contract" => $this->newsContract,
                    "news" => ["recentNews" => $this->getRecentNewsForTheGuardian($interest)]
                ];
                break;
            case 'NewYorkTimes':
                return [
                    "description" => "User wants to view news from NewYorkTimes source",
                    "contract" => $this->newsContract,
                    "news" => ["recentNews" => $this->getRecentNewsForNewYorkTimes()]
                ];
                break;
            default:
                return [
                    "description" => "Get default news source from newsapi",
                    "contract" => $this->newsContract,
                    "news" => ["recentNews" => $this->getRecentNewsForNewsAPI($interest) ],
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
                    "news" => ["breakingNews" => $this->getBreakingNewsForTheGarudian()]
                ];
                break;
            case 'NewYorkTimes':
                return [
                    "contract" => $this->newsContract,
                    "news" => ["breakingNews" => $this->getBreakingNewsForNewYorkTimes()]
                ];
                break;
            default:
                return [
                    "contract" => $this->newsContract,
                    "news" => ["breakingNews" => $this->getBreakingNewsForNewsAPI()],
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
                    "news" => ["articles" => ["articles" => $this->searchArticlesForTheGaurdian($keyword,$date)]]
                ];
                break;
            case 'NewYorkTimes':
                return [
                    "contract" => $this->newsContract,
                    "news" => ["articles" => ["articles" => $this->searchArticlesForNewYorkTimes($keyword,$date)]]
                ];
                break;
            default:
                return [
                    "contract" => $this->newsContract,
                    "news" => ["headlines" => $this->getTopHeadlinesForNewsAPI()],
                ];
        }
    }

    // NewsAPI API integration for various kind of news

    private function getTopHeadlinesForNewsAPI(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/top-headlines?country=us&pageSize=20";
        $response = Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer $apikey"])
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
        });
        $topheadlines = json_decode($response->body());
        return HomePageNewsResources::collection($topheadlines->articles);
    }

    private function getBreakingNewsForNewsAPI(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $breakingNewsURL = "$urlForHeadlines/everything?q=breaking&pageSize=24";
        $response = Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer $apikey"])
            ->get($breakingNewsURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
        });
        $news = json_decode($response->body());
        return HomePageNewsResources::collection($news->articles);
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

    private function getRecentNewsForNewsAPI($interest){
        $today = date("Y-m-d");
        $urlForRecentNews = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $searchArticlesURL = "$urlForRecentNews/top-headlines?country=us&from=$today";
        $response = Http::accept('application/json')
        ->withHeaders(['Authorization' => "Bearer $apikey"])
        ->get($searchArticlesURL)
        ->throw(function ($response, $e) {
        })->json();
        return RecentNews::collection($response);
    }

    // TheGaurdian API integration for various kind of news
    private function getTopHeadlinesForTheGuardian(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/search?page=1&page-size=12&q=headline&api-key=$apikey";
        $response = Http::accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            });

        $decodedNews = json_decode($response->body());
        return TheGuardianHomePageNewsResources::collection($decodedNews->response->results);
    }

    private function getBreakingNewsForTheGarudian(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/search?q=breaking&page-size=25&api-key=$apikey";
        $response = Http::accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            });
        $decodedNews = json_decode($response->body());
        return TheGuardianHomePageNewsResources::collection($decodedNews->response->results);
    }

    private function searchArticlesForTheGaurdian($keyword,$date){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/search?q=$keyword&api-key=$apikey";
        $response = Http::accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            });
        $decodedNews = json_decode($response->body());
        return TheGuardianHomePageNewsResources::collection($decodedNews->response->results);
    }

    public function getRecentNewsForTheGuardian($interest){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/search?q=$interest&api-key=$apikey";
        $response = Http::accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            });
        $decodedNews = json_decode($response->body());
        return TheGuardianHomePageNewsResources::collection($decodedNews->response->results);
    }

    // NewYorkTimes API integration for various kind of news
    private function getTopHeadlinesForNewYorkTimes(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/svc/search/v2/articlesearch.json?q=headlines&api-key=$apikey";
        $response = Http::connectTimeout(120)->accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            });
        $decodedNews = json_decode($response->body());
        return TheNewYorkTimesHomePageNewsResources::collection($decodedNews->response->docs);
    }

    private function getBreakingNewsForNewYorkTimes(){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/svc/search/v2/articlesearch.json?q=breaking&page=25&api-key=$apikey";
        $response = Http::connectTimeout(120)->accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            });
        $decodedNews = json_decode($response->body());
        return TheNewYorkTimesHomePageNewsResources::collection($decodedNews->response->docs);
    }

    private function searchArticlesForNewYorkTimes($keyword,$date){
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/svc/search/v2/articlesearch.json?q=$keyword&begin_date=$date&api-key=$apikey";
        $response = Http::connectTimeout(120)->accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            });
        $decodedNews = json_decode($response->body());
        return TheNewYorkTimesHomePageNewsResources::collection($decodedNews->response->docs);
    }

    private function getRecentNewsForNewYorkTimes(){
        $today = date("Y-m-d");
        $urlForHeadlines = (string) $this->newsContract->source[2];
        $apikey = (string) $this->newsContract->source[1];
        $headlinesFullURL = "$urlForHeadlines/svc/search/v2/articlesearch.json?&begin_date=$today&api-key=$apikey";
        $response = Http::connectTimeout(120)->accept('application/json')
            ->get($headlinesFullURL)
            ->throw(function ($response, $e) {
                dd($e->getMessage());
            });
        $decodedNews = json_decode($response->body());
        return TheNewYorkTimesHomePageNewsResources::collection($decodedNews->response->docs);
    }
}
