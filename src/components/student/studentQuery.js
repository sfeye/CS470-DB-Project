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
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

const studentQuery = props => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div style={{padding: "10px"}}>
                        <Field
                            name="ISBN"
                            component={renderTextField}
                            label="ISBN"
                        />
                    </div>
                    <div>
                        <Field
                            name="bookname"
                            component={renderTextField}
                            label="Title"
                        />
                    </div>
                    <div>
                        <Field
                            name="author"
                            component={renderTextField}
                            label="Author"
                        />
                    </div>
                    <div style={{padding: "10px"}}>
                        <button
                        className="submit-btn"
                        type="submit"
                        disabled={ pristine || submitting}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
    </div>
);}

export default reduxForm({
    form: 'studentQuery',
    validate
})(studentQuery)
