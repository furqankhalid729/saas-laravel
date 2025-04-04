<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes;

    protected $fillable = [
        'name', 'email', 'password', 'role'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Relationship with owned agency (for agency users)
    public function agency()
    {
        return $this->hasOne(agency::class);
    }

    // Relationship with agencies (for client users)
    public function agencies()
    {
        return $this->belongsToMany(agency::class)
            ->using(AgencyUser::class)
            ->withPivot(['client_id', 'status'])
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
}