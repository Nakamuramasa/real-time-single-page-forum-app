<?php

namespace App\Http\Controllers;

use App\Model\Reply;
use App\Model\Question;
use Illuminate\Http\Request;
use App\Http\Resources\ReplyResource;
use Symfony\Component\HttpFoundation\Response;
use App\Notifications\NewReplyNotification;
use App\Events\DeleteReplyEvent;

class ReplyController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Question $question)
    {
        return ReplyResource::collection($question->replies);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Question $question, Request $request)
    {
        $reply = new Reply;
        $reply->body = $request->body;
        $reply->question_id = $question->id;
        $reply->user_id = auth()->id();
        $reply->save();
        $user = $question->user;
        if($reply->user_id !== $question->user_id){
            $user->notify(new NewReplyNotification($reply));
        }
        return response(['reply' => new ReplyResource($reply)], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question, Reply $reply)
    {
        return new ReplyResource($reply);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function update(Question $question, Request $request, Reply $reply)
    {
        $reply->update($request->all());
        return response('Updated', Response::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question, Reply $reply)
    {
        $reply->delete();
        broadcast(new DeleteReplyEvent($reply->id))->toOthers();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
