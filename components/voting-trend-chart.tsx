"use client"

import { useState, useEffect } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Button } from "@/components/ui/button"

type TimeFrame = "week" | "month" | "quarter" | "year"

interface VotingTrendChartProps {
  className?: string
}

export function VotingTrendChart({ className }: VotingTrendChartProps) {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("month")
  const [chartData, setChartData] = useState<any[]>([])

  // Generate mock data based on selected time frame
  useEffect(() => {
    const generateData = () => {
      const data = []

      if (timeFrame === "week") {
        // Last 7 days
        for (let i = 6; i >= 0; i--) {
          const date = new Date()
          date.setDate(date.getDate() - i)
          const formattedDate = date.toLocaleDateString("en-US", { weekday: "short" })

          data.push({
            date: formattedDate,
            votesFor: Math.floor(Math.random() * 300) + 200,
            votesAgainst: Math.floor(Math.random() * 150) + 50,
            participation: Math.floor(Math.random() * 40) + 35,
          })
        }
      } else if (timeFrame === "month") {
        // Last 4 weeks
        for (let i = 3; i >= 0; i--) {
          const weekNumber = 4 - i
          data.push({
            date: `Week ${weekNumber}`,
            votesFor: Math.floor(Math.random() * 1200) + 800,
            votesAgainst: Math.floor(Math.random() * 600) + 300,
            participation: Math.floor(Math.random() * 30) + 40,
          })
        }
      } else if (timeFrame === "quarter") {
        // Last 3 months
        const currentMonth = new Date().getMonth()
        for (let i = 2; i >= 0; i--) {
          const month = new Date()
          month.setMonth(currentMonth - i)
          const formattedMonth = month.toLocaleDateString("en-US", { month: "short" })

          data.push({
            date: formattedMonth,
            votesFor: Math.floor(Math.random() * 4000) + 2000,
            votesAgainst: Math.floor(Math.random() * 2000) + 1000,
            participation: Math.floor(Math.random() * 20) + 45,
          })
        }
      } else if (timeFrame === "year") {
        // Last 4 quarters
        for (let i = 3; i >= 0; i--) {
          const quarterNumber = 4 - i
          data.push({
            date: `Q${quarterNumber}`,
            votesFor: Math.floor(Math.random() * 15000) + 8000,
            votesAgainst: Math.floor(Math.random() * 7500) + 3000,
            participation: Math.floor(Math.random() * 15) + 50,
          })
        }
      }

      return data
    }

    // Animate data loading
    setChartData([])
    const timer = setTimeout(() => {
      setChartData(generateData())
    }, 500)

    return () => clearTimeout(timer)
  }, [timeFrame])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const totalVotes = payload[0].value + payload[1].value
      const approvalRate = ((payload[0].value / totalVotes) * 100).toFixed(1)

      return (
        <div className="bg-black/80 border border-white/10 rounded-lg p-3 shadow-lg">
          <p className="font-medium text-white mb-1">{label}</p>
          <p className="text-green-400 text-sm">
            Votes For: <span className="font-medium">{payload[0].value.toLocaleString()}</span>
          </p>
          <p className="text-red-400 text-sm">
            Votes Against: <span className="font-medium">{payload[1].value.toLocaleString()}</span>
          </p>
          <p className="text-blue-400 text-sm">
            Participation: <span className="font-medium">{payload[2].value}%</span>
          </p>
          <div className="h-px w-full bg-white/20 my-2"></div>
          <p className="text-gray-300 text-sm">
            Approval Rate: <span className="font-medium">{approvalRate}%</span>
          </p>
        </div>
      )
    }

    return null
  }

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-serif">Voting Trends</h2>
        <div className="flex space-x-2">
          {(["week", "month", "quarter", "year"] as const).map((period) => (
            <Button
              key={period}
              variant="outline"
              size="sm"
              className={`${
                timeFrame === period
                  ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                  : "bg-transparent text-gray-400 border-gray-700 hover:bg-blue-500/10 hover:text-blue-200"
              }`}
              onClick={() => setTimeFrame(period)}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorVotesFor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorVotesAgainst" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorParticipation" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" tick={{ fill: "rgba(255,255,255,0.5)" }} />
            <YAxis stroke="rgba(255,255,255,0.5)" tick={{ fill: "rgba(255,255,255,0.5)" }} yAxisId="left" />
            <YAxis
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: "rgba(255,255,255,0.5)" }}
              yAxisId="right"
              orientation="right"
              domain={[0, 100]}
              unit="%"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: "10px" }}
              formatter={(value) => <span className="text-sm text-gray-300">{value}</span>}
            />
            <Area
              type="monotone"
              dataKey="votesFor"
              name="Votes For"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#colorVotesFor)"
              strokeWidth={2}
              yAxisId="left"
              animationDuration={1000}
            />
            <Area
              type="monotone"
              dataKey="votesAgainst"
              name="Votes Against"
              stroke="#EF4444"
              fillOpacity={1}
              fill="url(#colorVotesAgainst)"
              strokeWidth={2}
              yAxisId="left"
              animationDuration={1000}
            />
            <Area
              type="monotone"
              dataKey="participation"
              name="Participation Rate"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#colorParticipation)"
              strokeWidth={2}
              yAxisId="right"
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        {timeFrame === "week"
          ? "Daily voting data for the past week"
          : timeFrame === "month"
            ? "Weekly voting data for the past month"
            : timeFrame === "quarter"
              ? "Monthly voting data for the past quarter"
              : "Quarterly voting data for the past year"}
      </div>
    </div>
  )
}
