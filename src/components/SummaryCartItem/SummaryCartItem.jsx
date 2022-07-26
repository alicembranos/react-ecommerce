import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import "./SummaryCartItem.css";

const SummaryCartItem = ({
  concept,
  total,
  existTooltip,
  title = "",
  withBorder = false,
}) => {
  const tooltip = (
    <Tooltip title={title}>
      <HelpIcon fontSize="small" />
    </Tooltip>
  );

  return (
    <div
      className="summaryItem__container"
      style={
        withBorder
          ? {
              borderTop: "1px solid rgb(229, 229, 229)",
              borderBottom: "1px solid rgb(229, 229, 229)",
            }
          : {}
      }
    >
      <p className="summaryItem__concept">
        {concept} {existTooltip && tooltip}{" "}
      </p>
      <p className="summaryItem__total">€{total}</p>
    </div>
  );
};

export default SummaryCartItem;
