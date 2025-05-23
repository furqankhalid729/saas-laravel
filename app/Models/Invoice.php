<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'invoice_number', 'account_number', 'issued_date',
        'due_date', 'status', 'total', 'user_id','agency_id'
    ];

    public function items()
    {
        return $this->hasMany(InvoiceItem::class);
    }
}
