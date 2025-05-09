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
        Schema::create('agency_forms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('agency_id')->constrained()->onDelete('cascade');
            $table->string('form_name');
            $table->string('description')->nullable();
            $table->json('form_data');
            $table->json('settings')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agency_forms');
    }
};
