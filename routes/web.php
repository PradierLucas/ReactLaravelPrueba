<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\VerdurasController;
use App\Models\verduras;
use Illuminate\Support\Facades\Route;

Route::middleware('auth::sanctum')->group(function(){
        Route::get('/', [VerdurasController::class, 'index']);
        Route::post('/crear', [VerdurasController::class, 'guardar']);
        Route::get('/{id}', [VerdurasController::class, 'show']);
        Route::put('/{id}', [VerdurasController::class, 'guardaredit']);
        Route::patch('/{id}/estado', [VerdurasController::class, 'cambiarEstado']);
        });


Route::get('/login',[AuthController::class,'index'])->name('login');
Route::post('/loginverif',[VerdurasController::class, 'login']);


Route::get('/{any}', function () {
    return view('react'); 
})->where('any', '.*');
