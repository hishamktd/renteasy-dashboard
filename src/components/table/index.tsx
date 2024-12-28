import { RowData } from "@/types";
import { useState, MouseEvent } from "react";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import data from "@/constants/active-list";
import StatusChip from "../status-chip";

const TableComponent = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleMenuClick = (
    event: MouseEvent<HTMLButtonElement>,
    row: RowData
  ) => {
    setAnchorEl(event.currentTarget);
    console.log("row", row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderAssignTo = (row: RowData) => {
    if (!row.assignedTo) {
      return <Button sx={{ textTransform: "none" }}>Assign to me</Button>;
    }

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          height: 52,
        }}
      >
        <Avatar
          alt={row.assignedTo.name}
          src={row.assignedTo.avatar as string}
        />
        <Typography>{row.assignedTo.name}</Typography>
      </div>
    );
  };

  const renderContact = (row: RowData) => {
    return (
      <div>
        <Typography>{row.contact.phone}</Typography>
        <Typography color="textSecondary" sx={{ fontSize: 14 }}>
          {row.contact.email}
        </Typography>
      </div>
    );
  };

  const renderActions = (row: RowData) => {
    return (
      <>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuClick(event, row)}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            Send reset password link
          </MenuItem>
        </Menu>
      </>
    );
  };

  const columns: GridColDef<RowData>[] = [
    { field: "customerName", headerName: "Customer Name", flex: 1 },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
      renderCell: ({ row }) => renderContact(row),
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "assignedTo",
      headerName: "Assigned To",
      flex: 1,
      renderCell: ({ row }) => renderAssignTo(row),
    },
    { field: "unitsManaged", headerName: "Units Managed", flex: 0.5 },
    { field: "propertyType", headerName: "Property Type", flex: 1 },
    { field: "planningOn", headerName: "Planning On", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row }) => <StatusChip status={row.status} />,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      renderCell: ({ row }) => renderActions(row),
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        disableAutosize
        pageSizeOptions={[10]}
      />
    </div>
  );
};

export default TableComponent;
