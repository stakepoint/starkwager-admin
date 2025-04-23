import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <h1 className="text-4xl font-bold">Starkwager Admin</h1>
      <p>Welcome to Starkwager admin</p>
      <div className="flex flex-col items-center gap-2">
        <Link href="/auth">Auth</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
