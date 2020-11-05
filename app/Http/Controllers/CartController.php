<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Http\Resources\CartItem as CartItemResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function create(Request $request)
    {
        $cart = Cart::create([
            'user_id' => isset($userID) ? $userID : null
        ]); 
        return response()->json([
            'cart_id' => $cart->id,
            'cart_key' => $cart->key
        ], 201);
    }
    
    public function destroy(Cart $cart, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required|uuid'
        ]);

        $cartKey = $request->input('cart_key');

        if ($cart->key == $cartKey) {
            $cart->delete();
        } else {
            return response(__('messages.invalid_cart_key'), 401);
        }
    }
    
    public function getProducts(Cart $cart, Request $request)
    {
        return [
            'data' => CartItemResource::collection(CartItem::where(['cart_id' => $cart->getKey()])->get()),
            'total_items' => $cart->items()->count()
        ];
    }
    
    public function insertProduct(Cart $cart, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required|uuid',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|numeric|min:1'
        ]);

        $cartKey = $request->input('cart_key');
        $productID = $request->input('product_id');
        $quantity = $request->input('quantity');

        if ($cart->key == $cartKey) {
            CartItem::updateOrCreate(['cart_id' => $cart->getKey(), 'product_id' => $productID], ['quantity' => $quantity]);
        } else {
            return response(__('messages.invalid_cart_key'), 401);
        }
    }
    
    public function removeProduct(Cart $cart, Product $product, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required|uuid'
        ]);

        $cartKey = $request->input('cart_key');

        if ($cart->key == $cartKey) {
            CartItem::where(['cart_id' => $cart->getKey(), 'product_id' => $product->getKey()])->delete();
        } else {
            return response(__('messages.invalid_cart_key'), 401);
        }
    }
    
    public function removeProducts(Cart $cart, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required|uuid'
        ]);

        $cartKey = $request->input('cart_key');

        if ($cart->key == $cartKey) {
            CartItem::where(['cart_id' => $cart->getKey()])->delete();
        } else {
            return response(__('messages.invalid_cart_key'), 401);
        }
    }
    
    /*//En caso de utilizar un carrito basado en sesión
    public function getProducts(Request $request)
    {
        if(Auth::check()){
            if(Auth::user()->cart){
                $items = Auth::user()->cart->items();
            }else{
                Cart::create(Auth::user());
                return ['data' => [], 'total_cost' => 0, 'total_items' => 0];
            }
        }else{
            if($request->session()->has('cart')){
                $items = Cart::findOrFail($request->session()->get('cart'))->items();
            }else{
                $cart = Cart::create();
                session(['cart' => $cart->id]);
                return ['data' => [], 'total_cost' => 0, 'total_items' => 0];
            }
        }
        $totalCost = $items->sum('price');
        $count = $items->count();
        //No paginado
        return ['data' => $items->get(), 'total_cost' => $totalCost, 'total_items' => $count];
        //Paginado
        /*$page = (int) (ctype_digit($request->query('p'))?$request->query('p'):0);
        return ['data' => $items->skip($page*5)->take(5)->get(), 'total_cost' => $totalCost, 'total_items' => $count, 'n_pages' => ceil($count/5), 'current_page' => $page];*//*
    }
    
    public function insertProduct(Request $request)
    {
        $validator = $request->validate([
            'product_id' => 'required|exists:App\Models\Product,id',
            'quantity' => 'required|numeric|min:1'
        ]);

        $productID = $request->input('product_id');
        $quantity = $request->input('quantity');

        if(Auth::check()){
            if(Auth::user()->cart){
                $cart = Auth::user()->cart;
            }else{
                $cart = Cart::create(Auth::user());
            }
        }else{
            if($request->session()->has('cart')){
                $cart = Cart::findOrFail($request->session()->get('cart'));
            }else{
                $cart = Cart::create();
                session(['cart' => $cart->id]);
            }
        }
        CartItem::updateOrCreate(['cart_id' => $cart->getKey(), 'product_id' => $productID], ['quantity' => $quantity]);
    }
    
    public function deleteProducts(Request $request)
    {
        if(Auth::check()){
            if(Auth::user()->cart){
                return Auth::user()->cart->items()->delete();
            }
        }else{
            if($request->session()->has('cart')){
                return Cart::findOrFail($request->session()->get('cart'))->items()->delete();
            }
        }
        return response()->json(null, 204);
    }
    
    public function deleteProduct(Product $product, Request $request)
    {
        if(Auth::check()){
            if(Auth::user()->cart){
                return Auth::user()->cart->items()->where('product_id', $product->id)->delete();
            }
        }else{
            if($request->session()->has('cart')){
                return Cart::findOrFail($request->session()->get('cart'))->items()->where('product_id', $product->id)->delete();
            }
        }
        return response()->json(null, 204);
    }*/

    //En caso de utilizar un carrito de compras basado en base de datos, llaves y uuids de carritos.
    /*public function create(Request $request)
    {
        if (Auth::guard('api')->check()) {
            $userID = Auth::auth('api')->user()->getKey();
        }

        $cart = Cart::create([
            'user_id' => isset($userID) ? $userID : null

        ]); 
        return response()->json([
            'cart_token' => $cart->id,
            'cart_key' => $cart->key
        ], 201);
    }
    
    public function getProducts(Cart $cart, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required'
        ]);

        $cartKey = $request->input('cart_key');

        if ($cart->key == $cartKey) {
            return [
                'cart' => $cart->id,
                'items' => new $cart->items
            ];

        } else {
            return response(null, 400);
        }
    }
    
    public function destroy(Cart $cart, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required'
        ]);

        $cartKey = $request->input('cart_key');

        if ($cart->key == $cartKey) {
            $cart->delete();
        } else {
            return response(null, 400);
        }

    }
    
    public function addProduct(Cart $cart, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required',
            'product_id' => 'required',
            'quantity' => 'required|numeric|min:1'
        ]);

        $cartKey = $request->input('cart_key');
        $productID = $request->input('product_id');
        $quantity = $request->input('quantity');

        if ($cart->key == $cartKey) {
            $Product = Product::findOrFail($productID);

            $cartItem = CartItem::find(['cart_id' => $cart->getKey(), 'product_id' => $Product->getKey()]);
            if (!$cartItem) {
                CartItem::create(['cart_id' => $cart->getKey(), 'product_id' => $productID, 'quantity' => $quantity]);
            } else {
                return response(null, 409);
            }
        } else {
            return response(null, 400);
        }
    }
    
    public function removeProduct(Cart $cart, Product $product, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required',
            'quantity' => 'required|numeric|min:1'
        ]);

        $cartKey = $request->input('cart_key');
        $quantity = $request->input('quantity');

        if ($cart->key == $cartKey) {
            $cartItem = CartItem::findOrFail(['cart_id' => $cart->getKey(), 'product_id' => $product->getKey()]);
            $cartItem->delete();
        } else {
            return response(null, 400);
        }
    }
    
    public function patchProduct(Cart $cart, Product $product, Request $request)
    {
        $validator = $request->validate([
            'cart_key' => 'required',
            'quantity' => 'required|numeric|min:1'
        ]);

        $cartKey = $request->input('cart_key');
        $quantity = $request->input('quantity');

        if ($cart->key == $cartKey) {
            $cartItem = CartItem::findOrFail(['cart_id' => $cart->getKey(), 'product_id' => $product->getKey()]);
            $cartItem->quantity = $quantity;
            $cartItem->save();
        } else {
            return response(null, 400);
        }
    }*/
}
