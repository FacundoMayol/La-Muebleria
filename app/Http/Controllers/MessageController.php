<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function index(Request $request)
    {
        $this->authorize('viewAny', Message::class);
        $data = Message::query();
        return ['data' => $data->get(), 'total' => $data->count()];
    }

    public function show(Message $message, Request $request)
    {
        $this->authorize('view', $message);
        return $message;
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'name' => 'required|string',
            'title' => 'required|string|max:100',
            'message' => 'required|string|max:512'
        ]);        
        $message = new Message([
            'name' => $request->name,
            'email' => $request->email,
            'title' => $request->title,
            'message' => $request->message
        ]);        
        $message->save();        
        return response()->json(__('messages.message_create_success'), 201);
    }

    public function destroy(Message $message, Request $request)
    {
        $this->authorize('delete', $message);
        $message->delete();
    }
}
