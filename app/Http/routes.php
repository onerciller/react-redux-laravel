<?php

/*
|--------------------------------------------------------------------------
| Application Routes |--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.  | It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', function (){
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');
    Route::group(['prefix' => 'api','cors'],function () {
       Route::post("login","AuthenticateController@authenticate");
        Route::post('/register','AuthenticateController@register');
    });

Route::get('deneme', function () {
    $dd =  \App\Post::deneme();
    dd($dd);
});


        Route::group(['prefix' => 'api','jwt.auth','cors'],function () {
           Route::resource('posts','PostController');
        });


