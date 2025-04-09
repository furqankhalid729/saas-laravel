<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class AgencyUser extends Authenticatable
{
    use HasFactory;

    protected $table = 'agency_users';

    protected $fillable = [
        'agency_id',  
        'email',
        'password',       
        'client_id',  
        'phoneNo',
        'relation',
        'age',
        'gender',
        'address',
    ];
    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }



}
