<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

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
            'price' => $this->price,
            'description' => $this->description,
            'manufacturer' => $this->manufacturer,
            'rating' => $this->ratings()->avg('rating'),
            'n_users_rating' => $this->ratings()->count(),
            'user_rating' => $this->when(Auth::check(), function () {
                return $this->ratings()->where('user_id', Auth::id())->value('rating');
            }),
            'image' => $this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
