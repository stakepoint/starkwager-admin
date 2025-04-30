"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

interface TooltipLabelProps {
  month: string;
  value: number;
  label?: string;
}

interface LineChartCompProps {
  data: {
    [key: string]: string | number;
  }[];
  title: string;
  value?: string;
  xKey: string;
  yKey: string;
  className?: string;
  tooltipLabel?: string;
  tooltipFormat?: (value: number) => string;
  strokeColor?: string;
}

export function LineChartComp({
  data,
  xKey,
  yKey,
  className,
  tooltipLabel,
  tooltipFormat = (value) => `${value}`,
  strokeColor = "hsl(var(--chart-1))",
}: LineChartCompProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedValue, setSelectedValue] = useState<TooltipLabelProps | null>(
    null
  );

  const log = () => {
    console.log("selectedValue", selectedValue);
    console.log("data", data);
    console.log("xKey", xKey);
    console.log("yKey", yKey);
    console.log("tooltipLabel", tooltipLabel);
    console.log("tooltipFormat", tooltipFormat);
    console.log("strokeColor", strokeColor);
  };
  useEffect(() => {
    log();
    setIsLoaded(true);
  }, []);

  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg bg-[#1E2D48] text-white p-3 shadow-md text-center">
          <p className="text-sm font-light mb-1">{payload[0].payload[xKey]}</p>
          <p className="text-lg font-medium">
            {tooltipFormat(payload[0].value as number)} wagers
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-500",
        isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4",
        className
      )}
    >
      <CardContent className="pt-10 md:pl-auto pl-0">
        <div className="md:h-[400px] h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              onMouseMove={(props) => {
                if (props.activePayload) {
                  setSelectedValue({
                    month: props.activePayload[0].payload[xKey],
                    value: props.activePayload[0].payload[yKey],
                    label: tooltipLabel,
                  });
                }
              }}
              onMouseLeave={() => {
                setSelectedValue(null);
              }}
            >
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E2D48" stopOpacity={0.16} />
                  <stop offset="100%" stopColor="#1E2D48" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                horizontal={true}
                vertical={false}
                strokeDasharray="3 3"
                stroke="#e0e0e0"
                strokeOpacity={0.9}
              />
              <XAxis
                dataKey={xKey}
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                cursor={{ stroke: "#f2f2f2", strokeWidth: 1, opacity: 0.15 }}
                content={<CustomTooltip />}
              />
              <Area
                type="monotone"
                dataKey={yKey}
                stroke={strokeColor}
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorGradient)"
                dot={false}
                activeDot={{
                  r: 6,
                  style: { fill: strokeColor, opacity: 0.8 },
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
