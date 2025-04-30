interface DisputeStatusBadgeProps {
  status: string;
}

export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  return <div>{status}</div>;
}
