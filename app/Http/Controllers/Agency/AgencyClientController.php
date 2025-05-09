<?php

namespace App\Http\Controllers\Agency;

use App\Enums\AgencyInertiaViews;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Agency;
use App\Models\User;
use App\Models\AgencyUser;
use App\Models\RequestedForm;
use App\Models\AgencyForm;
use App\Models\Appointment;
use App\Models\AgencyTimeLine;

class AgencyClientController extends Controller
{

    public function viewClientList()
    {
        $activeAgencyId = session('active_agency_id');
        $agencyUsers = AgencyUser::where('agency_id', $activeAgencyId)->with('user')->where('role', 'client')->get();
        return Inertia::render(AgencyInertiaViews::AgencyClientListPage->value, [
            'agencyUsers' => $agencyUsers,
        ]);
    }

    public function viewClientDetail($id)
    {
        $activeAgencyId = session('active_agency_id');
        $agencyUser = AgencyUser::where('agency_id', $activeAgencyId)->where('user_id', $id)->with('user')->first();
        $agencyFroms =  AgencyForm::where('agency_id', $activeAgencyId)->get();

        $requestedForms = RequestedForm::with(['agencyForm', 'user'])
            ->where('agency_id', $activeAgencyId)
            ->where('user_id', $id)
            ->orderBy('created_at', 'desc')
            ->get();

        $appointments = Appointment::where('agency_id', $activeAgencyId)
            ->where('user_id', $id)
            ->with('user')
            ->get();

        $timeLine = AgencyTimeLine::where('agency_id', $activeAgencyId)
            ->where('user_id', $id)
            ->with('user')
            ->get();

        return Inertia::render(AgencyInertiaViews::AgencyClientDetailsPage->value, [
            'agencyUser' => $agencyUser,
            'agencyFroms' => $agencyFroms,
            'requestedForms' => $requestedForms,
            'appointments' => $appointments,
            'timeLine' => $timeLine,
        ]);
    }

    public function showClientForm()
    {
        return Inertia::render(AgencyInertiaViews::AgencyClientDetailsPage->value);
    }

    public function viewNewClientForms()
    {
        return Inertia::render(AgencyInertiaViews::AgencyClientNewFormsPage->value);
    }
}
