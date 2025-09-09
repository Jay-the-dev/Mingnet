"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import camera from "../../../../public/sidebar.png"
import {
  HomeIcon,
  ShoppingCartIcon,
  TruckIcon,
  WalletIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "My Dashboard", icon: Squares2X2Icon, active: true, href: "/" },
  { name: "Store", icon: HomeIcon, href: "/store" },
  { name: "Order", icon: ShoppingCartIcon, href: "/order" },
  { name: "Inventory", icon: TruckIcon, href: "/inventory" },
  { name: "Track", icon: ChartBarIcon, href: "/track" },
  { name: "Wallet", icon: WalletIcon, href: "/wallet" },
  { name: "Settings", icon: Cog6ToothIcon, href: "/settings" },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div>
      <aside className="w-60 bg-transparent border-none">
        <div className="flex flex-col items-center mb-8">
          <div className="rounded-full h-20 w-20">
            <Image src={camera} alt="Camera" className="w-full text-white" />
          </div>
        </div>

        <nav className="space-y-3 rounded-2xl shadow h-full w-full pt-[20px] pb-[25px] bg-white">
          {navItems.map((item) => {
            const isActive = pathname === item.href; // check current route

            return (
              <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${isActive ? "bg-green-500 text-white" : "text-gray-500 hover:bg-gray-100"}`}>
                <item.icon className="h-5 w-5 ml-3" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

      </aside>
    </div>
  )
}

export default SideBar