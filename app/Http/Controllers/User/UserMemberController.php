<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;

class UserMemberController extends Controller
{
    public function showFamilyMembers()
    {
        return Inertia::render(UserInertiaViews::USER_FAMILY_MEMBERS->value);
    }

    public function addFamilyMember()
    {
        return Inertia::render(UserInertiaViews::USER_ADD_FAMILY_MEMBER->value);
    }
}
