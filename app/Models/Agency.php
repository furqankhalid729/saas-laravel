<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    protected $fillable = ['name', 'domain', 'settings'];

    protected $casts = [
        'settings' => 'array',
    ];

    public function agencyUsers()
    {
        return $this->hasMany(AgencyUser::class);
    }

    public function subscription()
    {
        return $this->hasOne(AgencySubscription::class);
    }

    // In Agency model (Agency.php)
    public function user()
    {
        return $this->belongsTo(User::class);  // One agency can have many users
    }
}
