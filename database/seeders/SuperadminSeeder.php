<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SuperadminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'SAAS Platform Owner',
            'email' => 'superadmin@saas.com',
            'password' => bcrypt('superadmin123'),
            'type' => 'superadmin',
        ]);
        
        \App\Models\User::create([
            'name' => 'SAAS Technical Admin',
            'email' => 'tech@saas.com',
            'password' => bcrypt('techadmin123'),
            'type' => 'superadmin',
        ]);
    }
}
