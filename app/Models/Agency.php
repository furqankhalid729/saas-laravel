<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'user_id', 'settings'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'agency_users')
                    ->withPivot('client_id')
                    ->withTimestamps();
    }
    

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

