<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserMember extends Model
{
    protected $fillable = [
        'user_id',
        'member_id',
        'relation',
    ];

    public function member()
    {
        return $this->belongsTo(User::class, 'member_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
