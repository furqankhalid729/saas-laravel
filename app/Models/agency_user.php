<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class AgencyUser extends Pivot
{
    protected $table = 'agency_user';
    
    protected $casts = [
        'status' => 'string',
    ];
    
    // Generate display ID
    public function getDisplayIdAttribute()
    {
        return "{$this->agency->slug}-{$this->client_id}";
    }
}