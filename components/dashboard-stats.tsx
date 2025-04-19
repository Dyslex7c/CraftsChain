"use client"

import { useEffect, useState } from "react"
import { Users, Vote, Coins } from "lucide-react"

export function DashboardStats() {
  const [animatedMembers, setAnimatedMembers] = useState(0)
  const [animatedVotes, setAnimatedVotes] = useState(0)
  const [animatedFunds, setAnimatedFunds] = useState(0)

  const targetMembers = 1247
  const targetVotes = 3892
  const targetFunds = 156.8

  useEffect(() => {
    const membersDuration = 2000
    const votesDuration = 2500
    const fundsDuration = 3000

    const membersInterval = membersDuration / targetMembers
    const votesInterval = votesDuration / targetVotes
    const fundsInterval = fundsDuration / (targetFunds * 10)

    const membersTimer = setInterval(() => {
      setAnimatedMembers((prev) => {
        if (prev < targetMembers) {
          return Math.min(prev + Math.ceil(targetMembers / 100), targetMembers)
        }
        clearInterval(membersTimer)
        return targetMembers
      })
    }, membersInterval)

    const votesTimer = setInterval(() => {
      setAnimatedVotes((prev) => {
        if (prev < targetVotes) {
          return Math.min(prev + Math.ceil(targetVotes / 100), targetVotes)
        }
        clearInterval(votesTimer)
        return targetVotes
      })
    }, votesInterval)

    const fundsTimer = setInterval(() => {
      setAnimatedFunds((prev) => {
        if (prev < targetFunds) {
          return Math.min(prev + 0.1, targetFunds)
        }
        clearInterval(fundsTimer)
        return targetFunds
      })
    }, fundsInterval)

    return () => {
      clearInterval(membersTimer)
      clearInterval(votesTimer)
      clearInterval(fundsTimer)
    }
  }, [])

  const stats = [
    {
      title: "Total Members",
      value: animatedMembers.toLocaleString(),
      icon: Users,
      color: "from-blue-600 to-blue-400",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
    },
    {
      title: "Total Votes",
      value: animatedVotes.toLocaleString(),
      icon: Vote,
      color: "from-red-600 to-red-400",
      borderColor: "border-red-500/30",
      iconBg: "bg-red-500/20",
    },
    {
      title: "Eco-Fund Balance",
      value: `${animatedFunds.toFixed(1)} ETH`,
      icon: Coins,
      color: "from-purple-600 to-purple-400",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className={`glass-card rounded-xl p-6 border ${stat.borderColor} hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <h3 className={`text-3xl font-bold mt-1 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                {stat.value}
              </h3>
            </div>
            <div className={`p-3 rounded-lg ${stat.iconBg}`}>
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
