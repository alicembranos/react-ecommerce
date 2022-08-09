import contactFormModel from "./contactFormModel";
import * as Yup from "yup";

const {
  formField: { email, fullname, subject, message },
} = contactFormModel;

const ContactSchema = Yup.object().shape({
  [email.name]: Yup.string()
    .email(email.invalidErrorMsg)
    .required(email.requiredErrorMsg),
  [fullname.name]: Yup.string().required(fullname.requiredErrorMsg).max(50),
  [subject.name]: Yup.string().required(fullname.requiredErrorMsg).max(50),
  [message.name]: Yup.string().required(message.requiredErrorMsg).max(500),
});

export default ContactSchema;
