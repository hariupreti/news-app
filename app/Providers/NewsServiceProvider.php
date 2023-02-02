<?php

namespace App\Providers;

use App\News\Contracts\NewsContract;
use App\News\NewsApiGateway;
use App\News\Details\NewsDetails;
use Illuminate\Support\ServiceProvider;

class NewsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(NewsContract::class, function ($app) {
            if(request()->has('source')){
                return new NewsApiGateway("NewsAPIgateway");
            }else{
                return new NewsApiGateway("OpenNewsGateway");
            }
        });

        // $this->app->bind(NewsDetails::class, function ($app) {
        //     dd(request()->all());
        //     if(request()->has("source")){
        //         return new NewsApiGateway("NewsAPI","APIKEY","http://newsapi.org","authenticationType");
        //     }else{
        //         dd("Hello there");
        //         // return new NewsApiGateway("NewsAPI");
        //         // switch (request()->source) {
        //         // case 'newsapi':
        //         // return new NewsApiGateway("NewsAPI","APIKEY","http://newsapi.org","authenticationType");
        //         // break;

        //         // case 'newsapi':
        //         // return new NewsApiGateway("NewsAPI","APIKEY","http://newsapi.org","authenticationType");
        //         // break;

        //         // default:
        //         // return new NewsApiGateway("NewsAPI","APIKEY","http://newsapi.org","authenticationType");
        //         // break;
        //         // }
        //     }
        // });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
