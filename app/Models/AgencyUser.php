<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AgencyUser extends Model
{
    protected $fillable = ['user_id', 'agency_id', 'role', 'password'];

    protected $hidden = ['password'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }
}
