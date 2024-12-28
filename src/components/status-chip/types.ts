export enum Status {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  IN_REVIEW = "IN_REVIEW",
  ON_HOLD = "ON_HOLD",
  CANCELLED = "CANCELLED",
}

export type StatusChipProps = {
  status: Status;
};
