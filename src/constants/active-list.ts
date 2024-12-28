import { Status } from "@/components/status-chip/types";
import { RowData } from "@/types";

const { CANCELLED, COMPLETED, IN_PROGRESS, IN_REVIEW, ON_HOLD } = Status;

const data: RowData[] = [
  {
    id: 1,
    customerName: "Bradley Lawlor",
    contact: {
      phone: "(814) 413-9191",
      email: "bradley@gmail.com",
    },
    assignedTo: { name: "Bravo Lim", avatar: "path/to/bravo_lim_avatar.jpg" },
    unitsManaged: 1,
    propertyType: "Condos",
    planningOn: "1-3 Months",
    role: "Property owner",
    status: CANCELLED,
  },
  {
    id: 2,
    customerName: "John Dukes",
    contact: {
      phone: "(123) 456-7890",
      email: "john@gmail.com",
    },
    assignedTo: { name: "John Doe", avatar: "path/to/john_doe_avatar.jpg" },
    unitsManaged: 2,
    propertyType: "Apartments/Flats",
    planningOn: "3-6 Months",
    role: "Property manager",
    status: IN_PROGRESS,
  },
  {
    id: 3,
    customerName: "Joshua Jones",
    contact: {
      phone: "(917) 339-6416",
      email: "joshua@gmail.com",
    },
    assignedTo: null,
    unitsManaged: 3,
    propertyType: "Independent",
    planningOn: "6 months +",
    role: "Property owner and manager",
    status: IN_REVIEW,
  },
  {
    id: 4,
    customerName: "Stephanie Sharkey",
    contact: {
      phone: "(303) 420-4261",
      email: "stephanie@gmail.com",
    },
    assignedTo: { name: "Anne Doe", avatar: "path/to/anne_doe_avatar.jpg" },
    unitsManaged: 4,
    propertyType: "Multi-Family Homes",
    planningOn: "ASAP",
    role: "Community associate",
    status: ON_HOLD,
  },
  {
    id: 5,
    customerName: "James Hall",
    contact: {
      phone: "(907) 248-8330",
      email: "james@gmail.com",
    },
    assignedTo: null,
    unitsManaged: 5,
    propertyType: "Condos",
    planningOn: "ASAP",
    role: "Property owner",
    status: COMPLETED,
  },
  {
    id: 6,
    customerName: "Kurt Bates",
    contact: {
      phone: "(401) 715-3344",
      email: "kurt@gmail.com",
    },
    assignedTo: { name: "Bravo Lim", avatar: "path/to/bravo_lim_avatar.jpg" },
    unitsManaged: 6,
    propertyType: "Multi-Family Homes",
    planningOn: "Just researching",
    role: "Property owner",
    status: IN_PROGRESS,
  },
  {
    id: 7,
    customerName: "Lorri Warf",
    contact: {
      phone: "(301) 580-7410",
      email: "lorri@gmail.com",
    },
    assignedTo: {
      name: "John Doe",
      avatar:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    unitsManaged: 7,
    propertyType: "Apartments/Flats",
    planningOn: "1-3 Months",
    role: "Property owner and manager",
    status: CANCELLED,
  },
  {
    id: 8,
    customerName: "Daniel Hamilton",
    contact: {
      phone: "(406) 382-2670",
      email: "daniel@gmail.com",
    },
    assignedTo: {
      name: "Anne Doe",
      avatar:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    unitsManaged: 8,
    propertyType: "Independent",
    planningOn: "Just researching",
    role: "Property manager",
    status: IN_REVIEW,
  },
  {
    id: 9,
    customerName: "Chris Glasser",
    contact: {
      phone: "(818) 313-7673",
      email: "chris@gmail.com",
    },
    assignedTo: null,
    unitsManaged: 9,
    propertyType: "Independent",
    planningOn: "3-6 Months",
    role: "Property owner",
    status: IN_PROGRESS,
  },
  {
    id: 10,
    customerName: "Rodger Struck",
    contact: {
      phone: "(904) 335-2403",
      email: "rodger@gmail.com",
    },
    assignedTo: { name: "John Doe", avatar: "path/to/john_doe_avatar.jpg" },
    unitsManaged: 10,
    propertyType: "Condos",
    planningOn: "ASAP",
    role: "Property management company owner",
    status: IN_PROGRESS,
  },
];

export default data;
