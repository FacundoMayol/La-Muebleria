<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::group(['middleware' => 'guest'], function() {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/signup', [AuthController::class, 'signup']);
    });
    Route::group(['middleware' => 'auth:sanctum'], function() {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/user', [AuthController::class, 'user']);
    });
});

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', function ($id) {
    return Product::firstOrFail($id);
});

//Rutas en caso de utilizar un carrito basado en sesión
/*Route::get('/cart', [CartController::class, 'getProducts']);
Route::post('/cart', [CartController::class, 'insertProduct']);
Route::delete('/cart', [CartController::class, 'deleteProducts']);
Route::delete('/cart/{product}', [CartController::class, 'deleteProduct']);*/


//Rutas en caso de utilizar un carrito de compras basado en base de datos, llaves y uuids de carritos.
Route::post('/carts', [CartController::class, 'create']);
Route::delete('/carts/{cart}', [CartController::class, 'destroy']);
Route::get('/carts/{cart}/items', [CartController::class, 'getProducts']);
Route::post('/carts/{cart}/items', [CartController::class, 'insertProduct']);
Route::delete('/carts/{cart}/items', [CartController::class, 'deleteProducts']);
Route::delete('/carts/{cart}/items/{product}', [CartController::class, 'deleteProduct']);