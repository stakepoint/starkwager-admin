import { ICard } from "@/lib/types";
import { Stack } from "./ui/Stack";

export default function Card({ number, title, icon, avatar }: ICard) {
  return (
    <div className="bg-white px-6 py-8 min-w-[440px] rounded-[24px] shadow-md text-blue-1">
      <Stack className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-4xl">{number}</h2>
          {avatar}
        </div>
        <div>
          <Stack className="space-y-3">
            <p className="text-base font-normal">{title}</p>
            <div>{icon}</div>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
