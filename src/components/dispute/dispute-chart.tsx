"use client";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [{ resolved: 22, closed: 8 }];

const chartConfig = {
  resolved: {
    label: "Resolved",
    color: "#E0FE10",
  },
  closed: {
    label: "Closed",
    color: "hsl(220°, 70%, 20%)",
  },
} satisfies ChartConfig;

export function DisputeChart() {
  const totalDisputes = chartData[0].resolved + chartData[0].closed;

  return (
    <Card className="flex flex-col justify-center">
      <CardContent className="flex gap-6 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-full max-w-[250px] max-h-[180px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
            className="mt-8"
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-muted-foreground"
                        >
                          Total Disputes
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 8}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalDisputes.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>

            <RadialBar
              dataKey="closed"
              fill="#102A56"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="resolved"
              stackId="a"
              cornerRadius={5}
              fill="#E0FE10"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
        <div className="flex-1 flex flex-col justify-center space-y-6 text-blue-1">
          <div className=" flex items-center justify-between gap-3 text-base font-medium">
            <div className="w-4 h-10 rounded bg-[#E0FE10]"></div>
            <span className="text-blue-1">Resolved</span>

            <div className="ml-auto flex flex-col items-end">
              <span className="">55%</span>
              <span className="text-gray-500 text-sm">22</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-4 h-10 rounded bg-blue-1"></div>
            <span className="ml-3">Closed</span>
            <div className="ml-auto flex flex-col items-end">
              <span className="">20%</span>
              <span className="text-gray-500 text-sm">8</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
