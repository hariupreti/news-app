<?php

namespace App\Http\Resources\News\NewsAPI;

use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RecentNews extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'author' => $this->author,
            'content' => $this->content,
            'description' => $this->description,
            'publishedAt' => Carbon::parse($this->publishedAt)->diffForHumans(),
            'source' => $this->source,
            'title' => $this->title,
            'url' => $this->url,
            'urlToImage' => $this->urlToImage,
            'contentfromlink' => false
        ];
    }
}
