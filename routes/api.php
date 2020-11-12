<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
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

if (App::environment('production')) {
    URL::forceScheme('https');
}

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

Route::apiResource('/messages', MessageController::class)->except([
    'update'
]);

Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/category/{category:name}', [ProductController::class, 'indexFiltered']);
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);
});

Route::get('/ratings/{product}', [RatingController::class, 'index']);
Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('/user/ratings/{product}', [RatingController::class, 'show']);
    Route::post('/user/ratings/{product}', [RatingController::class, 'create']);
    Route::delete('/user/ratings/{product}', [RatingController::class, 'destroy']);
});

Route::post('/carts', [CartController::class, 'create']);
Route::delete('/carts/{cart}', [CartController::class, 'destroy']);
Route::get('/carts/{cart}/items', [CartController::class, 'getProducts']);
Route::post('/carts/{cart}/items', [CartController::class, 'insertProduct']);
Route::delete('/carts/{cart}/items', [CartController::class, 'removeProducts']);
Route::delete('/carts/{cart}/items/{product}', [CartController::class, 'removeProduct']);