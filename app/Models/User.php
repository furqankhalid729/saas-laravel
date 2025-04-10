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
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function agencies()
{
    return $this->belongsToMany(Agency::class, 'agency_users')
                ->withPivot('client_id')
                ->withTimestamps();
}

    // Helper methods
    public function isSuperAdmin()
    {
        return $this->role === 'superadmin';
    }

    public function isAgency()
    {
        return $this->role === 'agency';
    }

    public function isRegularUser()
    {
        return $this->role === 'user';
    }

    public function UserSubscription()
    {
       return $this->hasMany(UserSubscription::class, 'user_id');
    }

    
}
