import { Box } from "@mui/material";

import imgBackground from "assets/img/gallery/home-img.jpg";
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
          width: "100%",
        }}
        alt="Music Concert"
        src={imgBackground}
      ></Box>
      <StackItems></StackItems>
    </>
  );
};

export default Home;
