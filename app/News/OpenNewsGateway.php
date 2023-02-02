<?php
namespace App\News;
use App\News\Contracts\NewsContract;

class OpenNewsGateway implements NewsContract
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
