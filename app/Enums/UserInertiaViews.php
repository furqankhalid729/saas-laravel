<?php

namespace App\Enums;

enum UserInertiaViews: string
{
    case APPOINTMENT = 'UserPage/Appointment';
    case BOOK_NEW_APPOINTMENT = 'UserPage/BookNew Appointment/NewAppointment';
    case USER_SIGN_UP = 'UserPage/UserScreen/SignUpScreen';
    case USER_TEXT_CODE = 'UserPage/UserScreen/TextCodeScreen';
    case USER_ENTER_CODE = 'UserPage/UserScreen/EnterCodeScreen';
    case USER_LOGIN = 'UserPage/UserScreen/LoginScreen';
    case USER_UPLOAD_PHOTO = 'UserPage/UserScreen/UploadPhotoScreen';
    case USER_DASHBOARD = 'UserPage/UserDashboard';
    case USER_INTAKE_FORM = 'UserPage/Forms/UserIntakeForm';
    case SHOW_FORM = 'UserPage/Forms/ShowForm';
    case ADD_FORM_DATA = 'UserPage/Forms/AddFormData';
    case USER_MEDICAL_INFO_FORM = 'UserPage/Forms/MedicalInfoForm';
    case USER_REQUESTED_FORMS = 'UserPage/RequestedForm';
    case USER_EDIT_REQUESTED_FORM = 'UserPage/EditForm';
    case USER_INVOICES = 'UserPage/Invoices';
    case USER_INVOICE_DETAIL = 'UserPage/InvoiceDetails';
    case USER_LABS_RESULT = 'UserPage/LabsResult';
    case USER_FAMILY_MEMBERS = 'UserPage/OtherMembers';
    case USER_ADD_FAMILY_MEMBER = 'UserPage/AddMembers';
    

    //case USER_INTAKE_FORM='UserPage/Forms/PatientIntake';
}
