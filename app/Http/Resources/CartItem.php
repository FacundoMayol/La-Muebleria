<?php

namespace App\Http\Resources;

use App\Http\Resources\Product as ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CartItem extends JsonResource
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
            'product' => new ProductResource($this->product),
            'quantity' => $this->quantity
        ];
    }
}
