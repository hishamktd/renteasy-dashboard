import { Button, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { SearchBoxProps } from "./types";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: theme.spacing(0, 1.5, 1.5, 0),
  fontWeight: 500,
  boxShadow: "none",
}));

const SearchBox: React.FC<SearchBoxProps> = ({ onClick }) => {
  const [search, setSearch] = useState("");

  const onChange = (value: string) => setSearch(value);

  const handleSearch = () => onClick?.(search);

  return (
    <TextField
      value={search}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name, email or phone"
      size="small"
      fullWidth
      slotProps={{
        input: {
          sx: { borderRadius: 3, pr: 0, m: 0 },
          startAdornment: (
            <SearchIcon sx={{ fontWeight: 500 }} color="disabled" />
          ),
          endAdornment: (
            <SearchButton variant="contained" onClick={handleSearch}>
              Search
            </SearchButton>
          ),
        },
      }}
    />
  );
};

export default SearchBox;
