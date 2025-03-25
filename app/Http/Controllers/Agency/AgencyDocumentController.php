<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyDocumentController extends Controller
{
    public function viewDocuments()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Documents_List->value);
    }

    public function viewCollabDocuments()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Collab_Documents->value);
    }
}
