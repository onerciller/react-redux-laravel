<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

use App\Http\Requests;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return response()->json($posts,200);
    }

    public function store(Request $request)
    {
        $post = Post::create([
            'title' => $request->input("title"),
             'body' => $request->input('body'),
             'user_id' => 1
        ]);
    }

    public function show ($id){
        $post = Post::find($id);

        return response()->json($post,200);
    }

    public function edit ($id){
        $post = Post::find($id);

        return response()->json($post,200);
    }

    public function update($id,Request $request)
    {
        $post = Post::find($id);
        $post->update([
            'title' => $request->input("title"),
             'body' => $request->input('body'),
             'user_id' => 1
        ]);

        return response()->json("UPDATED",200);
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        
        return response()->json("DELETED",200);
    }
}
