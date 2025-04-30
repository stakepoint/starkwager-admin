"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, LineChart, FileText, Users, ShieldAlert } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const routes = [
  {
    label: "Overview",
    icon: Home,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Wager Analytics",
    icon: LineChart,
    href: "/wager-analytics",
    color: "text-yellow-500",
  },
  {
    label: "Transactions",
    icon: FileText,
    href: "/transactions",
    color: "text-green-500",
  },
  {
    label: "User Activity",
    icon: Users,
    href: "/user-activity",
    color: "text-violet-500",
  },
  {
    label: "Dispute Resolution",
    icon: ShieldAlert,
    href: "/dispute-resolution",
    color: "text-pink-500",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 w-full z-50 bg-grey-10 dark:bg-[#0F172A] border-b dark:border-slate-700 shadow-sm">
      <div className="flex h-24 items-center justify-between px-4 md:px-6 max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center">
          <div className="relative mr-6">
            <h1 className="text-2xl font-bold">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </h1>
          </div>
        </Link>
        <nav className="mx-6 hidden md:flex items-center justify-center w-full space-x-2 lg:space-x-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === route.href
                  ? "bg-[#30374F] dark:bg-slate-800 text-secondary dark:text-white"
                  : "text-grey-5 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-50"
              )}
            >
              <route.icon className={cn("h-4 w-4 mr-2")} />
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-x-4">
          <div className="flex items-center">
            <Avatar className="">
              <AvatarImage
                src="/images/avatar.png"
                alt="User"
                className="rounded-xl"
              />
              <AvatarFallback className="bg-[#E3FE30] text-slate-900">
                HS
              </AvatarFallback>
            </Avatar>
            <div className="ml-2 hidden md:block">
              <p className="text-sm font-medium text-grey-2 dark:text-white">
                Hoosaayn
              </p>
              <p className="text-xs text-grey-5 dark:text-slate-400">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
