import ContactSchema from "./FormModel/validationSchema";
import initiaValue from "./FormModel/formInitialValues";
import formModel from "./FormModel/contactFormModel";
import { Form, Formik } from "formik";
import { Button, Grid } from "@mui/material";
import InputField from "components/FormFields/InputField";
import InputTextAreaField from "components/FormFields/InputTextAreaField";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const buttonHover = {
  width: "100%",
  marginTop: "20px",
  background: "#c50c91",
  "&:hover": {
    background: "#c50c91",
    opacity: "0.7",
  },
};

const ContactForm = () => {
  const {
    formId,
    formField: { email, fullname, subject, message },
  } = formModel;

  const handleSubmit = async (values, actions) => {
    try {
      await sleep(1000);
      alert(JSON.stringify(values, null, 2));
    } catch (err) {
    } finally {
      actions.resetForm();
      actions.setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={initiaValue}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form id={formId}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputField name={email.name} label={email.label} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputField
                name={fullname.name}
                label={fullname.label}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputField name={subject.name} label={subject.label} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputTextAreaField
                name={message.name}
                label={message.label}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            loading={isSubmitting}
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            sx={buttonHover}
          >
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
