<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Resources\Product as ProductResource;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $list = Product::where('name', 'like', '%'.str_replace(
            ['\\', '%', '_'],
            ['\\\\', '\\%', '\\_'],
            $request->input('s', '')
        ).'%');
        if($request->input('sort'))
            $list = $list->orderBy($request->input('sort'), $request->has('sortd')?'desc':'asc');
        $page = (int) $request->input('p', 0);
        $count = $list->count();
        return ['data' => ProductResource::collection($list->skip($page*10)->take(10)->get()), 'total' => $count, 'n_pages' => ceil($count/10), 'current_page' => $page];
    }

    public function show(Product $product, Request $request)
    {
        return new ProductResource($product);
    }
}
