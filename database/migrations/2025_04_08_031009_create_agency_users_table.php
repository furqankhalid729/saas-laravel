<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('agency_users', function (Blueprint $table) {
            $table->foreignId('agency_id')->constrained()->cascadeOnDelete();
            $table->string('email');  
            $table->string('password');  
            $table->string('client_id');
            $table->string('phoneNo')->nullable();
            $table->string('relation')->nullable();
            $table->integer('age')->nullable();
            $table->enum('gender', ['Male', 'Female', 'Other'])->nullable();
            $table->text('address')->nullable();
            $table->timestamps();

            $table->primary(['email', 'agency_id']);  
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agency_users');
    }
};
