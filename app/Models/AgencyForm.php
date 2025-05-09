<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AgencyForm extends Model
{
    protected $fillable = ['agency_id','description', 'form_name' , 'form_data', 'settings'];
    protected $casts = [
        'form_data' => 'array',
        'settings' => 'array',
    ];

    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }
}
