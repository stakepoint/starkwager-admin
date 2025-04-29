import React from "react";
import {
  ActiveUserIcon,
  NewUserIcon,
  RegressionIcon,
  TotalUserIcon,
  TrendIcon,
} from "../../../../public/icon";
import { Stack } from "@/components/ui/Stack";
import { DataTable } from "./data-table";
import { columns } from "./column";
import { userActivity } from "@/lib/data/user-activity";
import { UsersDashboard } from "@/components/users/users-dashboard";
import Card from "@/components/card";

const cardDetails = [
  {
    number: "500",
    title: "Total Users",
    avatar: <TotalUserIcon />,
    icon: <TrendIcon />,
  },
  {
    number: "450",
    title: "Active Users",
    avatar: <ActiveUserIcon />,
    icon: <TrendIcon />,
  },
  {
    number: "50",
    title: "New Users",
    avatar: <NewUserIcon />,
    icon: <RegressionIcon />,
  },
];

const page = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-4 flex-wrap">
        {cardDetails.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            title={card.title}
            avatar={card.avatar}
            icon={card.icon}
          />
        ))}
      </div>
      <div className=" py-6">
        <UsersDashboard />
      </div>
    </div>
  );
};

export default page;
