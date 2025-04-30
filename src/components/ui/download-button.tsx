// components/DownloadButton.tsx
import { Button } from "@/components/ui/button"; // adjust path if needed

interface DownloadButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function DownloadButton({
  onClick,
  children = "Download",
}: DownloadButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="bg-light-yellow text-xs font-medium text-blue-1 hover:bg-[#d1ef0f]"
    >
      {children}
    </Button>
  );
}
