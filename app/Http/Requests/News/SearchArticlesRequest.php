<?php

namespace App\Http\Requests\News;

use Illuminate\Foundation\Http\FormRequest;

class SearchArticlesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'article' => 'required|min:4|max:20',
            'publishDate' => 'required|date|before_or_equal:'.now(),
            'source' => 'required',
            'category' => 'required',
        ];
    }
}
