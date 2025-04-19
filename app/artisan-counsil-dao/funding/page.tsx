"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Filter, ArrowUpDown, Coins, Calendar, User, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FundingChart } from "@/components/funding-chart"

type FundingStatus = "pending" | "approved" | "rejected" | "completed"

interface FundingRequest {
  id: number
  title: string
  description: string
  status: FundingStatus
  amount: number
  timeLeft: string
  author: string
  category: string
  beneficiaries: number
  createdAt: string
}

const mockFundingRequests: FundingRequest[] = [
  {
    id: 1,
    title: "Terracotta Workshop Funding",
    description: "Funding request for organizing a 2-week terracotta crafting workshop in Kolkata.",
    status: "pending",
    amount: 2.5,
    timeLeft: "3 days",
    author: "0x1a2b...3c4d",
    category: "Education",
    beneficiaries: 25,
    createdAt: "2023-04-10",
  },
  {
    id: 2,
    title: "Sustainable Materials Research",
    description: "Research project to develop eco-friendly alternatives to traditional craft materials.",
    status: "approved",
    amount: 5.8,
    timeLeft: "In progress",
    author: "0x5e6f...7g8h",
    category: "Research",
    beneficiaries: 12,
    createdAt: "2023-03-22",
  },
  {
    id: 3,
    title: "Artisan Marketplace Expansion",
    description: "Funding to expand the digital marketplace to international markets.",
    status: "completed",
    amount: 12.4,
    timeLeft: "Completed",
    author: "0x9i0j...1k2l",
    category: "Infrastructure",
    beneficiaries: 150,
    createdAt: "2023-02-15",
  },
  {
    id: 4,
    title: "Traditional Weaving Equipment",
    description: "Purchase of traditional looms and equipment for community center.",
    status: "approved",
    amount: 3.2,
    timeLeft: "In progress",
    author: "0x3m4n...5o6p",
    category: "Equipment",
    beneficiaries: 35,
    createdAt: "2023-03-05",
  },
  {
    id: 5,
    title: "Craft Documentation Project",
    description: "Video documentation of traditional craft techniques to preserve cultural heritage.",
    status: "rejected",
    amount: 4.7,
    timeLeft: "Rejected",
    author: "0x7q8r...9s0t",
    category: "Documentation",
    beneficiaries: 8,
    createdAt: "2023-03-18",
  },
  {
    id: 6,
    title: "Youth Apprenticeship Program",
    description: "Program to pair master artisans with young apprentices for knowledge transfer.",
    status: "pending",
    amount: 7.5,
    timeLeft: "5 days",
    author: "0x1u2v...3w4x",
    category: "Education",
    beneficiaries: 40,
    createdAt: "2023-04-05",
  },
  {
    id: 7,
    title: "Craft Exhibition in Delhi",
    description: "Organizing a major exhibition to showcase Bengali crafts in the capital.",
    status: "approved",
    amount: 8.3,
    timeLeft: "In progress",
    author: "0x5y6z...7a8b",
    category: "Marketing",
    beneficiaries: 75,
    createdAt: "2023-03-12",
  },
  {
    id: 8,
    title: "Online Craft Courses",
    description: "Development of digital courses teaching traditional craft techniques.",
    status: "pending",
    amount: 6.1,
    timeLeft: "2 days",
    author: "0x9c0d...1e2f",
    category: "Education",
    beneficiaries: 120,
    createdAt: "2023-04-08",
  },
]

const statusColors: Record<FundingStatus, string> = {
  pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  approved: "bg-green-500/20 text-green-300 border-green-500/30",
  rejected: "bg-red-500/20 text-red-300 border-red-500/30",
  completed: "bg-blue-500/20 text-blue-300 border-blue-500/30",
}

