import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TransactionStatus } from "@/lib/types";

interface TransactionStatusBadgeProps {
  status: TransactionStatus;
}

export function TransactionStatusBadge({
  status,
}: TransactionStatusBadgeProps) {
  return <div>{status}</div>;
}
