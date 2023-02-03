<?php
namespace App\News;
use App\News\Contracts\NewsContract;

class TheNewYorkGateway implements NewsContract
{
    public $source;


    function __construct($source){
        $this->source = $source;
    }

    public function setSource($source)
    {
        return [
            'source' => $this->source,
        ];
    }
    
}
