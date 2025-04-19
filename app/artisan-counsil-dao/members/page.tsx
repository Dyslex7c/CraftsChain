"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Member {
  id: number
  name: string
  address: string
  avatar: string
  craft: string
  joined: string
  proposals: number
  votes: number
}

const mockMembers: Member[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Artisan ${i + 1}`,
  address: `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`,
  avatar: `/placeholder.svg?height=80&width=80`,
  craft: ["Weaving", "Pottery", "Terracotta", "Embroidery", "Woodwork", "Metalwork"][Math.floor(Math.random() * 6)],
  joined: `${Math.floor(Math.random() * 12) + 1} months ago`,
  proposals: Math.floor(Math.random() * 10),
  votes: Math.floor(Math.random() * 100),
}))

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [craftFilter, setCraftFilter] = useState<string | null>(null)

  const craftTypes = ["All", "Weaving", "Pottery", "Terracotta", "Embroidery", "Woodwork", "Metalwork"]

  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCraft = !craftFilter || craftFilter === "All" || member.craft === craftFilter

    return matchesSearch && matchesCraft
  })

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <ScrollReveal>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">
              Council Members
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Browse the artisans who make up our decentralized governance community. Each member has voting rights
              proportional to their contribution.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name or address"
                className="pl-10 bg-black/40 border-white/10 focus:border-blue-500/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {craftTypes.map((craft) => (
                <Button
                  key={craft}
                  variant="outline"
                  size="sm"
                  className={`rounded-full whitespace-nowrap ${
                    craftFilter === craft || (craft === "All" && !craftFilter)
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                      : "bg-transparent text-gray-400 border-gray-700 hover:bg-blue-500/10 hover:text-blue-200"
                  }`}
                  onClick={() => setCraftFilter(craft === "All" ? null : craft)}
                >
                  {craft}
                </Button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="glass-card rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                }}
              >
                <div className="p-6 text-center">
                  <div className="relative mx-auto w-20 h-20 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 to-blue-600 p-[2px]">
                      <div className="h-full w-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{member.address}</p>

                  <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-4">{member.craft}</Badge>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-black/40 rounded-lg p-2">
                      <div className="text-lg font-medium">{member.proposals}</div>
                      <div className="text-xs text-gray-400">Proposals</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-2">
                      <div className="text-lg font-medium">{member.votes}</div>
                      <div className="text-xs text-gray-400">Votes</div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 px-6 py-3 text-center text-sm text-gray-400">Joined {member.joined}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </div>
  )
}
