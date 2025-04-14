"use client"

import { motion } from "framer-motion"
import { Award, Package, Coins, Vote } from "lucide-react"

export default function WelcomeSection() {
  const stats = [
    { icon: Package, label: "NFTs Minted", value: "12" },
    { icon: Coins, label: "Eco Tokens", value: "125" },
    { icon: Vote, label: "DAO Votes", value: "6" },
    { icon: Award, label: "Reputation", value: "4.8/5" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="bg-gradient-to-r from-cyan-500 to-red-600 rounded-xl overflow-hidden">
        <div className="relative p-6 sm:p-8">
          {/* Traditional pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

          <div className="relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Namaste, Rupa Sutradhar 👋</h1>
                <p className="text-white/80 text-sm sm:text-base">Your Craft, Your Legacy, On-Chain.</p>
              </div>

              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="h-3 w-3 bg-green-400 rounded-full"></span>
                <span className="text-white text-sm font-medium">Verified Artisan</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm">{stat.label}</p>
                      <p className="text-white font-bold text-xl">{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
