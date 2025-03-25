<?php

namespace App\Enums;

enum AdminInertiaViews: string
{
    case ADMIN_LOGIN = 'ClinicPage/ClinicScreens/LoginScreen';
    case ADMIN_TEXT_CODE = 'ClinicPage/ClinicScreens/TextCodeScreen';
    case ADMIN_ENTER_CODE = 'ClinicPage/ClinicScreens/EnterCodeScreen';
    case ADMIN_CLIENTS_LIST = 'ClinicPage/Clients/Clients';
    case ADMIN_CLIENT_DETAILS = 'ClinicPage/Clients/ClientsView';
    case ADMIN_DASHBOARD = 'ClinicPage/ClinicDashboard';
    case ADMIN_FORMS = 'ClinicPage/Forms';
    case ADMIN_ADD_FORM_FIELD = 'ClinicPage/FormsTabs/AddNewField';
    case ADMIN_PAYMENTS = 'ClinicPage/Payments';



}
