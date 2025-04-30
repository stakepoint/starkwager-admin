"use client";

import { useState } from "react";
import { StatCard } from "@/components/dashboard/stat-card";
import { BarChartComp } from "@/components/dashboard/charts/bar-chart";
import { LineChartComp } from "@/components/dashboard/charts/line-chart";
import { DonutChart } from "@/components/dashboard/charts/donut-chart";
import { DataTable } from "@/components/dashboard/data-table";
import { Leaderboard } from "@/components/dashboard/leaderboard";
import { Dropdown } from "@/components/ui/dropdown";
import {
  dashboardStats,
  monthlyBarData,
  revenueData,
  monthlyRevenueData,
  wagerTableData,
  leaderboardData,
} from "@/lib/data/dashboard-data";

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState("Monthly");
  const [financialTimeframe, setFinancialTimeframe] = useState("Monthly");

  const wagerColumns = [
    { key: "title", label: "Title" },
    { key: "amount", label: "Amount Staked" },
    { key: "participants", label: "Participants" },
    {
      key: "status",
      label: "Status",
      render: (
        value: string | number,
        row: { [key: string]: string | number }
      ) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Pending"
              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500"
              : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-500"
          }`}
        >
          {value.toString()} {row.key}
        </span>
      ),
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Wager Analytics Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Wager Analytics</h2>
        <Dropdown
          value={timeframe}
          onChange={setTimeframe}
          options={["Daily", "Weekly", "Monthly", "Yearly"]}
          className="w-32"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
        <div className="lg:col-span-3">
          <BarChartComp
            title="Wagers"
            value1={514}
            value2={362}
            data={monthlyBarData}
            xKey="month"
            y1Key="created"
            y2Key="completed"
            label1="Wagers created"
            label2="Completed"
          />
        </div>
        <div className="lg:col-span-2">
          <DataTable
            title="Title"
            columns={wagerColumns}
            data={wagerTableData}
            className="h-full overflow-y-hidden"
          />
        </div>
      </div>

      {/* Financial Metrics Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Financial Metrics</h2>
        <Dropdown
          value={financialTimeframe}
          onChange={setFinancialTimeframe}
          options={["Daily", "Weekly", "Monthly", "Yearly"]}
          className="w-32"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 mb-6">
        <div className="lg:col-span-2">
          <DonutChart
            title="Revenue Breakdown"
            value="$1,000"
            change={15}
            data={revenueData}
            className="h-full"
          />
        </div>
        <div className="lg:col-span-4">
          <LineChartComp
            title="Revenue Over Time"
            data={monthlyRevenueData}
            xKey="month"
            yKey="value"
            tooltipLabel="Revenue"
            tooltipFormat={(value) => `$${value}`}
            strokeColor="#0F172A"
          />
        </div>

        {/* Leaderboard Section */}

        <div className="mb-6 lg:col-span-2 h-[400px]">
          <Leaderboard
            data={leaderboardData}
            className="h-[450px] overflow-y-scroll"
          />
        </div>
      </div>
    </div>
  );
}
