export default function(values) {
    const errors = {};

    if (!values['employeeID']) {
    errors['employeeID'] = 'Required';
    }
    if (!values['ISBN']) {
        errors['ISBN'] = 'Required';
        }
    if (
        values.ISBN &&
        !/^[-+]?[0-9]+$/.test(values.ISBN)
        ) {
        errors.ISBN = 'Invalid ISBN';
        }
    return errors;
  }