<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\UserAgency;

class UserAgencyFactory extends Factory
{
    protected $model = UserAgency::class;

    public function definition()
    {
        return [
            'user_id' => 1,  
            'agency_id' => 1,
        ];
    }
}
