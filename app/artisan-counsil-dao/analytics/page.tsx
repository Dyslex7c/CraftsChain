"use client"

import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { VotingTrendChart } from "@/components/voting-trend-chart"
import { FundingChart } from "@/components/funding-chart"
import { VoteStats } from "@/components/vote-stats"
import { Button } from "@/components/ui/button"
import { Calendar, Download } from "lucide-react"
import { useState } from "react"

// Mock data for the funding chart
const fundingCategoryData = [
  { name: "Education", value: 12.5 },
  { name: "Infrastructure", value: 8.7 },
  { name: "Marketing", value: 5.2 },
  { name: "Research", value: 6.8 },
  { name: "Events", value: 4.5 },
  { name: "Documentation", value: 3.2 },
]

// Mock data for proposals by status
const proposalStatusData = [
  { name: "Approved", value: 32 },
  { name: "Rejected", value: 14 },
  { name: "Pending", value: 8 },
  { name: "Draft", value: 5 },
]

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<"month" | "quarter" | "year">("quarter")

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <ScrollReveal>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">
              Governance Analytics
            </h1>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <p className="text-lg text-gray-300 max-w-3xl">
                Comprehensive analysis of Artisan Council governance activities, voting patterns, and treasury
                allocations.
              </p>

              <div className="flex gap-2">
                <div className="flex bg-black/40 border border-white/10 rounded-lg overflow-hidden">
                  {(["month", "quarter", "year"] as const).map((period) => (
                    <Button
                      key={period}
                      variant="ghost"
                      className={`rounded-none ${
                        dateRange === period
                          ? "bg-blue-500/20 text-blue-300"
                          : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-200"
                      }`}
                      onClick={() => setDateRange(period)}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </Button>
                  ))}
                </div>

                <Button variant="outline" className="border-white/10 bg-black/40">
                  <Calendar className="h-4 w-4 mr-2" />
                  Custom
                </Button>

                <Button variant="outline" className="border-white/10 bg-black/40">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <VoteStats className="mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-3 glass-card rounded-xl border border-white/10 p-6">
              <VotingTrendChart />
            </div>

            <div className="lg:col-span-2 glass-card rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-serif mb-6">Funding Allocation</h2>
              <div style={{ height: 300 }}>
                <FundingChart data={fundingCategoryData} />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-serif mb-6">Top Voters</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-red-600 to-blue-600 p-[2px]">
                        <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                          <span className="text-white font-serif text-lg">{String.fromCharCode(64 + index)}</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">
                          0x{Math.random().toString(16).substring(2, 8)}...{Math.random().toString(16).substring(2, 6)}
                        </p>
                        <p className="text-sm text-gray-400">{Math.floor(Math.random() * 100) + 50} proposals voted</p>
                      </div>
                    </div>
                    <div className="text-blue-400 font-medium">{Math.floor(Math.random() * 5000) + 1000} votes</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-serif mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((index) => {
                  const activities = [
                    "created a new proposal",
                    "voted on proposal",
                    "commented on proposal",
                    "submitted funding request",
                    "approved funding request",
                  ]
                  const activity = activities[Math.floor(Math.random() * activities.length)]
                  const daysAgo = Math.floor(Math.random() * 5) + 1

                  return (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-white/10 last:border-0">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-red-600 to-blue-600 p-[2px] mt-1">
                        <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                          <span className="text-white font-serif text-lg">{String.fromCharCode(70 + index)}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">
                            0x{Math.random().toString(16).substring(2, 8)}...
                            {Math.random().toString(16).substring(2, 6)}
                          </span>{" "}
                          {activity} <span className="text-blue-400">#{Math.floor(Math.random() * 100) + 1}</span>
                        </p>
                        <p className="text-xs text-gray-400">
                          {daysAgo} day{daysAgo !== 1 ? "s" : ""} ago
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-serif mb-6">Most Discussed Proposals</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">
                        {
                          [
                            "Artisan Marketplace Expansion",
                            "Traditional Craft Documentation",
                            "Educational Workshop Series",
                            "Community Treasury Allocation",
                            "Sustainable Materials Initiative",
                          ][index - 1]
                        }
                      </p>
                      <p className="text-sm text-gray-400">Proposal #{Math.floor(Math.random() * 100) + 1}</p>
                    </div>
                    <div className="text-blue-400 font-medium">{Math.floor(Math.random() * 50) + 20} comments</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-serif mb-6">Treasury Growth</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Current Treasury Value</span>
                    <span className="text-green-400 font-medium">+15.3% this {dateRange}</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-4 mb-1">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>156.8 ETH</span>
                    <span>Target: 200 ETH</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Contributions</span>
                    <span className="text-green-400 font-medium">+8.7% this {dateRange}</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-4 mb-1">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
                      style={{ width: "62%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>12.4 ETH</span>
                    <span>Target: 20 ETH</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Funding Utilization</span>
                    <span className="text-blue-400 font-medium">73.5% efficiency</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-4 mb-1">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full"
                      style={{ width: "73.5%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>42.8 ETH utilized</span>
                    <span>58.2 ETH allocated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  )
}
