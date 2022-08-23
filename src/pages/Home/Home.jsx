import { Box } from "@mui/material";
import imgBackground from "assets/img/gallery/home-img.jpg";
import logo from "assets/img/gallery/logo.png";
import SocialMedia from "components/SocialMedia/SocialMedia";
import StackItems from "components/StackItems/StackItems";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imgBackground})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          height: "100%",
        }}
      >
        <img src={logo} alt="Logo" className="logo-img"/>
        <SocialMedia />
        <StackItems />
      </Box>
    </>
  );
};

export default Home;
