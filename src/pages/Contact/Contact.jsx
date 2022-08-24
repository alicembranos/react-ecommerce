import { Box, Typography } from "@mui/material";
import ContactForm from "components/ContactForm/ContactForm";
import logo from "../../assets/img/gallery/logo2.png";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          padding: {
            xs: "90px 20px 20px 20px",
            sm: "90px 20px 20px 20px",
            md: "90px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "450px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              paddingLeft: "50px",
              fontWeight: "600",
              fontSize: "15px",
              color: "#c50c91",
            }}
          >
            Contact us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              paddingLeft: "50px",
              color: "aliceblue",
            }}
          >
            Let's chat about how we can help you.
          </Typography>
          <Box
            item
            sx={{
              color: "white",
              padding: "20px 50px",
            }}
          >
            <ContactForm />
          </Box>
        </Box>
        <Box
          item
          sx={{
            color: "white",
            maxWidth: { sm: "300px", md: "600px" },
            textAlign: "center",
            padding: { sm: "25px", md: "25px 100px" },
          }}
        >
          <img src={logo} alt="Logo" className="contact-image" />
        </Box>
      </Box>
    </>
  );
};

export default Contact;
