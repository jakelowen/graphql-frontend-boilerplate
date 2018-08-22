import * as Yup from "yup";

export default Yup.object().shape({
  currentPassword: Yup.string().required("Current Password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("currentPassword"), null], "Passwords do not match!")
    .required("You must confirm your password."),
  newPassword: Yup.string().required("New Password is required.")
});
