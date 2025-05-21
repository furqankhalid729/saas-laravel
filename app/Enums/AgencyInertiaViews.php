<?php

namespace App\Enums;

enum AgencyInertiaViews: string
{
    case AgencyAppointmentsPage = 'AdminPage/Appointments';
    case AgencyAddAppointment = 'AdminPage/AddAppointment';
    case AgencyClientChatPage = 'AdminPage/Client/Chat';
    case AgencyClientListPage = 'AdminPage/ClientList';
    case AgencyClientDetailsPage = 'AdminPage/Client/ClientForm';
    //case AgencyClientFormPage = 'AdminPage/Client/ClientForm';
    case AgencyClientNewFormsPage = 'AdminPage/Forms/RequestNewForm';
    case Agency_Sign_Up = 'AdminPage/SignUp';
    case Agency_Login = 'AdminPage/Login';
    case Agency_Dashboard = 'AdminPage/AdminDashboard';
    case Agency_Documents_List = 'AdminPage/Documents';
    case Agency_Collab_Documents = 'AdminPage/CollabDocuments';
    case Agency_Employee_List = 'AdminPage/EmployeeList';
    case Agency_Add_Employee_Form = 'AdminPage/AddNewEmployee';
    case Agency_Forms_List = 'AdminPage/Forms/Forms';
    case Agency_View_Form = 'AdminPage/Forms/ViewForm';
    case Agency_Add_Form_Field = 'AdminPage/Forms/AddNewField';
    case Agency_Pending_Forms = 'AdminPage/PendingForm';
    case Agency_Lab_Results = 'AdminPage/LabsResult';
    case Agency_Payment_List = 'AdminPage/Payments';
    case Agency_Plan_Selection = 'AdminPage/ChoosePlan';
    case Agency_Report_List = 'AdminPage/Reports';
    case Agency_Settings_Page = 'AdminPage/Settings';

    case ADMIN_INVOICES = 'AdminPage/Invocies/Index';
    case ADMIN_INVOICES_CREATE = 'AdminPage/Invocies/Create';
    case ADMIN_INVOICES_EDIT = 'AdminPage/Invocies/Edit';
}
