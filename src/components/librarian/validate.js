export default function(values) {
    const errors = {};

    if (!values['employeeID']) {
    errors['employeeID'] = 'Required';
    }
    if (!values['email'] && !values['phonenumber']) {
        errors['phonenumber'] = 'Required';
    }
    if (values['email'] && !values['phonenumber']) {
        errors['phonenumber'] = 'Required';
    }
    if (!values['email'] && values['phonenumber']) {
        errors['email'] = 'Required';
        }    
    if (values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        }
    if (values.phonenumber &&
        !/^(0|[1-9][0-9]{9})$/i.test(values.phonenumber)) {
         errors.phonenumber = 'Invalid phone number';
        }
    return errors;
  }