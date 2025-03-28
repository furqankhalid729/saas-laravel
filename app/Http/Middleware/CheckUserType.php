<?php

// app/Http/Middleware/CheckUserType.php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserType
{
    public function handle(Request $request, Closure $next, ...$types)
    {
        $user = $request->user();
        
        if (!$user || !in_array($user->type, $types)) {
            abort(403, 'Unauthorized access');
        }

        return $next($request);
    }
}