export default function FundingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<FundingStatus | "all">("all")
  const [sortBy, setSortBy] = useState<"date" | "amount">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const toggleSort = (field: "date" | "amount") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  const filteredRequests = mockFundingRequests
    .filter((request) => {
      const matchesSearch =
        request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || request.status === statusFilter

      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      } else {
        return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
      }
    })

  // Calculate total funding stats
  const totalRequested = mockFundingRequests.reduce((sum, request) => sum + request.amount, 0)
  const totalApproved = mockFundingRequests
    .filter((request) => request.status === "approved" || request.status === "completed")
    .reduce((sum, request) => sum + request.amount, 0)
  const totalPending = mockFundingRequests
    .filter((request) => request.status === "pending")
    .reduce((sum, request) => sum + request.amount, 0)
  const totalBeneficiaries = mockFundingRequests.reduce((sum, request) => sum + request.beneficiaries, 0)

  // Group by category for the chart
  const categoryData = mockFundingRequests.reduce(
    (acc, request) => {
      if (!acc[request.category]) {
        acc[request.category] = 0
      }
      acc[request.category] += request.amount
      return acc
    },
    {} as Record<string, number>,
  )

  const chartData = Object.entries(categoryData).map(([name, value]) => ({ name, value }))

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <ScrollReveal>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">
              Funding Requests
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Browse and track funding allocations from the DAO treasury. These funds support artisan initiatives,
              education, and infrastructure development.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-card rounded-xl p-6 border border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Requested</p>
                  <h3 className="text-3xl font-bold mt-1 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                    {totalRequested.toFixed(1)} ETH
                  </h3>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <Coins className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 border border-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Approved</p>
                  <h3 className="text-3xl font-bold mt-1 bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
                    {totalApproved.toFixed(1)} ETH
                  </h3>
                </div>
                <div className="p-3 rounded-lg bg-green-500/20">
                  <Coins className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 border border-yellow-500/30 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Pending Approval</p>
                  <h3 className="text-3xl font-bold mt-1 bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text">
                    {totalPending.toFixed(1)} ETH
                  </h3>
                </div>
                <div className="p-3 rounded-lg bg-yellow-500/20">
                  <Coins className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 border border-purple-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Beneficiaries</p>
                  <h3 className="text-3xl font-bold mt-1 bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
                    {totalBeneficiaries}
                  </h3>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <User className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <ScrollReveal delay={0.3} className="lg:col-span-2">
            <div className="glass-card rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-serif mb-6">Funding Allocation by Category</h2>
              <div className="h-[300px]">
                <FundingChart data={chartData} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="glass-card rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-serif mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {mockFundingRequests
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .slice(0, 5)
                  .map((request) => (
                    <div
                      key={request.id}
                      className="flex items-start gap-3 pb-4 border-b border-white/10 last:border-0"
                    >
                      <div
                        className={`w-2 h-2 mt-2 rounded-full ${
                          request.status === "approved" || request.status === "completed"
                            ? "bg-green-500"
                            : request.status === "pending"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{request.title}</p>
                        <p className="text-xs text-gray-400">
                          {request.status === "approved"
                            ? "Approved for funding"
                            : request.status === "completed"
                              ? "Funding completed"
                              : request.status === "pending"
                                ? "Awaiting approval"
                                : "Funding rejected"}
                        </p>
                      </div>
                      <div className="text-xs text-gray-400 whitespace-nowrap">
                        {new Date(request.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search funding requests..."
                className="pl-10 bg-black/40 border-white/10 focus:border-blue-500/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-black/40 border-white/10"
                onClick={() => toggleSort("date")}
              >
                <Calendar className="h-4 w-4 mr-1" />
                <ArrowUpDown className="h-3 w-3" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-black/40 border-white/10"
                onClick={() => toggleSort("amount")}
              >
                <Coins className="h-4 w-4 mr-1" />
                <ArrowUpDown className="h-3 w-3" />
              </Button>
              <Button variant="outline" className="bg-black/40 border-white/10">
                <Filter className="h-4 w-4 mr-2" />
                <span>Filter</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {(["all", "pending", "approved", "rejected", "completed"] as const).map((status) => (
              <Button
                key={status}
                variant="outline"
                size="sm"
                className={`rounded-full ${
                  statusFilter === status
                    ? status === "all"
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                      : statusColors[status as FundingStatus]
                    : "bg-transparent text-gray-400 border-gray-700 hover:bg-blue-500/10 hover:text-blue-200"
                }`}
                onClick={() => setStatusFilter(status)}
              >
                {status === "all" ? "All Requests" : status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((request, index) => (
              <motion.div
                key={request.id}
                className="glass-card rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                }}
              >
                <div className="border-b border-white/10 p-4 flex justify-between items-center">
                  <Badge className={statusColors[request.status]}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="h-3 w-3" />
                    {request.timeLeft}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{request.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{request.description}</p>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-400">
                      By: <span className="text-gray-300">{request.author}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Category: <span className="text-gray-300">{request.category}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xl font-medium text-blue-400">{request.amount} ETH</div>
                    <div className="text-sm text-gray-400">
                      <span className="text-gray-300">{request.beneficiaries}</span> beneficiaries
                    </div>
                  </div>

                  <Link
                    href={`/funding/${request.id}`}
                    className="flex items-center justify-center w-full py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 transition-all duration-300 group"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </div>
  )
}
