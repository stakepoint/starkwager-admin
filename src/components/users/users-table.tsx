"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/lib/types";

interface UsersTableProps {
  users: User[];
  isLoading: boolean;
  selectedUsers: string[];
  onSelectUser: (userId: string, isSelected: boolean) => void;
  onSelectAll: (isSelected: boolean) => void;
}

export function UsersTable({
  users,
  isLoading,
  selectedUsers,
  onSelectUser,
  onSelectAll,
}: UsersTableProps) {
  const allSelected = users.length > 0 && selectedUsers.length === users.length;

  const formatWalletAddress = (address: string) => {
    return address;
  };

  return (
    <div className="border rounded-md">
      <Table className="text-base">
        <TableHeader className="border-[#EFF1F5] bg-[#F9F9FB]">
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={allSelected}
                onCheckedChange={onSelectAll}
                aria-label="Select all users"
              />
            </TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Wallet Address</TableHead>
            <TableHead>Account Status</TableHead>
            <TableHead>Total Wagers Created</TableHead>
            <TableHead>Total Wagers Joined</TableHead>
            <TableHead>Total Earnings (STRK)</TableHead>
            <TableHead>Date Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading
            ? // Loading skeleton
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={`loading-${index}`}>
                  <TableCell>
                    <Skeleton className="h-4 w-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[120px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[180px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[40px] ml-auto" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[40px] ml-auto" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[60px] ml-auto" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                </TableRow>
              ))
            : users.map((user) => (
                <TableRow key={user.id} className="font-normal text-blue-1">
                  <TableCell>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={(checked) =>
                        onSelectUser(user.id, !!checked)
                      }
                      aria-label={`Select ${user.username}`}
                    />
                  </TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>
                    {formatWalletAddress(user.walletAddress)}
                  </TableCell>
                  <TableCell>{user.accountStatus}</TableCell>
                  <TableCell>{user.wagersCreated}</TableCell>
                  <TableCell>{user.wagersJoined}</TableCell>
                  <TableCell>{user.earnings}$</TableCell>
                  <TableCell>{user.dateCreated}</TableCell>
                </TableRow>
              ))}

          {!isLoading && users.length === 0 && (
            <TableRow>
              <TableCell colSpan={8} className="h-24 text-center">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
