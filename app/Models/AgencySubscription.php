<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AgencySubscription extends Model
{
    protected $fillable = ['agency_id', 'plan_name', 'price', 'starts_at', 'ends_at', 'is_active'];


    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }
}
