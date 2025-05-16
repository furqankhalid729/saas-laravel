import UserLayout from "../../../Layout/UserLayout";
import { router } from '@inertiajs/react';
import { ReactFormGenerator } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import axios from 'axios';

const AddFormData = ({ form }) => {
    console.log(form)
    const handleFormSubmit = (submittedData) => {
        console.log('Submitted data:', submittedData);
        axios.post(route('store.form.details'), {
            form_id: form.id,
            data: submittedData,
        })
            .then(response => {
                console.log('Saved:', response.data);
                router.visit(route('user.forms.requested'));
            })
            .catch(error => {
                console.error('Error saving form data:', error);
            });

    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                rel="stylesheet"
            />
            <ReactFormGenerator
                data={form.form_data}
                onSubmit={handleFormSubmit}
                hide_actions={false}
                submitButton={<button type="submit" className="btn btn-primary">Submit</button>}
            />
        </div>
    );
};

AddFormData.layout = page => <UserLayout children={page} title="Add Form Data" />

export default AddFormData;
