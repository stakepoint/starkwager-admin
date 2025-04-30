"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/ui/dropdown";

interface LeaderboardItem {
  rank: number;
  name: string;
  period: string;
}

interface LeaderboardProps {
  data: LeaderboardItem[];
  className?: string;
}

export function Leaderboard({ data, className }: LeaderboardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortBy, setSortBy] = useState("Highest wins");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300",
        isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Leaderboard</CardTitle>
        <Dropdown
          value={sortBy}
          onChange={setSortBy}
          options={["Highest wins", "Most active", "Highest earnings"]}
          className="w-40"
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-3 overflow-hidden">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div
                  className={cn(
                    "w-6 h-6 flex items-center justify-center rounded-full mr-3 text-xs font-medium",
                    index < 3
                      ? "bg-[#E3FE30] text-slate-900"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  )}
                >
                  {item.rank}
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
              <div className="text-sm text-muted-foreground">{item.period}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
