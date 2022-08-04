import { Formik, Form } from "formik";

import AddressForm from "./Forms/AddressForm";
import PaymentForm from "./Forms/PaymentForm";
import ReviewOrder from "./ReviewOrder/ReviewOrder";
import CheckoutSuccess from "./CheckoutSuccess/CheckoutSuccess";

import validationSchema from "./FormModel/validationSchema";
import formInitialValues from "./FormModel/formInitialValues";
import checkoutFormModel from "./FormModel/checkoutFormModel";

// import useStyles from "./PurcharseFormStyle";
import "./PurchaseForm.css";
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import QontoStepIcon from "./QontoStepIcon/QontoStepIcon";
import { QontoConnector } from "./QontoStepIcon/QontoStepIcon";
import { styled } from "@mui/material/styles";

const steps = ["Shipping Address", "Payment Details", "Review your order"];
const { formId, formField } = checkoutFormModel;

const renderStepsProcess = (step) => {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <PaymentForm formField={formField} />;
    case 2:
      return <ReviewOrder />;
    default:
      return <div>Not found</div>;
  }
};

const StyledStepLabel = styled(StepLabel)({
  "& .Mui-active": {
    color: "aliceblue",
  },
});

const PurchaseForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const submitForm = async (values, actions) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = async (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Typography component="h1" variant="h4" align="center" color="aliceblue">
        Checkout
      </Typography>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
        className="stepper"
      >
        {steps.map((label) => (
          <Step key={label}>
            <StyledStepLabel
              className="stepper-label"
              StepIconComponent={QontoStepIcon}
            >
              {label}
            </StyledStepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <CheckoutSuccess />
      ) : (
        <Formik
          initialValues={formInitialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form id={formId}>
              {renderStepsProcess(activeStep)}
              <div className="form-buttons">
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className="form-button">
                    Back
                  </Button>
                )}
                <div className="form-wrapper">
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="form-button"
                  >
                    {isLastStep ? "Place order" : "Next"}
                  </Button>
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className="form-buttonProgress"
                    />
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default PurchaseForm;
