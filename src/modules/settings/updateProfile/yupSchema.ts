import * as Yup from "yup";

export default Yup.object().shape({
  firstName: Yup.string()
    .min(1)
    .max(255)
    .required("First name is required"),
  lastName: Yup.string()
    .min(1)
    .max(255)
    .required("Last name is required")
});
