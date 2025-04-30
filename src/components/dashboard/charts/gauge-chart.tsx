"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface GaugeChartProps {
  title: string;
  value: number;
  total: number;
  categories: {
    name: string;
    value: number;
    percentage: number;
    count?: number;
  }[];
  colors?: string[];
  className?: string;
}

export function GaugeChart({
  title,
  value,
  total,
  categories,
  colors = ["#E3FE30", "#0F172A", "#94A3B8", "#E2E8F0"],
  className,
}: GaugeChartProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Normalize category values to ensure they fill the entire half-circle
  const categoriesSum = categories.reduce((sum, cat) => sum + cat.value, 0);
  const normalizedCategories = categories.map((category) => ({
    ...category,
    value: (category.value / categoriesSum) * total,
  }));

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300",
        isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4",
        className
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-4">
          <div className="relative h-[160px] w-full flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={normalizedCategories}
                  cx="50%"
                  cy="100%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={100}
                  outerRadius={140}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {normalizedCategories.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-[95px] text-center">
              <p className="text-xs text-muted-foreground">Total Wagers</p>
              <p className="text-3xl font-bold">{value}</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="w-2 h-5 rounded-full mr-2"
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold">
                  {category.percentage}%
                </span>
                {category.count !== undefined && (
                  <span className="text-xs text-muted-foreground">
                    {category.count}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
