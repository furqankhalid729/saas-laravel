<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Agency;
use Illuminate\Support\Facades\DB; 
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    public function run()
    {
        // Create agency accounts (type=agency)
        $agency1User = User::create([
            'name' => 'Global Visa Agency',
            'email' => 'admin@globalvisa.com',
            'password' => bcrypt('agency123'),
            'type' => 'agency',
        ]);

        $agency2User = User::create([
            'name' => 'Premium Immigration Agency',
            'email' => 'admin@premiumimmigration.com',
            'password' => bcrypt('agency123'),
            'type' => 'agency',
        ]);

        // Create regular users (type=user) who can belong to multiple agencies
        $client1 = User::create([
            'name' => 'John Client',
            'email' => 'john@client.com',
            'password' => bcrypt('client123'),
            'type' => 'user',
        ]);

        $client2 = User::create([
            'name' => 'Sarah Client',
            'email' => 'sarah@client.com',
            'password' => bcrypt('client123'),
            'type' => 'user',
        ]);

        // Attach users to agencies (many-to-many)
        $agency1 = Agency::where('subdomain', 'globalvisa')->first();
        $agency2 = Agency::where('subdomain', 'premiumimmigration')->first();

        // Client 1 belongs to both agencies
        DB::table('agency_clients')->insert([ // Fixed this line
            ['user_id' => $client1->id, 'agency_id' => $agency1->id, 'client_id' => 'GLOB-1001'],
            ['user_id' => $client1->id, 'agency_id' => $agency2->id, 'client_id' => 'PREMIUM-2001'],
        ]);

        // Client 2 belongs to one agency
        DB::table('agency_clients')->insert([ // Fixed this line
            ['user_id' => $client2->id, 'agency_id' => $agency1->id, 'client_id' => 'GLOB-1002'],
        ]);
    }
}