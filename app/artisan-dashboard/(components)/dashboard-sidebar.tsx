"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Home,
  Package,
  ShoppingBag,
  Users,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  X,
  Palette,
  Award,
  Vote,
  MessageCircle,
} from "lucide-react"

export default function DashboardSidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/artisan-dashboard" },
    { icon: Palette, label: "My Crafts", href: "/artisan-dashboard/crafts" },
    { icon: Package, label: "Orders", href: "/artisan-dashboard/orders" },
    { icon: ShoppingBag, label: "Marketplace", href: "/marketplace" },
    { icon: Award, label: "Eco Tokens", href: "/artisan-dashboard/eco-tokens" },
    { icon: Vote, label: "DAO Governance", href: "/artisan-dashboard/dao" },
    { icon: MessageCircle, label: "Messages", href: "/artisan-dashboard/messages" },
    { icon: BarChart2, label: "Analytics", href: "/artisan-dashboard/analytics" },
    { icon: Users, label: "Community", href: "/artisan-dashboard/community" },
  ]

  const bottomMenuItems = [
    { icon: Settings, label: "Settings", href: "/artisan-dashboard/settings" },
    { icon: HelpCircle, label: "Help & Support", href: "/artisan-dashboard/support" },
    { icon: LogOut, label: "Logout", href: "/logout" },
  ]

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: isOpen ? 0 : -100 }}
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 shadow-lg lg:shadow-none transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold">CraftsChain</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">RS</span>
            </div>
            <div>
              <h3 className="font-medium text-black">Rupa Sutradhar</h3>
              <div className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs text-gray-500">Verified Artisan</span>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.icon className="h-5 w-5 text-gray-500" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <nav className="space-y-1">
            {bottomMenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.icon className="h-5 w-5 text-gray-500" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.aside>
    </>
  )
}
