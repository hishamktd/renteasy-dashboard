import React, { ChangeEvent, useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
} from "@mui/material";

const StatusFilter = () => {
  const [value, setValue] = useState("all");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="body1">Show:</Typography>
      <RadioGroup
        row
        value={value}
        onChange={handleChange}
        aria-label="status-filter"
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel
          value="in-progress"
          control={<Radio />}
          label="In progress"
        />
        <FormControlLabel
          value="in-review"
          control={<Radio />}
          label="In review"
        />
        <FormControlLabel
          value="completed"
          control={<Radio />}
          label="Completed"
        />
      </RadioGroup>
    </Box>
  );
};

export default StatusFilter;
