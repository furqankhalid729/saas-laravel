<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSubscription extends Model
{
    use HasFactory;

    protected $fillable = [
        "start_date",
        "end_date",
        "invoice_url",
        "purchase_email",
        "total",
        "discount",
        "card_ending",
        "price_id",
        "subscription_id",
        "user_id",

    ];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }
}
