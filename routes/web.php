
<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

//หน้าที่คือการเรียกใช้ข้อมูลจากProductController

//สร้างmiddlewareให้products เพื่อให้ไปเช็คว่าเข้าสู่ระบบแล้วหรือยัง ถ้าเข้าสู่ระบบแล้วจะสามารถดูได้ ถ้าไม่จะนำไปสู่หน้าเข้าสู่ระบบ
Route::middleware('auth')->group(function () {
    Route::get('/products', [ProductController::class, 'index'])->name('Products.index'); //เปลี่ยนชื่อให้ใช้งานง่ายขึ้น
    Route::get('/products/{id}', [ProductController::class, 'show'])->name('Products.show');
});


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
