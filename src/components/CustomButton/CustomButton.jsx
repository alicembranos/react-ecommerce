import { Button } from "@mui/material";

const CustomButton = (props) => {
  const { value, href, onClick } = props;
  return (
    <div title={href}>
      <Button
        size="large"
        variant="outlined"
        color="secondary"
        onClick={onClick}
      >
        {value}
      </Button>
    </div>
  );
};

export default CustomButton;
