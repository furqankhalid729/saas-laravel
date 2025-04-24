<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
// class AgencyUser extends Authenticatable

{
    use Notifiable, SoftDeletes;
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'username',
        "agency_id",

        'phone_number',
        'relation',
        'age',
        'gender',
        'address'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function agency()
    {
        return $this->hasOne(Agency::class);
    }

    public function agencyUsers()
    {
        return $this->hasMany(AgencyUser::class);
    }
}
