<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Rating;
use App\Http\Resources\Rating as RatingResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function index(Product $product, Request $request)
    {
        return [
            'rating' => $product->ratings()->avg('rating'),
            'n_users_rating' => $product->ratings()->count()
        ];
    }

    public function show(Product $product, Request $request)
    {
        return new RatingResource($product->ratings()->where('user_id', Auth::id())->value('rating'));
    }

    public function create(Product $product, Request $request)
    {
        $validator = $request->validate([
            'rating' => 'required|between:1,6'
        ]);

        $rating = $request->input('rating');

        Rating::updateOrCreate(['user_id' => Auth::id(), 'product_id' => $product->id], ['rating' => $rating]);

        return response(__('messages.rating_created'));
    }

    public function destroy(Product $product, Request $request)
    {
        $product->ratings()->where('user_id', Auth::id())->delete();

        return response(__('messages.rating_destroyed'), 204);
    }
}
