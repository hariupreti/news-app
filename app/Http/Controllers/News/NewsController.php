<?php

namespace App\Http\Controllers\News;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\News\SearchArticlesRequest;
use App\News\Contracts\NewsContract;
use App\News\NewsApiGateway;
use App\News\Details\NewsDetails;
use App\News\NewsCredGateway;
use App\News\TheGuardianGateway;
use Illuminate\Support\Facades\Auth;

class NewsController extends Controller
{

    public function getHomePage(){
        //Check if user is login or not
        $getUserInfo = Auth::user();
        $allNews = [];
        if(!empty($getUserInfo) && $getUserInfo != null && $getUserInfo->settings != null && $getUserInfo->settings->default_new_channel){
            $userPreferences = $getUserInfo->settings->default_new_channel;
            switch ($userPreferences) {
                case 'newsapi':
                    $contract = new NewsDetails(new NewsApiGateway(["newsapi","a32a0f9815cb4735898be8190612291e","https://newsapi.org/v2"]));
                break;
                case 'TheGuardian':
                    $contract = new NewsDetails(new TheGuardianGateway(["TheGuardian","d7d9da80-57ff-4cce-bcdf-690d3b30e470","https://content.guardianapis.com"]));
                break;
                case 'newscred':
                    $contract = new NewsDetails(new NewsCredGateway(["newscred","a32a0f9815cb4735898be8190612291e","https://nesd"]));
                break;
                default:
                    $contract = new NewsDetails(new NewsApiGateway(["default","a32a0f9815cb4735898be8190612291e","https://nesd"]));
                break;
            }
            $allNews = $contract->getHomePageNews();
        }else{
            //Load Default News
            $contract = new NewsDetails(new NewsApiGateway(["newsapi","a32a0f9815cb4735898be8190612291e","https://newsapi.org/v2/"]));
            $allNews = $contract->getHomePageNews();
        }
        // dd($allNews);
        return Inertia::render('Homepage',['topHeadlines'=>$allNews["news"],'source'=> $allNews["contract"]]);
    }

    public function searchArticles(SearchArticlesRequest $request){
        return Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get('https://newsapi.org/v2/top-headlines?country=us&pageSize=20')
            ->throw(function ($response, $e) {
            })->json();
    }

    public function getBreakingNews(){
        return Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get('https://newsapi.org/v2/everything?q=breaking&pageSize=24')
            ->throw(function ($response, $e) {
            })->json();
    }
}
