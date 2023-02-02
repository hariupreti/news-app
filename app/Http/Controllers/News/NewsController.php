<?php

namespace App\Http\Controllers\News;
use Inertia\Inertia;
use App\News\NewsAPIGateway;
use App\News\NewsCredGateway;
use App\News\TheGuardianGateway;
use App\News\Details\NewsDetails;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\News\SearchArticlesRequest;

class NewsController extends Controller
{

    public function getHomePage(){
        $news = [];
        $newsContract = $this->preferenceBasedNews();
        $news = $newsContract->getHomePageNews();
        // dd($news);
        return Inertia::render('Homepage',['topHeadlines'=>$news["news"]["headlines"],'source'=> $news["contract"]->source[0]]);
    }

    public function searchArticles(SearchArticlesRequest $request){
        $news = [];
        $newsContract = $this->preferenceBasedNews();
        $news = $newsContract->getSearchArticles($request->article??"",$request->publishDate??"");
        // return Http::accept('application/json')
        //     ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
        //     ->get('https://newsapi.org/v2/everything?q=tesla&from=2023-01-02&sortBy=publishedAt&pageSize=20')
        //     ->throw(function ($response, $e) {
        //     })->json();
        return response()->json($news["news"]["articles"]);
    }

    public function getBreakingNews(){
        $news = [];
        $newsContract = $this->preferenceBasedNews();
        $news = $newsContract->getBreakingNews();
        return response()->json($news["news"]);
    }

    private function preferenceBasedNews(){
        $getUserInfo = Auth::user();
        if(!empty($getUserInfo) && $getUserInfo != null && $getUserInfo->settings != null && $getUserInfo->settings->default_new_channel){
            $userPreferences = $getUserInfo->settings->default_new_channel;
            switch ($userPreferences) {
                case 'newsapi':
                    $contract = new NewsDetails(new  NewsAPIGateway(["newsapi",env('NEWSAPIKEY'),"https://newsapi.org/v2"]));
                break;
                case 'TheGuardian':
                    $contract = new NewsDetails(new TheGuardianGateway(["TheGuardian",env('THEGUARDIAN_API_KEY'),"https://content.guardianapis.com"]));
                break;
                case 'newscred':
                    $contract = new NewsDetails(new NewsCredGateway(["newscred","a32a0f9815cb4735898be8190612291e","https://nesd"]));
                break;
                default:
                    $contract = new NewsDetails(new NewsApiGateway(["default","a32a0f9815cb4735898be8190612291e","https://nesd"]));
                break;
            }
            return $contract;
        }else{
            //Load Default News
            $contract = new NewsDetails(new NewsApiGateway(["newsapi",env('NEWSAPIKEY'),"https://newsapi.org/v2/"]));
            return $contract;
        }
    }
}
