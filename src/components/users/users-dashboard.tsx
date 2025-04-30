"use client";

import { useState } from "react";
import { UsersTable } from "./users-table";
import { UsersToolbar } from "./users-toolbar";
import { UsersPagination } from "./users-pagination";
import { useUsers } from "@/hooks/use-users";
import { AccountStatus, ActivityLevel } from "@/lib/types";

export function UsersDashboard() {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState<
    [Date | undefined, Date | undefined]
  >([
    new Date(2028, 8, 1), // September 1, 2028
    new Date(2028, 8, 30), // September 30, 2028
  ]);
  const [accountStatus, setAccountStatus] = useState<AccountStatus | "all">(
    "all"
  );
  const [activityLevel, setActivityLevel] = useState<ActivityLevel | "all">(
    "all"
  );
  const [page, setPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const { users, totalUsers, isLoading } = useUsers({
    search,
    dateRange,
    accountStatus,
    activityLevel,
    page,
  });

  const handleSelectUser = (userId: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    }
  };

  // Handle select all
  const handleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleDownload = () => {
    console.log(setPage);

    console.log("Downloading user data...");
  };

  return (
    <div className="space-y-4 mt-6">
      <UsersToolbar
        search={search}
        onSearchChange={setSearch}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        accountStatus={accountStatus}
        onAccountStatusChange={setAccountStatus}
        activityLevel={activityLevel}
        onActivityLevelChange={setActivityLevel}
        onDownload={handleDownload}
      />

      <UsersTable
        users={users}
        isLoading={isLoading}
        selectedUsers={selectedUsers}
        onSelectUser={handleSelectUser}
        onSelectAll={handleSelectAll}
      />

      <UsersPagination
        currentPage={page}
        totalItems={totalUsers}
        itemsPerPage={12}
      />
    </div>
  );
}
