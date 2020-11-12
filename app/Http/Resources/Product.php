<?php

namespace App\Http\Resources;

use App\Http\Resources\Image as ImageResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'model' => $this->model,
            'category' => $this->category,
            'price' => $this->price,
            'description' => $this->description,
            'thumbnail' => Storage::url($this->thumbnail),
            'images' => ImageResource::collection($this->images),
            'rating' => $this->ratings()->avg('rating'),
            'n_users_rating' => $this->ratings()->count(),
            'user_rating' => $this->when(Auth::check(), function () {
                return $this->ratings()->where('user_id', Auth::id())->value('rating');
            }),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
