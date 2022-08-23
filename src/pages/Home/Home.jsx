import { Box } from "@mui/material";
import imgBackground from "assets/img/gallery/home-img.jpg";
import SocialMedia from "components/SocialMedia/SocialMedia";
import StackItems from "components/StackItems/StackItems";

const Home = () => {
  return (
    <>
      <Box
        component="img"
        sx={{
          display: "flex",
          objectFit: "cover",
          height: "100vh",
          width: "100vw",
          padding:"0"
        }}
        alt="Music Concert"
        src={imgBackground}
      ></Box>
      <SocialMedia></SocialMedia>
      <StackItems></StackItems>
    </>
  );
};

export default Home;
