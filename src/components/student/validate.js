export default function(values) {
    const errors = {};
    if (!values['ISBN'] && !values['bookname'] && !values['author']) {
    errors['ISBN'] = 'Required';
    }
    if (!values['ISBN'] && values['bookname'] && !values['author']) {
        errors['author'] = 'Required';
    }
    if (!values['ISBN'] && !values['bookname'] && values['author']) {
        errors['bookname'] = 'Required';
        }    
    if (
      values.ISBN &&
      !/^[-+]?[0-9]+$/.test(values.ISBN)
    ) {
      errors.ISBN = 'Invalid ISBN';
    }
    return errors;
  }