"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUp,
  ArrowDown,
  FileText,
  DollarSign,
  Users,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?:
    | "wagers"
    | "transactions"
    | "fees"
    | "users"
    | "ongoing"
    | "completed"
    | "disputed"
    | "average";
  className?: string;
}

export function StatCard({
  title,
  value,
  change = 0,
  icon,
  className,
}: StatCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderIcon = () => {
    const iconClass = "h-5 w-5";

    switch (icon) {
      case "wagers":
        return <Briefcase className={iconClass} />;
      case "transactions":
        return <FileText className={iconClass} />;
      case "fees":
        return <DollarSign className={iconClass} />;
      case "users":
        return <Users className={iconClass} />;
      case "ongoing":
        return <Briefcase className={iconClass} />;
      case "completed":
        return <Briefcase className={iconClass} />;
      case "disputed":
        return <Briefcase className={iconClass} />;
      case "average":
        return <DollarSign className={iconClass} />;
      default:
        return <Briefcase className={iconClass} />;
    }
  };

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 text-headingBlue",
        isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-5xl font-bold text-headingBlue">{value}</div>
            <h3 className="text-sm font-medium text-muted-foreground my-1">
              {title}
            </h3>
            <div className="flex">
              {typeof change !== "undefined" && (
                <div className="flex items-center mt-1 bg-muted p-1 rounded">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      change > 0
                        ? "text-emerald-500"
                        : change < 0
                        ? "text-red-500"
                        : "text-muted-foreground"
                    )}
                  >
                    {Math.abs(change)}%
                  </span>
                  {change > 0 ? (
                    <ArrowUp className="h-3 w-3 text-emerald-500 mr-1" />
                  ) : change < 0 ? (
                    <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                  ) : null}
                </div>
              )}
            </div>
          </div>
          <div className="p-2 rounded-lg bg-muted">{renderIcon()}</div>
        </div>
      </CardContent>
    </Card>
  );
}
