<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('user')->group(function () {
    Route::post('/verifyToken', 'UserController@show')->middleware('auth:api');
    Route::post('/{userId}', 'UserController@update')->middleware('auth:api');
    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');
});

Route::group(['middleware' => 'auth:api'], function(){
    Route::prefix('home')->group(function () {
        Route::get('/', 'HouseController@index');
        Route::get('/{id}', 'HouseController@show');
    });
    
    Route::prefix('cost')->group(function () {
        Route::get('/parent/{houseId}', 'CostController@showByHouseId');
        Route::post('/', 'CostController@store');
        Route::delete('/{id}', 'CostController@destroy');
    });
});
