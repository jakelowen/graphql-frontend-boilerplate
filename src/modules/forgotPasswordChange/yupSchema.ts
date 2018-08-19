import * as Yup from "yup";

export default Yup.object().shape({
  password: Yup.string().required("Password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match!")
    .required("You must confirm your password.")
});
