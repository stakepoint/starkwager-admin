// Mock data for Dashboard page

export const dashboardStats = [
  {
    title: "Total Wagers Created",
    value: 0,
    change: 12,
    icon: "wagers" as const,
  },
  {
    title: "Total Transactions",
    value: 0,
    change: 10,
    icon: "transactions" as const,
  },
  {
    title: "Total Fees Collected",
    value: "$0",
    change: -5,
    icon: "fees" as const,
  },
  { title: "Active Users", value: 0, change: 10, icon: "users" as const },
];

export const monthlyBarData = [
  { month: "Jan", created: 100, completed: 75 },
  { month: "Feb", created: 80, completed: 65 },
  { month: "Mar", created: 95, completed: 70 },
  { month: "Apr", created: 70, completed: 45 },
  { month: "May", created: 90, completed: 65 },
  { month: "Jun", created: 100, completed: 80 },
  { month: "Jul", created: 75, completed: 60 },
  { month: "Aug", created: 90, completed: 70 },
  { month: "Sep", created: 105, completed: 90 },
  { month: "Oct", created: 80, completed: 65 },
  { month: "Nov", created: 75, completed: 50 },
  { month: "Dec", created: 110, completed: 95 },
];

export const revenueData = [
  { name: "Deposits", value: 700, percentage: 70 },
  { name: "Withdrawal", value: 300, percentage: 30 },
];

export const monthlyRevenueData = [
  { month: "Jan", value: 2300 },
  { month: "Feb", value: 1800 },
  { month: "Mar", value: 3000 },
  { month: "Apr", value: 3800 },
  { month: "May", value: 5000 },
  { month: "Jun", value: 4500 },
  { month: "Jul", value: 3800 },
  { month: "Aug", value: 4200 },
  { month: "Sep", value: 4800 },
  { month: "Oct", value: 5500 },
  { month: "Nov", value: 6500 },
  { month: "Dec", value: 7200 },
];

export const wagerTableData = [
  {
    title: "Department Name",
    amount: "Wallet Address",
    participants: "Budget",
    status: "Pending",
  },
  {
    title: "Department Name",
    amount: "Wallet Address",
    participants: "Budget",
    status: "Complete",
  },
  {
    title: "Department Name",
    amount: "Wallet Address",
    participants: "Budget",
    status: "Pending",
  },
  {
    title: "Department Name",
    amount: "Wallet Address",
    participants: "Budget",
    status: "Complete",
  },
  {
    title: "Department Name",
    amount: "Wallet Address",
    participants: "Budget",
    status: "Complete",
  },
];

export const leaderboardData = [
  { rank: 1, name: "BabyKeem", period: "S12024" },
  { rank: 2, name: "Nov24_7", period: "S10024" },
  { rank: 3, name: "Hoosaayn", period: "S8024" },
  { rank: 4, name: "Hoosaayn", period: "S8024" },
  { rank: 5, name: "Hoosaayn", period: "S8024" },
  { rank: 6, name: "Hoosaayn", period: "S8024" },
  { rank: 7, name: "Hoosaayn", period: "S8024" },
  { rank: 8, name: "Hoosaayn", period: "S8024" },
  { rank: 9, name: "Hoosaayn", period: "S8024" },
  { rank: 10, name: "Hoosaayn", period: "S8024" },
];
