export default function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Username is required";
  } else if (!/^[a-zA-Z ]{2,50}$/.test(input.name)) {
    errors.name = "Name is invalid";
  }
  return errors;
}
