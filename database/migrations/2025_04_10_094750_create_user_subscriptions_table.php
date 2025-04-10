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
        Schema::create('user_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->dateTime("start_date")->nullable();
            $table->dateTime("end_date")->nullable();
            $table->string("invoice_url")->nullable();
            $table->string("purchase_email")->nullable();
            $table->string("total")->nullable();
            $table->string("discount")->nullable();
            $table->string("card_ending")->nullable();
            $table->string("price_id")->nullable();
            $table->foreignId("subscription_id")->nullable()->constrained()->onDelete('set null');
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
            $table->timestamps();

        

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subscriptions');
    }
};
