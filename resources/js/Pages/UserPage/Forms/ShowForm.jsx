import UserLayout from "../../../Layout/UserLayout";
import { ReactFormGenerator } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
const ShowForm = ({ form }) => {
    
    const formDataWithValues = form.form_data.map(field => {
        // Find submitted value for this field by matching `id` or `name`
        const submittedField = form.user_data?.submitted_data?.find(sub =>
            sub.id === field.id || sub.name === field.field_name || sub.name === field.custom_name
        );

        return {
            ...field,
            value: submittedField ? submittedField.value : field.value || '', // fill submitted value or empty
        };
    });
    const answer_data = form.user_data?.submitted_data?.map(field => ({
  name: field.name || field.custom_name || field.id, // pick a key that form expects
  value: field.value,
})) || [];
    console.log(formDataWithValues);
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
                answer_data={answer_data}
                hide_actions={true}

            />
        </div>
    );
}
ShowForm.layout = page => <UserLayout children={page} title="Show Form" />

export default ShowForm