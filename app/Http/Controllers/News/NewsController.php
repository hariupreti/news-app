<?php

namespace App\Http\Controllers\News;
use Inertia\Inertia;
use App\News\NewsAPIGateway;
use App\News\TheNewYorkGateway;
use App\News\TheGuardianGateway;
use App\News\Details\NewsDetails;
use App\Http\Controllers\Controller;
use App\Http\Requests\News\RecentNewsRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\News\SearchArticlesRequest;

class NewsController extends Controller
{

    public function getHomePage(){
        $news = [];
        $newsContract = $this->preferenceBasedNews();
        $news = $newsContract[0]->getHomePageNews();
        $interests = $newsContract[1];
        return Inertia::render('Homepage',['topHeadlines'=>$news["news"]["headlines"],'source'=> $news["contract"]->source[0],"interests" => $interests]);
    }

    public function searchArticles(SearchArticlesRequest $request){
        $news = [];
        $newsContract = $this->preferenceBasedNews();
        $news = $newsContract[0]->getSearchArticles($request->article??"",$request->publishDate??"");
        return response()->json($news["news"]["articles"]);
    }

    public function getBreakingNews(){
        $news = [];
        $newsContract = $this->preferenceBasedNews();
        $news = $newsContract[0]->getBreakingNews();
        return response()->json($news["news"]);
    }

    public function getMostRecent(RecentNewsRequest $request){
        $news = [];
        $newsContract = $this->preferenceBasedNews();
        $news = $newsContract[0]->getRecentNews($request->interest??"");
        return response()->json($news["news"]["recentNews"]);
    }

    private function preferenceBasedNews(){
        $getUserInfo = Auth::user();
        if(!empty($getUserInfo) && $getUserInfo != null && $getUserInfo->settings != null && $getUserInfo->settings->default_new_channel){
            $userInterests = unserialize($getUserInfo->settings->interest);
            $userPreferences = $getUserInfo->settings->default_new_channel;
            switch ($userPreferences) {
                case 'newsapi':
                    $contract = new NewsDetails(new  NewsAPIGateway(["newsapi",env('NEWSAPIKEY'),"https://newsapi.org/v2"]));
                break;
                case 'TheGuardian':
                    $contract = new NewsDetails(new TheGuardianGateway(["TheGuardian",env('THEGUARDIAN_API_KEY'),"https://content.guardianapis.com"]));
                break;
                case 'NewYorkTimes':
                    //param: source,apikey,apisecret
                    $contract = new NewsDetails(new TheNewYorkGateway(["NewYorkTimes",env('THENEWYORKTIME_API_KEY'),"https://api.nytimes.com"]));
                break;
                default:
                    $contract = new NewsDetails(new NewsAPIGateway(["newsapi",env('NEWSAPIKEY'),"https://newsapi.org/v2"]));
                break;
            }
            return [$contract,$userInterests];
        }else{
            //Load Default News
            $contract = new NewsDetails(new NewsApiGateway(["newsapi",env('NEWSAPIKEY'),"https://newsapi.org/v2/"]));
            return [$contract,[]];
        }
    }
}
