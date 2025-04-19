"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, Users, Wallet, BookOpen, Menu, X, Bell, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { name: "Home", path: "/", icon: Home },
    { name: "Proposals", path: "/proposals", icon: FileText },
    { name: "Members", path: "/members", icon: Users },
    { name: "Funding", path: "/funding", icon: Wallet },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Rules", path: "/rules", icon: BookOpen },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-red-600 to-blue-600 p-[2px]">
              <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                <span className="text-white font-serif text-lg">A</span>
              </div>
            </div>
            <span className="hidden font-serif text-xl font-bold md:inline-block">Artisan Council</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => {
            const isActive = pathname === route.path
            return (
              <Link
                key={route.path}
                href={route.path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <route.icon className="h-4 w-4" />
                {route.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">
              3
            </Badge>
          </Button>

          <Button
            variant="outline"
            className="hidden sm:flex border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
          >
            Connect Wallet
          </Button>

          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-blue-900/50">AC</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-black/95 md:hidden">
          <nav className="container flex flex-col gap-4 p-4">
            {routes.map((route) => {
              const isActive = pathname === route.path
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-lg p-3 text-lg font-medium transition-colors ${
                    isActive ? "bg-blue-900/20 text-white" : "text-gray-400 hover:bg-blue-900/10 hover:text-white"
                  }`}
                >
                  <route.icon className="h-5 w-5" />
                  {route.name}
                </Link>
              )
            })}
            <div className="mt-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Connect Wallet</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
