"use client";

import { useState } from "react";
import { StatCard } from "@/components/dashboard/stat-card";
import { LineChartComp } from "@/components/dashboard/charts/line-chart";
import { GaugeChart } from "@/components/dashboard/charts/gauge-chart";
import { DataTable } from "@/components/dashboard/data-table";
import { Dropdown } from "@/components/ui/dropdown";
import {
  wagerStats,
  wagerTrendsData,
  wagerCategories,
  recentWagersData,
} from "@/lib/data/wager-analytics-data";

export default function WagerAnalytics() {
  const [timeframe, setTimeframe] = useState("Monthly");
  const [categoryTimeframe, setCategoryTimeframe] = useState("Monthly");

  const wagerColumns = [
    { key: "id", label: "ID" },
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "participants", label: "Participants" },
    { key: "amount", label: "Amount Staked" },
    {
      key: "status",
      label: "Status",
      render: (value: string | number) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Pending"
              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500"
              : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-500"
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: "dateCreated", label: "Date Created" },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-6">Wager Analytics</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {wagerStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          {/* Wager Trends Section */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Wager Trends</h2>
            <Dropdown
              value={timeframe}
              onChange={setTimeframe}
              options={["Daily", "Weekly", "Monthly", "Yearly"]}
              className="w-32"
            />
          </div>
          <LineChartComp
            title="Wager Trends"
            data={wagerTrendsData}
            xKey="month"
            yKey="value"
            tooltipLabel="Wagers"
            strokeColor="#0F172A"
          />
        </div>
        <div className="lg:col-span-1">
          <div className="flex flex-col h-full bg-white py-5 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-2 px-5">
              <h3 className="text-base font-medium">Wager Categories</h3>
              <Dropdown
                value={categoryTimeframe}
                onChange={setCategoryTimeframe}
                options={["Daily", "Weekly", "Monthly", "Yearly"]}
                className="w-32"
              />
            </div>
            <GaugeChart
              title=""
              value={40}
              total={100}
              categories={wagerCategories}
              className="border-transparent rounded-none shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Recent Wagers Table */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-4">Recent Wagers</h2>
        <DataTable title="" columns={wagerColumns} data={recentWagersData} />
      </div>
    </div>
  );
}
