// Mock data for Wager Analytics page

export const wagerStats = [
  { title: "Total Wagers", value: 0, change: 12, icon: "wagers" as const },
  {
    title: "Completed Wagers",
    value: 0,
    change: 10,
    icon: "completed" as const,
  },
  {
    title: "Ongoing Wagers",
    value: 0,
    change: 8,
    icon: "ongoing" as const,
  },
  {
    title: "Disputed Wagers",
    value: 0,
    change: -5,
    icon: "disputed" as const,
  },
  {
    title: "Avg Amount",
    value: "$0",
    change: 10,
    icon: "average" as const,
  },
];

export const wagerTrendsData = [
  { month: "Jan", value: 25 },
  { month: "Feb", value: 20 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 45 },
  { month: "May", value: 65 },
  { month: "Jun", value: 55 },
  { month: "Jul", value: 45 },
  { month: "Aug", value: 60 },
  { month: "Sep", value: 55 },
  { month: "Oct", value: 70 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 95 },
];

export const wagerCategories = [
  { name: "Sports", value: 22, percentage: 55, count: 22 },
  { name: "General Knowledge", value: 8, percentage: 20, count: 8 },
  { name: "Crypto", value: 6, percentage: 15, count: 6 },
  { name: "Gaming", value: 4, percentage: 10, count: 4 },
];

export const recentWagersData = [
  {
    id: "#123",
    title: "Will BTC hit $100k?",
    category: "Crypto",
    participants: 2,
    amount: "5$",
    status: "Pending",
    dateCreated: "05/01/2025",
  },
  {
    id: "#124",
    title: "Man U vs Arsenal",
    category: "Sports",
    participants: 5,
    amount: "5$",
    status: "Complete",
    dateCreated: "05/01/2025",
  },
  {
    id: "#125",
    title: "Department Name",
    category: "Wallet Address",
    participants: 3,
    amount: "5$",
    status: "Pending",
    dateCreated: "05/01/2025",
  },
  {
    id: "#126",
    title: "Department Name",
    category: "Wallet Address",
    participants: 2,
    amount: "5$",
    status: "Complete",
    dateCreated: "05/01/2025",
  },
  {
    id: "#127",
    title: "Department Name",
    category: "Wallet Address",
    participants: 2,
    amount: "5$",
    status: "Complete",
    dateCreated: "05/01/2025",
  },
];
