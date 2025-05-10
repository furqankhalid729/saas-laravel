import { ReactFormGenerator } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import AgencyLayout from '../../Layout/AgencyLayout';

const ViewForm = ({ form }) => {
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
                hide_actions={true}

            />
        </div>
    );
};

ViewForm.layout = page => <AgencyLayout children={page} title="View Form" />
export default ViewForm;
