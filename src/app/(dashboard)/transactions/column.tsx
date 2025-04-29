"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { IUserActivity } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IUserActivity>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "userName",
    header: "Username",
  },
  {
    accessorKey: "walletAddress",
    header: "Wallet Address",
  },
  {
    accessorKey: "accountStatus",
    header: "Account Status",
  },
  {
    accessorKey: "totalWagersCreated",
    header: "Total Wagers Created",
  },
  {
    accessorKey: "totalWagersJoined",
    header: "Total Wagers Joined",
  },
  {
    accessorKey: "totalEarnings",
    header: "Total Earnings (STRK)",
  },
  {
    accessorKey: "dateCreated",
    header: "Date Created",
  },
];
