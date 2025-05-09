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
        Schema::create('patient_intakes', function (Blueprint $table) {
            $table->id();
            $table->string('uploaded_id_file_path')->nullable();
            $table->string('form_of_identification');
            $table->string('document_identification_number');
            $table->string('i_485_helper');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('address_line_1');
            $table->string('address_line_2')->nullable();
            $table->string('city');
            $table->string('state');
            $table->string('zip_code');
            $table->enum('apartment_type', ['Apt', 'Ste', 'Flr'])->nullable();
            $table->date('dob');
            $table->date('requested_appointment_date');
            $table->string('gender');
            $table->string('country_of_birth');
            $table->string('city_of_birth');
            $table->integer('age')->nullable();
            $table->string('alien_number')->nullable();
            $table->enum('appointment_type', ['Individual', 'Family']);
            $table->boolean('has_health_insurance')->default(false);
            $table->string('patient_status');
            $table->enum('payment_type', ['card','cash','other'])->nullable();
            $table->string('transaction_id')->nullable();
            $table->unsignedBigInteger('user_id');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient_intakes');
    }
};
