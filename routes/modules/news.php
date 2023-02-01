<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\News\NewsController;

Route::get('/', [NewsController::class, 'getHomePage'])->name("Homepage");
Route::get('/breaking-news', [NewsController::class, 'getBreakingNews'])->name("BreakingNews");
Route::post('/search-articles', [NewsController::class, 'searchArticles'])->name("ArticlesSearch");
