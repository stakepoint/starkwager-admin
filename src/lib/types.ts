export type IUserActivity = {
  id: string;
  userName: string;
  walletAddress: string;
  accountStatus: string;
  totalWagersCreated: number;
  totalWagersJoined: number;
  totalEarnings: number;
  dateCreated: string;
};
export type TransactionType = "Withdrawal" | "Deposit" | "Bet";
export type TransactionStatus = "Pending" | "Complete";

export interface Transaction {
  id: string;
  user: string;
  type: TransactionType;
  amount: string;
  status: TransactionStatus;
  dateCreated: string;
}
export type AccountStatus = "active" | "restricted" | "suspended" | "inactive";
export type ActivityLevel = "high" | "medium" | "low";

export interface User {
  id: string;
  username: string;
  walletAddress: string;
  accountStatus: AccountStatus;
  wagersCreated: number;
  wagersJoined: number;
  earnings: number;
  dateCreated: string;
}
export interface Dispute {
  id: string;
  wagerTitle: string;
  participants: string;
  reason: string;
  status: string;
  dateCreated: string;
}
export interface ICard {
  number: string;
  title: string;
  avatar: React.ReactNode;
  icon: React.ReactNode;
}
