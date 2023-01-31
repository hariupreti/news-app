<?php

namespace App\Http\Controllers\News;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsController extends Controller
{
    public function getHomePage(){
        $topHeadlines = Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get('https://newsapi.org/v2/top-headlines?country=us&pageSize=10')
            ->throw(function ($response, $e) {
            })->json();
        return Inertia::render('Homepage',['topHeadlines'=>$topHeadlines]);
    }

    public function getBreakingNews(){
        return Http::accept('application/json')
            ->withHeaders(['Authorization' => "Bearer ".env('NEWSORGAPIKEY')])
            ->get('https://newsapi.org/v2//everything?q=breaking&pageSize=14')
            ->throw(function ($response, $e) {
            })->json();
    }
}
