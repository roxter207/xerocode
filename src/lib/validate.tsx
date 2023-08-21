export default function login_validate(values: any) {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //validate for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be greater than 8 and less than 20";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export function register_validate(values: any) {
  const errors: any = {};

  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (values.firstname.includes(" ")) {
    errors.firstname = "No space only first name required";
  }

  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname.includes(" ")) {
    errors.lastname = "Check for space only last name required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be greater than 8 and less than 20";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }


  // valid confirm password

  if(!values.confirmpassword){
    errors.confirmpassword = "Required";
  }else if ( values.password !== values.confirmpassword )
  {
    errors.confirmpassword = "Password Doesn't Match..! "
  }

  return errors;
}
