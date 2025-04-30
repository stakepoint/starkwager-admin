"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";

interface BarChartCompProps {
  data: {
    [key: string]: string | number;
  }[];
  title: string;
  subtitle?: string;
  value1?: number;
  value2?: number;
  label1?: string;
  label2?: string;
  className?: string;
  xKey: string;
  y1Key: string;
  y2Key?: string;
  barColor1?: string;
  barColor2?: string;
}

export function BarChartComp({
  data,
  value1,
  value2,
  label1 = "Created",
  label2 = "Completed",
  className,
  xKey,
  y1Key,
  y2Key,
  barColor1 = "#E3FE30",
  barColor2 = "#10B981",
}: BarChartCompProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-500",
        isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-10">
          {value1 !== undefined && (
            <div className="">
              <div className="flex items-center">
                <div
                  className="w-1 h-5 rounded-full mr-1"
                  style={{ backgroundColor: barColor1 }}
                ></div>
                <div className="text-[#7D89B0]">{label1}</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-headingBlue">
                  {value1}
                </div>
              </div>
            </div>
          )}
          {value2 !== undefined && y2Key && (
            <div className="">
              <div className="flex items-center">
                <div
                  className="w-1 h-5 rounded-full mr-1"
                  style={{ backgroundColor: barColor2 }}
                ></div>
                <div className="text-[#7D89B0]">{label2}</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-headingBlue">
                  {value2}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px] mt-4 text-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey={y1Key}
                name={label1}
                fill={barColor1}
                radius={[4, 4, 0, 0]}
              />
              {y2Key && (
                <Bar
                  dataKey={y2Key}
                  name={label2}
                  fill={barColor2}
                  radius={[4, 4, 0, 0]}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
