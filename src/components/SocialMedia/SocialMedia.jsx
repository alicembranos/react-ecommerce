import { styled } from "@mui/material/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack, Box, Container } from "@mui/material";
import "./SocialMedia.css";

const ItemMedia = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "5px",
  background: "rgba(59, 4, 130, 0.34)",
  width: "300px",
  textAlign: "left",
  padding: "0.5rem",
  borderRadius: "50px 0px 0px 50px",
  transition: "all 1s",
  color: "aliceblue",
  ":hover": {
    transform: "translate(-120px, 0)",
    background: "rgba(186, 31, 186, 0.34)",
  },
  ":hover a": {
    color: "aliceblue",
  },
  ":hover svg": {
    color: "#fff",
    background: "rgba(0, 0, 0, 0.36)",
    transform: "rotate(360deg)",
    transition: "all 1s",
  },
}));

const SocialMedia = () => {
  return (
    <Container
      sx={{ top: "60%", position: "fixed", right: "0", width: "fit-content" }}
    >
      <Stack
        direction="column"
        spacing={1.5}
        sx={{ padding: "0px", transform: "translate(265px, 0)" }}
      >
        <ItemMedia>
          <a className="links" href="https://www.facebook.com/">
            <FacebookIcon className="icons" fontSize="large" /> Facebook
          </a>
        </ItemMedia>
        <ItemMedia>
          <a className="links" href="https://www.instagram.com/">
            <InstagramIcon className="icons" fontSize="large" /> Instagram
          </a>
        </ItemMedia>
        <ItemMedia>
          <a className="links" href="https://twitter.com/?lang=es">
            <TwitterIcon className="icons" fontSize="large" /> Twitter
          </a>
        </ItemMedia>
      </Stack>
    </Container>
  );
};

export default SocialMedia;
