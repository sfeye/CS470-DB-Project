import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import validate from './validate';

const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
  ) => (
    <TextField
      label={label}
      variant="filled"
      hintText={label}
      floatingLabelText={label}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

const createUser = props => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="firstname"
                            component={renderTextField}
                            label="First Name"
                        />
                    </div>
                    <div>
                        <Field
                            name="lastname"
                            component={renderTextField}
                            label="Last Name"
                        />
                    </div>
                    <div>
                        <Field
                            name="phonenumber"
                            component={renderTextField}
                            label="Phone Number"
                        />
                    </div>
                    <div>
                        <Field
                            name="email"
                            component={renderTextField}
                            label="Email"
                        />
                    </div>
                    <div style={{padding: "10px"}}>
                        <button
                        type="submit"
                        disabled={ pristine || submitting}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default reduxForm({
    form: 'createUser',
    validate
})(createUser)
