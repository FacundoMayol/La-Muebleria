<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{    
    public function signup(Request $request) {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);        
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);        
        $user->save();        
        return response()->json(__('messages.signup_success'), 201);
    }    
    
    public function login(Request $request) {
        $request->validate([
            'email' => 'required|string|email|exists:App\Models\User,email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);        
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials, $request->remember_me)) {
            return response()->json(__('messages.login_failed'), 401);
        } else {
            return response()->json(__('messages.login_success'));
        }
    }
    
    public function logout(Request $request) {
        Auth::guard('web')->logout();
        return response()->json(__('messages.logout_success'));  
    }

    public function user(Request $request) {
        return Auth::user();
    }
}