<?php

namespace App\Http\Resources\News\TheNewYorkTimes;

use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class HomePageNewsResources extends JsonResource
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
            'author' => $this->source,
            'content' => $this->abstract,
            'description' => $this->lead_paragraph,
            'publishedAt' => Carbon::parse($this->pub_date)->diffForHumans(),
            'source' => $this->section_name,
            'title' => $this->abstract,
            'url' => $this->web_url,
            'urlToImage' => "",
            'contentfromlink' => true
        ];
    }
}
