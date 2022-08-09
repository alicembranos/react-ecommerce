const formModel = {
  formId: "contactForm",
  formField: {
    email: {
      name: "email",
      label: "Email",
      requiredErrorMsg: "Email is required",
      invalidErrorMsg: "Invalid email address",
    },
    fullname: {
      name: "fullname",
      label: "Full name",
      requiredErrorMsg: "Full name is required",
    },
    subject: {
      name: "subject",
      label: "Subject",
      requiredErrorMsg: "Subject is required",
    },
    message: {
      name: "message",
      label: "Message",
      requiredErrorMsg: "Message is required",
    },
  },
};

export default formModel;
