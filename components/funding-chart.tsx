"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

interface ChartData {
  name: string
  value: number
}

interface FundingChartProps {
  data: ChartData[]
}

export function FundingChart({ data }: FundingChartProps) {
  const [chartData, setChartData] = useState<ChartData[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    // Animate data loading
    const timer = setTimeout(() => {
      setChartData(data)
    }, 500)

    return () => clearTimeout(timer)
  }, [data])

  const COLORS = ["#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899", "#6366F1", "#14B8A6"]

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/80 border border-white/10 rounded-lg p-3 shadow-lg">
          <p className="font-medium text-white">{payload[0].name}</p>
          <p className="text-blue-400 font-medium">{payload[0].value.toFixed(1)} ETH</p>
          <p className="text-gray-400 text-xs">
            {((payload[0].value / data.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}% of total
          </p>
        </div>
      )
    }

    return null
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
          animationDuration={1000}
          animationBegin={200}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="transparent"
              className="transition-all duration-300"
              style={{
                filter: activeIndex === index ? "brightness(1.2) drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))" : "none",
                transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
                transformOrigin: "center",
              }}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          wrapperStyle={{
            paddingLeft: "20px",
          }}
          formatter={(value: string) => <span className="text-sm text-gray-300">{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
