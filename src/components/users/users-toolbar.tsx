"use client";

import { CalendarIcon, Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";
import { AccountStatus, ActivityLevel } from "@/lib/types";

interface UsersToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  dateRange: [Date | undefined, Date | undefined];
  onDateRangeChange: (value: [Date | undefined, Date | undefined]) => void;
  accountStatus: AccountStatus | "all";
  onAccountStatusChange: (value: AccountStatus | "all") => void;
  activityLevel: ActivityLevel | "all";
  onActivityLevelChange: (value: ActivityLevel | "all") => void;
  onDownload: () => void;
}

export function UsersToolbar({
  search,
  onSearchChange,
  dateRange,
  onDateRangeChange,
  accountStatus,
  onAccountStatusChange,
  activityLevel,
  onActivityLevelChange,
  onDownload,
}: UsersToolbarProps) {
  const [from, to] = dateRange;

  const dateRangeText =
    from && to
      ? `${from.getDate()}${
          from.getMonth() === to.getMonth()
            ? ""
            : " " + from.toLocaleString("default", { month: "long" })
        }-${to.getDate()} ${to.toLocaleString("default", {
          month: "long",
        })} ${to.getFullYear()}`
      : "Select date range";

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 text-blue-1 text-xs">
      <div className="flex items-center gap-10">
        <h1 className="text-xl font-semibold tracking-tight">Users</h1>
        <div className="relative">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users"
            className="w-full pr-8 md:w-[250px] placeholder:text-blue-1 bg-white border-transparent"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center ml-auto">
        <Select
          value={accountStatus}
          onValueChange={(value) =>
            onAccountStatusChange(value as AccountStatus | "all")
          }
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Account Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Account Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="restricted">Restricted</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={activityLevel}
          onValueChange={(value) =>
            onActivityLevelChange(value as ActivityLevel | "all")
          }
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Activity Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !from && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRangeText}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={from}
              selected={{ from, to }}
              onSelect={(range) => {
                onDateRangeChange([range?.from, range?.to]);
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        <Button
          onClick={onDownload}
          className="bg-[#D9F50A] hover:bg-[#c5e009] text-black"
        >
          {/* <Download className="mr-2 h-4 w-4" /> */}
          Download
        </Button>
      </div>
    </div>
  );
}
