<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Agency extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name', 'slug', 'user_id', 'settings'
    ];

    protected $casts = [
        'settings' => 'array',
    ];

    // Relationship with owner (agency admin)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship with clients
    public function users()
    {
        return $this->belongsToMany(User::class)
            ->using(AgencyUser::class)
            ->withPivot(['client_id', 'status'])
            ->withTimestamps();
    }

    // Helper to get active clients
    public function activeClients()
    {
        return $this->users()->wherePivot('status', 'active');
    }
}
