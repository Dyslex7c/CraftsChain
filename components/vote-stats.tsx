"use client"

import { useState, useEffect } from "react"
import { ArrowUp, ArrowDown, Users } from "lucide-react"

interface VoteStatsProps {
  className?: string
}

export function VoteStats({ className }: VoteStatsProps) {
  const [activeProposals, setActiveProposals] = useState(0)
  const [approvalRate, setApprovalRate] = useState(0)
  const [participation, setParticipation] = useState(0)
  const [totalVotes, setTotalVotes] = useState(0)

  useEffect(() => {
    // Simulate loading data with animation
    const targetActiveProposals = 12
    const targetApprovalRate = 68.7
    const targetParticipation = 42.3
    const targetTotalVotes = 3784

    const duration = 2000
    const steps = 50
    const interval = duration / steps

    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setActiveProposals(Math.round(targetActiveProposals * progress))
      setApprovalRate(Number((targetApprovalRate * progress).toFixed(1)))
      setParticipation(Number((targetParticipation * progress).toFixed(1)))
      setTotalVotes(Math.round(targetTotalVotes * progress))

      if (step >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      title: "Active Proposals",
      value: activeProposals,
      unit: "",
      color: "from-blue-600 to-blue-400",
      background: "bg-blue-500/20",
      icon: Users,
    },
    {
      title: "Approval Rate",
      value: approvalRate,
      unit: "%",
      color: "from-green-600 to-green-400",
      background: "bg-green-500/20",
      icon: ArrowUp,
    },
    {
      title: "Participation Rate",
      value: participation,
      unit: "%",
      color: "from-purple-600 to-purple-400",
      background: "bg-purple-500/20",
      icon: Users,
    },
    {
      title: "Total Votes Cast",
      value: totalVotes,
      unit: "",
      color: "from-red-600 to-red-400",
      background: "bg-red-500/20",
      icon: ArrowDown,
    },
  ]

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="glass-card rounded-xl p-4 border border-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <h3 className={`text-2xl font-bold mt-1 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                {stat.value.toLocaleString()}
                {stat.unit}
              </h3>
            </div>
            <div className={`p-2 rounded-lg ${stat.background}`}>
              <stat.icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
