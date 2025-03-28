<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AgenciesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $agencies = [
            [
                'name' => 'Global Visa Experts',
                'subdomain' => 'globalvisa',
                'settings' => ['theme' => 'blue', 'currency' => 'USD']
            ],
            [
                'name' => 'Premium Immigration Services',
                'subdomain' => 'premiumimmigration',
                'settings' => ['theme' => 'green', 'currency' => 'EUR']
            ],
            [
                'name' => 'Swift Visa Consultants',
                'subdomain' => 'swiftvisa',
                'settings' => ['theme' => 'red', 'currency' => 'GBP']
            ],
        ];
    
        foreach ($agencies as $agency) {
            \App\Models\Agency::create($agency);
        }
    }
}
