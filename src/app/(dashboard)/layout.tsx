import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layouts/themeProvider";
import { Navbar } from "@/components/layouts/navbar";

export const metadata: Metadata = {
  title: "Strkwgr | Betting Analytics",
  description: "Analytics dashboard for wager management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A]">
            <Navbar />
            <main className="pt-16 pb-8 px-4 md:px-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
