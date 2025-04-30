import Card from "@/components/card";
import {
  AverageResolutionIcon,
  TotalDisputeIcon,
  TrendIcon,
} from "../../../../public/icon";
import { DisputeHeader } from "@/components/dispute/dispute-header";
import { DisputeTable } from "@/components/dispute/dispute-table";
import { DisputePagination } from "@/components/dispute/dispute-pagination";
import { disputeData } from "@/lib/data/dispute";
import { DisputeChart } from "@/components/dispute/dispute-chart";

const cardDetails = [
  {
    number: "24",
    title: "Total disputes raised this month.",
    avatar: <TotalDisputeIcon />,
    icon: <TrendIcon />,
  },
  {
    number: "1",
    title: "Average resolution time",
    avatar: <AverageResolutionIcon />,
    icon: <TrendIcon />,
  },
];
export default function DisputeResolutionDashboard() {
  // mock data

  const totalTransactions = 512;
  const currentPage = 1;
  return (
    <div className="container mx-auto p-6 min-h-screen">
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
        <div className="flex-1">
          <DisputeChart />
        </div>
      </div>
      <div className="px-4 py-6 ">
        <DisputeHeader />
      </div>
      <DisputeTable disputes={disputeData} />
      <div className="mt-4">
        <DisputePagination
          currentPage={currentPage}
          totalItems={totalTransactions}
          itemsPerPage={12}
        />
      </div>
    </div>
  );
}
