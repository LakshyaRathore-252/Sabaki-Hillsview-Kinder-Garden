import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

// ✅ Validation Schema with Yup
export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits")
    .required("Phone is required"),
  message: Yup.string().max(200, "Message must be under 200 characters")
    .required("Message is required"),
});

