import type { TransactionStatus } from "@/lib/types";

interface TransactionStatusBadgeProps {
  status: TransactionStatus;
}

export function TransactionStatusBadge({
  status,
}: TransactionStatusBadgeProps) {
  return <div>{status}</div>;
}
