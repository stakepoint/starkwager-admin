"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { TransactionStatusBadge } from "@/components/transactions/transaction-status-badge";
import type { Transaction } from "@/lib/types";

interface TransactionsTableProps {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedItems.length === transactions.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(transactions.map((t) => t.id));
    }
  };

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="rounded-md border bg-white">
      <Table className="text-base">
        <TableHeader className="border-[#EFF1F5] bg-[#F9F9FB]">
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={
                  selectedItems.length === transactions.length &&
                  transactions.length > 0
                }
                onCheckedChange={toggleSelectAll}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead>User</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="font-normal text-blue-1">
              <TableCell>
                <Checkbox
                  checked={selectedItems.includes(transaction.id)}
                  onCheckedChange={() => toggleSelectItem(transaction.id)}
                  aria-label={`Select transaction for ${transaction.user}`}
                />
              </TableCell>
              <TableCell>{transaction.user}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <TransactionStatusBadge status={transaction.status} />
              </TableCell>
              <TableCell>{transaction.dateCreated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
