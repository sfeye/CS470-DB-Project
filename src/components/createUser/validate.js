export default function(values) {
    const errors = {};
    const requiredFields = [
        'firstname',
        'lastname',
        'phonenumber',
        'email'
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (values.phonenumber &&
        !/^(0|[1-9][0-9]{9})$/i.test(values.phonenumber)) {
         errors.phonenumber = 'Invalid phone number';
        }
    return errors;
  }