<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use Mail;
use App\Mail\ResetPasswordMail;

class ResetPasswordController extends Controller
{
    //

    public function sendEmail(Request $request)
    {
    	// return $request->all();
    	if(! $this->validateEmail($request->email)){
    		return $this->failResponse();
    	}

    	$this->send($request->email);
    	return $this->successResponse();
    }

    public function send($email)
    {
    	Mail::to($email)->send(new ResetPasswordMail);
    }

    public function validateEmail($email)
    {
    	return !!User::where('email', $email)->first(); // !! makes it boolean
    }

    public function failResponse()
    {
    	return response()->json([
    		'error'=> "Email doesn\'t found on our database."
    	], Response::HTTP_NOT_FOUND);
    }

    public function successResponse()
    {
    	return response()->json([
    		'error'=> "Reset Email sent successfully."
    	], Response::HTTP_OK);
    }
}
