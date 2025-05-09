<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AgencySetting extends Model
{
    protected $fillable = ['agency_id', 'settings'];

    protected $casts = [
        'settings' => 'array',
    ];

    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }
}
