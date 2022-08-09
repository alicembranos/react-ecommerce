import contactFormModel from "./contactFormModel";

const {
  formField: { email, fullname, subject, message },
} = contactFormModel;

const initiaValue = {
  [email.name]: "",
  [fullname.name]: "",
  [subject.name]: "",
  [message.name]: "",
};

export default initiaValue;
