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

class NewsController extends Controller
{

    public function getHomePage(){
        
        // $contract = new NewsDetails(new NewsApiGateway(["newsapi","a32a0f9815cb4735898be8190612291e","https://newsapi.org/v2/everything"]));
        $contract = new NewsDetails(new NewsCredGateway(["credapi","a32a0f9815cb4735898be8190612291e","https://nesd"]));
        $allNews = $contract->getHomePageNews();
        dd($allNews);
        // $topHeadlines = [];
        // $error = "";
        // try {
        //     $topHeadlines = Http::accept('application/json')
        //     ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
        //     ->get('https://newsapi.org/v2/top-headlines?country=us&pageSize=10')
        //     ->throw(function ($response, $e) {
        //     })->json();
        // } catch (\Throwable $th) {
        //     $error = $th->getMessage();
        // }
        return Inertia::render('Homepage',['topHeadlines'=>$allNews["news"]]);
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
