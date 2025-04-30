"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

interface DonutChartProps {
  data: {
    [key: string]: string | number;
  }[];
  title: string;
  value?: string | number;
  change?: number;
  colors?: string[];
  nameKey?: string;
  dataKey?: string;
  innerRadius?: number;
  outerRadius?: number;
  className?: string;
}

export function DonutChart({
  data,
  title,
  value,
  change,
  colors = ["#E3FE30", "#EFF1F5", "#3B82F6", "#93C5FD"],
  nameKey = "name",
  dataKey = "value",
  innerRadius = 60,
  outerRadius = 80,
  className,
}: DonutChartProps) {
  const [isLoaded, setIsLoaded] = useState(false);

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
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col ">
          <div className="mb-4 md:mb-0 h-[200px] w-[200px] mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  innerRadius={innerRadius}
                  outerRadius={outerRadius}
                  dataKey={dataKey}
                  nameKey={nameKey}
                  paddingAngle={2}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 rounded-md shadow-md">
                          <p className="text-sm font-medium">
                            {payload[0].name}: {payload[0].value}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col space-y-4">
            {value && (
              <div>
                <p>Total Fees</p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold">{value}</div>
                  {change !== undefined && (
                    <div className="flex items-center bg-muted p-2 rounded-md">
                      <ArrowUp className="h-4 w-4 text-emerald-500 mr-1" />
                      <span className="text-xs font-medium text-emerald-500">
                        {change}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="space-y-2">
              {data.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">
                        {item[nameKey]}
                      </span>
                      <span className="text-sm text-[#7D89B0]">
                        ${item.value}
                      </span>
                    </div>
                    <span className="text-sm">
                      {typeof item.percentage !== "undefined"
                        ? `${item.percentage}%`
                        : `${item[dataKey]}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
