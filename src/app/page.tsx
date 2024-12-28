"use client";

import SearchBox from "@/components/search-box";
import TableComponent from "@/components/table";
import { Collapse, Divider, Grid2, Stack } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import StatusFilter from "@/components/status-filter";
import { useState } from "react";
import CommonButton from "@/components/common-button";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Stack gap={3} mt={4}>
      <Grid2 container gap={2} alignItems="center">
        <Grid2 size={3}>
          <SearchBox />
        </Grid2>
        <CommonButton
          icon={<FilterAltIcon color={showFilter ? "primary" : "inherit"} />}
          title="Filter"
          onClick={() => setShowFilter(!showFilter)}
          color={showFilter ? "primary" : "inherit"}
        />
        <CommonButton icon={<ExitToAppIcon />} title="Export CSV" />
      </Grid2>
      <Divider />
      <Collapse in={showFilter}>
        <StatusFilter />
      </Collapse>
      <TableComponent />
    </Stack>
  );
}
