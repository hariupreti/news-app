<?php

namespace App\Http\Resources\News\TheGuardian;

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
            'author' => $this->sectionName,
            'content' => $this->apiUrl,
            'description' => $this->webUrl,
            'publishedAt' => Carbon::parse($this->webPublicationDate)->diffForHumans(),
            'source' => $this->type,
            'title' => $this->webTitle,
            'url' => $this->webUrl,
            'urlToImage' => "",
            'contentfromlink' => true
        ];
    }
}
