import { Status } from "@/components/status-chip/types";

export type RowData = {
  id: number;
  customerName: string;
  contact: {
    phone: string;
    email: string;
  };
  assignedTo: {
    avatar: string | null;
    name: string;
  } | null;
  unitsManaged: number;
  propertyType: string;
  planningOn: string;
  role: string;
  status: Status;
};
