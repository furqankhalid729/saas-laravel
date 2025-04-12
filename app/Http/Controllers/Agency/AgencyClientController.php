<?php

namespace App\Http\Controllers\Agency;

use App\Enums\AgencyInertiaViews;
use App\Http\Controllers\Controller;
use App\Models\AgencyUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AgencyClientController extends Controller
{
    
    // public function viewClientList()
    // {
    //     return Inertia::render(AgencyInertiaViews::AgencyClientListPage->value);
    // }


    public function viewClientList()
{

    $agency = Auth::user()->agency; 
    
    $clients = AgencyUser::where('agency_id', $agency->id)
        ->select('email', 'client_id', 'phoneNo', 'age', 'gender', 'address') 
        ->get();
    return Inertia::render(AgencyInertiaViews::AgencyClientListPage->value, [
        'clients' => $clients
    ]);
}

    // public function showClientForm()
    // {
        
    //     return Inertia::render(AgencyInertiaViews::AgencyClientFormPage->value);
    // }
    public function showClientForm($client_id)
    {
        $client = AgencyUser::where('client_id', $client_id)->first();
        if (!$client) {
            return redirect()->route('admin_clients_list')->with('error', 'Client not found');
        }
        return Inertia::render(AgencyInertiaViews::AgencyClientFormPage->value, [
            'client' => $client
        ]);
    }
    
    public function viewNewClientForms()
    {
        return Inertia::render(AgencyInertiaViews::AgencyClientNewFormsPage->value);
    }


    
}
