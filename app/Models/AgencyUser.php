<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class AgencyUser extends Authenticatable
{
    use HasFactory;

    protected $table = 'agency_users';

    protected $primaryKey = null; // No single primary key
    public $incrementing = false; // Not auto-incrementing

    protected $fillable = [
        'agency_id', 'email', 'password', 'client_id', 'phoneNo', 'relation', 'age', 'gender', 'address',
    ];

    protected $hidden = ['password'];

    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }

    // Return composite key as a string for session storage
    public function getAuthIdentifier()
    {
        return $this->email . '|' . $this->agency_id; // e.g., "vysad@mailinator.com|1"
    }
}