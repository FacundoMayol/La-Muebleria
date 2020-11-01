<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $list = Product::where('name', 'like', '%'.str_replace(
            ['\\', '%', '_'],
            ['\\\\', '\\%', '\\_'],
            $request->query('s')
        ).'%');
        $page = (int) (ctype_digit($request->query('p'))?$request->query('p'):0);
        $count = $list->count();
        return ['data' => $list->skip($page*10)->take(10)->get(), 'total' => $count, 'n_pages' => ceil($count/10), 'current_page' => $page];
    }
}
