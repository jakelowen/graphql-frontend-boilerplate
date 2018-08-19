import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .email("Must be a properly formatted email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required.")
});
