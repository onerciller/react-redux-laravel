<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // ALLOW OPTIONS METHOD
        if ($request->isMethod('options')) {
            return response('', 200)
                ->header('Access-Control-Allow-Origin:','http://localhost:8080')
                ->header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
                ->header('Access-Control-Allow-Headers', 'accept, content-type, x-xsrf-token, x-csrf-token'); // Add any required headers here
        }
        return $next($request);
    }
}
