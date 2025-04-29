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
import type { Dispute } from "@/lib/types";
import { DisputeStatusBadge } from "./dispute-status-badge";
import { Button } from "../ui/button";

interface DisputeTableProps {
  disputes: Dispute[];
}

export function DisputeTable({ disputes }: DisputeTableProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedItems.length === disputes.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(disputes.map((t) => t.id));
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
                  selectedItems.length === disputes.length &&
                  disputes.length > 0
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
          {disputes.map((dispute) => (
            <TableRow key={dispute.id} className="font-normal text-blue-1">
              <TableCell>
                <Checkbox
                  checked={selectedItems.includes(dispute.id)}
                  onCheckedChange={() => toggleSelectItem(dispute.id)}
                  aria-label={`Select dispute for ${dispute.id}`}
                />
              </TableCell>
              <TableCell>{dispute.wagerTitle}</TableCell>
              <TableCell>{dispute.participants}</TableCell>
              <TableCell>{dispute.reason}</TableCell>
              <TableCell>
                <DisputeStatusBadge status={dispute.status} />
              </TableCell>
              <TableCell>{dispute.dateCreated}</TableCell>

              <TableCell>
                <Button
                  variant="default"
                  className="bg-[#172554] hover:bg-[#0f172a] text-white text-xs"
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
