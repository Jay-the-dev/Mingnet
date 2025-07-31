"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
  { name: "My Dashboard", icon: Squares2X2Icon, active: true },
  { name: "Store", icon: HomeIcon },
  { name: "Order", icon: ShoppingCartIcon },
  { name: "Inventory", icon: TruckIcon },
  { name: "Track", icon: ChartBarIcon },
  { name: "Wallet", icon: WalletIcon },
  { name: "Settings", icon: Cog6ToothIcon },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("Month");

  return (
    <div className="flex min-h-screen bg-[#fefcf6]">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-500 p-4 rounded-full">
            <img src="/camera-icon.svg" alt="Camera" className="h-8 w-8 text-white" />
          </div>
        </div>
        <nav className="space-y-3">
          {navItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
                item.active
                  ? "bg-green-500 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">My Dashboard</h1>

        <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Sales</h2>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Month">Month</option>
              <option value="Quarter">Quarter</option>
              <option value="Year">Year</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar
                dataKey="sales"
                fill="#f59e0b"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
