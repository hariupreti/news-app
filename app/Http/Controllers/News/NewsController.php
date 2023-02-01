<?php

namespace App\Http\Controllers\News;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\News\SearchArticlesRequest;

class NewsController extends Controller
{
    public function searchArticles(SearchArticlesRequest $request){
        return Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get('https://newsapi.org/v2/top-headlines?country=us&pageSize=10')
            ->throw(function ($response, $e) {
            })->json();
    }

    public function getHomePage(){
        $topHeadlines = [];
        $error = "";
        try {
            $topHeadlines = Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get('https://newsapi.org/v2/top-headlines?country=us&pageSize=10')
            ->throw(function ($response, $e) {
            })->json();
        } catch (\Throwable $th) {
            $error = $th->getMessage();
        }
        return Inertia::render('Homepage',['topHeadlines'=>$topHeadlines,'error'=>$error]);
    }

    public function getBreakingNews(){
        return Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get('https://newsapi.org/v2/everything?q=breaking&pageSize=14')
            ->throw(function ($response, $e) {
            })->json();
    }
}
