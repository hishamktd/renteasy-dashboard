import { Button, Typography } from "@mui/material";
import { CommonButtonProps } from "./types";

const CommonButton: React.FC<CommonButtonProps> = ({
  icon,
  title,
  onClick,
  color,
}) => (
  <Button
    variant="outlined"
    color="inherit"
    sx={{ height: 35 }}
    onClick={onClick}
  >
    {icon} &nbsp;
    <Typography sx={{ textTransform: "none" }} color={color}>
      {title}
    </Typography>
  </Button>
);

export default CommonButton;
