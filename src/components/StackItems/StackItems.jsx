import { Box, Stack, keyframes } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "wouter";
import "./StackItems.css";

const slideTop = keyframes`
0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-300%);
            transform: translateY(-300%);
  }`;

const Item = styled(Box)(() => ({
  position: "relative",
  padding: "1.5rem",
  background: "none",
  color: "aliceblue",
  fontWeight: "700",
  fontSize: "3rem",
  cursor: "pointer",
}));

const StackItems = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        position: "absolute",
        top: "40%",
        left: "10%",
        animation: `${slideTop} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both`,
        WebkitAnimation:
          "-webkit-animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both",
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
