<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AgencyTimeLine extends Model
{
    protected $fillable = [
        'agency_id',
        'user_id',
        'title',
        'description',
        'type',
        'related_id',
        'created_by',
    ];

    // Relations
    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
