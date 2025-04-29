interface DisputeStatusBadgeProps {
  status: any;
}

export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  return <div>{status}</div>;
}
