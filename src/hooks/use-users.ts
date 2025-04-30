"use client";

import { AccountStatus, ActivityLevel, User } from "@/lib/types";
import { useState, useEffect } from "react";

interface UseUsersProps {
  search: string;
  dateRange: [Date | undefined, Date | undefined];
  accountStatus: AccountStatus | "all";
  activityLevel: ActivityLevel | "all";
  page: number;
}

// Mock data for demonstration
const MOCK_USERS: User[] = [
  {
    id: "1",
    username: "Noyi24_7",
    walletAddress: "0x400e440...73fd",
    accountStatus: "active",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "2",
    username: "BabyKeem",
    walletAddress: "0x400e440...73fd",
    accountStatus: "restricted",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "3",
    username: "Hoossayn",
    walletAddress: "0x400e440...73fd",
    accountStatus: "suspended",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "4",
    username: "Aj",
    walletAddress: "0x400e440...73fd",
    accountStatus: "inactive",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "5",
    username: "Kash",
    walletAddress: "0x400e440...73fd",
    accountStatus: "active",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "6",
    username: "Noyi24_7",
    walletAddress: "0x400e440...73fd",
    accountStatus: "restricted",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "7",
    username: "BabyKeem",
    walletAddress: "0x400e440...73fd",
    accountStatus: "suspended",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "8",
    username: "Hoossayn",
    walletAddress: "0x400e440...73fd",
    accountStatus: "suspended",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "9",
    username: "Aj",
    walletAddress: "0x400e440...73fd",
    accountStatus: "active",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "10",
    username: "Kash",
    walletAddress: "0x400e440...73fd",
    accountStatus: "active",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "11",
    username: "Noyi24_7",
    walletAddress: "0x400e440...73fd",
    accountStatus: "active",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
  {
    id: "12",
    username: "BabyKeem",
    walletAddress: "0x400e440...73fd",
    accountStatus: "active",
    wagersCreated: 53,
    wagersJoined: 27,
    earnings: 500,
    dateCreated: "05/01/2025",
  },
];

export function useUsers({ search, accountStatus, page }: UseUsersProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with delay
    setIsLoading(true);

    const timer = setTimeout(() => {
      let filteredUsers = [...MOCK_USERS];

      if (search) {
        filteredUsers = filteredUsers.filter(
          (user) =>
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.walletAddress.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (accountStatus !== "all") {
        filteredUsers = filteredUsers.filter(
          (user) => user.accountStatus === accountStatus
        );
      }

      setTotalUsers(filteredUsers.length * 43);

      const itemsPerPage = 12;
      const startIndex = (page - 1) * itemsPerPage;
      const paginatedUsers = filteredUsers.slice(0, itemsPerPage);

      console.log(startIndex);
      setUsers(paginatedUsers);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, accountStatus, page]);

  return { users, totalUsers, isLoading };
}
