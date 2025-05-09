<?php

namespace App\Http\Controllers\Agency;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;
use App\Models\AgencyForm;
use App\Models\RequestedForm;
use App\Models\AgencyTimeLine;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class AgencyFormController extends Controller
{
    public function index()
    {
        $agencyId = session('active_agency_id');
        if (!$agencyId) {
            return response()->json([
                'status' => 'error',
                'message' => 'Active agency not found in session.',
            ], 400);
        }
        $forms = AgencyForm::where('agency_id', $agencyId)->get();
        return Inertia::render(AgencyInertiaViews::Agency_Forms_List->value, [
            'forms' => $forms
        ]);
    }

    public function show($id)
    {
        $form = AgencyForm::findOrFail($id);
        return Inertia::render(AgencyInertiaViews::Agency_View_Form->value, [
            'form' => [
                'id' => $form->id,
                'form_name' => $form->form_name,
                'form_data' => json_decode($form->form_data),
            ],
        ]);
    }

    public function showAddFormField()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Add_Form_Field->value);
    }

    public function storeForm(Request $request)
    {
        try {
            $request->validate([
                'form_name' => 'required|string|max:255',
                'form_data' => 'required|string',
                'description' => 'nullable|string|max:255',
            ]);

            $agencyId = session('active_agency_id');

            if (!$agencyId) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Active agency not found in session.',
                ], 400);
            }

            DB::beginTransaction();

            $form = new AgencyForm();
            $form->agency_id = $agencyId;
            $form->description = $request->description;
            $form->form_name = $request->form_name;
            $form->form_data = $request->form_data;
            $form->save();

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'Form created successfully',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Form Creation Error: ' . $e->getMessage(), ['stack' => $e->getTraceAsString()]);

            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong while creating the form.',
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $form = AgencyForm::findOrFail($id);
            $form->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Form deleted successfully.',
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Form not found.',
            ], 404);
        } catch (\Exception $e) {
            Log::error('Delete Form Error: ' . $e->getMessage(), ['stack' => $e->getTraceAsString()]);
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong while deleting the form.',
            ], 500);
        }
    }

    public function viewPendingForms()
    {
        $agencyId = session('active_agency_id');
        if (!$agencyId) {
            return response()->json([
                'status' => 'error',
                'message' => 'Active agency not found in session.',
            ], 400);
        }
        $forms = RequestedForm::where('agency_id', $agencyId)
                ->where('status', 'pending')
                ->with(['agency', 'user'])
                ->get();
        return Inertia::render(AgencyInertiaViews::Agency_Pending_Forms->value,[
            'pending_forms' => $forms,
        ]);
    }

    public function requestForm(Request $request)
    {
        $validated = $request->validate([
            'form_id' => 'required|exists:agency_forms,id',
            'user_id' => 'required|exists:users,id',
        ]);
        $agencyId = session('active_agency_id');
        if (!$agencyId) {
            return response()->json([
                'status' => 'error',
                'message' => 'Active agency not found in session.',
            ], 400);
        }

        $existingRequest = RequestedForm::where('agency_id', $agencyId)
            ->where('agency_form_id', $validated['form_id'])
            ->where('user_id', $validated['user_id'])
            ->first();

        if ($existingRequest) {
            return response()->json([
                'status' => 'error',
                'message' => 'This form has already been requested from the user.',
            ], 409); 
        }

        RequestedForm::create([
            'agency_id' => $agencyId,
            'agency_form_id' => $validated['form_id'],
            'user_id' => $validated['user_id'],
            'status' => 'pending',
        ]);

        $requestedForms = RequestedForm::with(['agencyForm', 'user'])
        ->where('agency_id', $agencyId)
        ->where('user_id', $validated['user_id'])
        ->orderBy('created_at', 'desc')
        ->get();

        AgencyTimeline::create([
            'agency_id' => $agencyId,
            'user_id' => $validated['user_id'],
            'title' => 'Requested Form',
            'description' => 'Requested form for user ID: ' . $validated['user_id'],
            'type' => 'requested_form',
            'related_id' => $validated['form_id'],
            'created_by' => auth()->id(),
        ]);
        
        return response()->json([
            'status' => 'success',
            'message' => 'Form requested successfully.',
            'requested_forms' => $requestedForms,
        ]);

    }
}
