<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyChatController extends Controller
{
    public function viewChat()
    {
        return Inertia::render(AgencyInertiaViews::AgencyClientChatPage->value);
    }
}
