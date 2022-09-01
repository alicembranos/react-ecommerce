import { useEffect, useState, useContext } from "react";
import GlobalContext from "context/GlobalContext";
import UserContext from "context/UserContext";
import sendCartUser from "services/sendCartUser";
import { updateUserOrderList } from "services/functions";

import { Formik, Form } from "formik";

import AddressForm from "./Forms/AddressForm";
import PaymentForm from "./Forms/PaymentForm";
import ReviewOrder from "./ReviewOrder/ReviewOrder";
import CheckoutSuccess from "./CheckoutSuccess/CheckoutSuccess";

import validationSchema from "./FormModel/validationSchema";
import formInitialValues from "./FormModel/formInitialValues";
import checkoutFormModel from "./FormModel/checkoutFormModel";

import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import QontoStepIcon from "./QontoStepIcon/QontoStepIcon";
import { QontoConnector } from "./QontoStepIcon/QontoStepIcon";
import { styled } from "@mui/material/styles";
import moment from "moment";

import "./PurchaseForm.css";

const steps = ["Shipping Address", "Payment Details", "Review your order"];
const { formId, formField } = checkoutFormModel;

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 900000);
};

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
  "& .MuiStepLabel-label.Mui-active": {
    color: "aliceblue",
  },
  "& .MuiStepLabel-label.Mui-completed": {
    color: "#c50c91",
  },
});

const PurchaseForm = () => {
  const { cartItems, removeCartItemsFromUser } = useContext(GlobalContext);
  const { user, setUser } = useContext(UserContext);
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    setOrderNumber(generateRandomNumber());
  }, []);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const submitForm = async (values, actions) => {
    const orderData = {
      orderNumber: orderNumber,
      date: moment().format("L"),
      cartItems: cartItems,
    };
    const usersOrderList = user?.ordersList ?? [];
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
    await sendCartUser(orderData, user, usersOrderList);
    setUser(updateUserOrderList(user, usersOrderList, orderData));
    removeCartItemsFromUser();
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
        <CheckoutSuccess orderNumber={orderNumber} />
      ) : (
        <Formik
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
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
                <div className="form-checkout__wrapper">
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
