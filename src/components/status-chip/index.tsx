import React from "react";
import { Status, StatusChipProps } from "./types";
import { Chip, styled, useTheme } from "@mui/material";
import { formatStatus, hexToRGB } from "@/utils";

const StyledChip = styled(Chip)(({ theme }) => ({
  fontWeight: 500,
  borderRadius: 4,
  padding: theme.spacing(0, 1),
  fontSize: 12,
  minWidth: 100,
}));

const { CANCELLED, COMPLETED, IN_PROGRESS, IN_REVIEW, ON_HOLD } = Status;

const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
  const { palette } = useTheme();

  const statusColor: Record<Status, string> = {
    [COMPLETED]: palette.success.main,
    [CANCELLED]: palette.error.main,
    [IN_PROGRESS]: palette.info.main,
    [IN_REVIEW]: palette.warning.light,
    [ON_HOLD]: palette.warning.dark,
  };

  const getStatusColor = (status: Status) => statusColor[status];

  return (
    <StyledChip
      label={formatStatus(status)}
      size="small"
      sx={{
        color: getStatusColor(status),
        bgcolor: hexToRGB(getStatusColor(status), 0.3),
      }}
    />
  );
};

export default StatusChip;
