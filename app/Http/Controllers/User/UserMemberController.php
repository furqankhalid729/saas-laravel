<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;
use App\Models\Agency;
use App\Models\AgencyUser;
use App\Models\User;
use App\Models\UserMember;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserMemberController extends Controller
{
    public function showFamilyMembers()
    {
        $user = Auth::user();
        $members = $user->userMembers()->with('member')->get();
        return Inertia::render(UserInertiaViews::USER_FAMILY_MEMBERS->value, [
            'members' => $members
        ]);
    }

    public function addFamilyMember()
    {
        return Inertia::render(UserInertiaViews::USER_ADD_FAMILY_MEMBER->value);
    }

    public function storeFamilyMember(Request $request)
    {
        $current_agency_id = session('current_agency_id');
        $agency = Agency::where('id', $current_agency_id)->first();
        $existingUser = User::where('email', $request->email)->first();
        Log::info('Agency ID: ' . $current_agency_id);
        Log::info('Agency: ' . $agency);
        Log::info('existingUser: ' . $existingUser);
        if ($existingUser) {
            $alreadyLinked = AgencyUser::where('user_id', $existingUser->id)
                ->where('agency_id', $agency->id)
                ->exists();
            if ($alreadyLinked) {
                return redirect()->back()
                    ->withErrors(['email' => 'This email is already registered with agency.'])
                    ->withInput();
            }
        }
        Log::info('Agency ID: ' . $current_agency_id);
        $user = $existingUser ?? User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phoneNo,
            'relation' => $request->relation,
            'age' => $request->age,
            'gender' => $request->gender,
            'address' => $request->address,
        ]);

        AgencyUser::create([
            'user_id' => $user->id,
            'agency_id' => $agency->id,
            'role' => 'client',
            'password' => Hash::make($request->password),
        ]);

        UserMember::create([
            'user_id' => auth()->user()->id,
            'member_id' => $user->id,
            'relation' => $request->relation,
        ]);

        return redirect()->route('user.family-members.show')
            ->with('success', 'Family member added successfully.');
    }
}
