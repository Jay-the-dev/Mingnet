"use client";

import { useState } from "react";
import camera from "../../../public/sidebar.png"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "../components/sideBar/page";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  HomeIcon,
  ShoppingCartIcon,
  TruckIcon,
  WalletIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const data = [
  { name: "JAN", sales: 200 },
  { name: "FEB", sales: 140 },
  { name: "MAR", sales: 280 },
  { name: "APR", sales: 80 },
  { name: "MAY", sales: 40 },
  { name: "JUN", sales: 40 },
  { name: "JUL", sales: 40 },
  { name: "AUG", sales: 40 },
  { name: "SEP", sales: 40 },
  { name: "OCT", sales: 40 },
  { name: "NOV", sales: 40 },
  { name: "DEC", sales: 40 },
];

const navItems = [
  { name: "My Dashboard", icon: Squares2X2Icon, active: true, href: "/" },
  { name: "Store", icon: HomeIcon, href: "/store" },
  { name: "Order", icon: ShoppingCartIcon, href: "/order" },
  { name: "Inventory", icon: TruckIcon, href: "/inventory" },
  { name: "Track", icon: ChartBarIcon, href: "/track" },
  { name: "Wallet", icon: WalletIcon, href: "/wallet" },
  { name: "Settings", icon: Cog6ToothIcon, href: "/settings" },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("Month");
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#fefcf6]">
      {/* Sidebar */}
      <SideBar />

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">My Dashboard</h1>

        <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Sales</h2>

            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="Month">Month</option>
              <option value="Quarter">Quarter</option>
              <option value="Year">Year</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={270}>
            <BarChart data={data}>
              <CartesianGrid vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" className="text-[12px]" />
              <YAxis stroke="#6b7280" domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} className="text-[12px]" />
              <Tooltip />
              <Bar dataKey="sales" radius={[0, 0, 0, 0]} barSize={32}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.sales < 100 ? "#9ca3af" : "#f59e0b"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
