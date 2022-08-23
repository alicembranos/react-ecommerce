import { Box, Stack, keyframes } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "./StackItems.css";

const lineUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(120%);
}
20% {
  opacity: 0;
}
50% {
  opacity: 1;
  transform: translateY(0%);
}
100% {
  opacity: 1;
  transform: translateY(0%);
}`;

const Item = styled(Box)(() => ({
  position: "relative",
  padding: "1.5rem",
  background: "none",
  color: "aliceblue",
  fontWeight: "700",
  fontSize: "30px",
  cursor: "pointer",
}));

const StackItems = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{
        position: "absolute",
        top: "40%",
        left: "10%",
        animation: `${lineUp} 3s ease-out`,
        WebkitAnimation: `-webkit-animation: ${lineUp} 5s ease-out `,
      }}
    >
      <Item>
        <div className="link link--helike">
          <Link to="/" className="span">
            Beats
          </Link>
        </div>
      </Item>
      <Item>
        <div className="link link--helike">
          <Link to="/dates" className="span">
            Dates
          </Link>
        </div>
      </Item>
      <Item>
        <div className="link link--helike">
          <Link to="/photos" className="span">
            Photos
          </Link>
        </div>
      </Item>
      <Item>
        <div className="link link--helike">
          <Link to="/shop" className="span">
            Shop
          </Link>
        </div>
      </Item>
    </Stack>
  );
};

export default StackItems;
