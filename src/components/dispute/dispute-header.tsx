"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import type { DateRange } from "react-day-picker";
import DownloadButton from "../ui/download-button";

export function DisputeHeader() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2028, 8, 1),
    to: new Date(2028, 8, 30),
  });

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 text-blue-1 text-xs">
      <div className="flex items-center gap-10">
        <h1 className="text-xl font-semibold tracking-tight">Disputes</h1>
        <div className="relative">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Dispute ID"
            className="w-full pr-8 md:w-[250px] placeholder:text-blue-1 bg-white border-transparent"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="All Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="escalated">Escalated</SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange date={date} setDate={setDate} />
        <DownloadButton />
      </div>
    </div>
  );
}
