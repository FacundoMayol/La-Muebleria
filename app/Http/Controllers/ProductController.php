<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Http\Resources\Product as ProductResource;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $list = Product::query();
        if($request->input('s'))
            $list = $list->where('name', 'like', '%'.str_replace(
                ['\\', '%', '_'],
                ['\\\\', '\\%', '\\_'],
                $request->input('s', '')
            ).'%');
        $page = (int) $request->input('p', 0);
        $count = $list->count();
        $list = $list->skip($page*10)->take(10);
        return ['data' => ProductResource::collection($list->get()), 'total' => $count, 'n_pages' => ceil($count/10), 'current_page' => $page];
    }

    public function indexFiltered(Category $category, Request $request)
    {
        $list = $category->products();
        $list = $list->with(['ratings'])
            ->leftJoin('ratings', 'ratings.product_id', '=', 'products.id')
            ->select(['products.*', DB::raw('avg("ratings"."rating") as "rating"')])
            ->groupBy('products.id');
        $maxPrice = $list->get()->max('price');
        if($request->input('s'))
            $list = $list->where('name', 'like', '%'.str_replace(
                ['\\', '%', '_'],
                ['\\\\', '\\%', '\\_'],
                $request->input('s', '')
            ).'%');
        $priceStart = is_numeric($request->input('price_start'))?$request->input('price_start'):null;
        $priceEnd = is_numeric($request->input('price_end'))?$request->input('price_end'):null;
        if($priceStart)
            $list = $list->where('products.price', '>=', (float) $priceStart);
        if($priceEnd)
            $list = $list->where('products.price', '<=', (float) $priceEnd);
        $ratingStart = is_numeric($request->input('rating_start'))?$request->input('rating_start'):null;
        $ratingEnd = is_numeric($request->input('rating_end'))?$request->input('rating_end'):null;
        if($ratingStart)
            $list = $list->having(DB::raw('avg("ratings"."rating")'), '>=', (int) $ratingStart);
        if($ratingEnd)
            $list = $list->having(DB::raw('avg("ratings"."rating")'), '<=', (int) $ratingEnd);
        $sort = $request->input('sort');
        if($sort){
            if($sort != 'rating')
                $list = $list->orderBy('products.'.$sort, $request->has('sortd')?'desc':'asc');
            else
                $list = $list->orderBy($sort, $request->has('sortd')?'desc':'asc');
        }
        $page = (int) $request->input('p', 0);
        $count = $list->get()->count();
        $list = $list->skip($page*10)->take(10);
        return ['data' => ProductResource::collection($list->get()), 'total' => $count, 'n_pages' => ceil($count/10), 'current_page' => $page,'max_price' => $maxPrice];
    }

    public function show(Product $product, Request $request)
    {
        return new ProductResource($product);
    }

    public function store(Request $request)
    {
        $this->authorize('create', Product::class);
        $request->validate([
            'name' => 'required|string|max:100',
            'model' => 'required|string|max:100',
            'category' => 'required|exists:categories,id',
            'price' => 'required|numeric',
            'description' => 'string',
            'thumbnail' => 'file|image|max:2048',
            'details.*' => 'file|image|max:2048'
        ]);   
        $product = new Product;
        $product->name = $request->input('name');
        $product->model = $request->input('model');
        $product->category_id = Category::findOrFail($request->input('category'))->id;
        $product->price = $request->input('price');
        $product->description = $request->input('description', '');
        if($request->hasFile('thumbnail')){
            $file = $request->file('thumbnail');
            $filename = $file->hashName();
            Storage::putFileAs(
                'public/products', $file, $filename
            );
            $product->thumbnail = $filename;
        }
        $product->save();
        if($request->hasFile('details')){
            foreach($request->file('details') as $file){
                $filename = $file->hashName();
                Storage::putFileAs(
                    'public/products', $file, $filename
                );
                Image::create([
                    'product_id' => $product->id,
                    'image' => $filename
                ]);
            }
        }
    }

    public function destroy(Product $product, Request $request)
    {
        $this->authorize('delete', $product);
        $product->delete();
    }
}
