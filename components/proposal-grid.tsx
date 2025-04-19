"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThumbsUp, ThumbsDown, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ProposalStatus = "active" | "passed" | "rejected" | "pending"

interface Proposal {
  id: number
  title: string
  description: string
  status: ProposalStatus
  votes: {
    for: number
    against: number
  }
  timeLeft: string
  author: string
}

const mockProposals: Proposal[] = [
  {
    id: 1,
    title: "Expand Artisan Marketplace to International Markets",
    description:
      "Proposal to allocate funds for expanding our marketplace to reach international buyers and increase global visibility for Bengali crafts.",
    status: "active",
    votes: {
      for: 782,
      against: 134,
    },
    timeLeft: "2 days",
    author: "0x1a2b...3c4d",
  },
  {
    id: 2,
    title: "Fund Apprenticeship Program for Traditional Weaving",
    description:
      "Create a 6-month apprenticeship program to preserve traditional Bengali weaving techniques by pairing master artisans with young apprentices.",
    status: "active",
    votes: {
      for: 1205,
      against: 47,
    },
    timeLeft: "5 days",
    author: "0x5e6f...7g8h",
  },
  {
    id: 3,
    title: "Develop Sustainable Materials Initiative",
    description:
      "Research and develop sustainable alternatives to traditional materials while maintaining authentic craft techniques.",
    status: "pending",
    votes: {
      for: 0,
      against: 0,
    },
    timeLeft: "Starts in 3 days",
    author: "0x9i0j...1k2l",
  },
  {
    id: 4,
    title: "Artisan Documentation Project",
    description:
      "Fund a comprehensive documentation of traditional craft techniques through video and written guides to preserve cultural heritage.",
    status: "passed",
    votes: {
      for: 1567,
      against: 329,
    },
    timeLeft: "Ended",
    author: "0x3m4n...5o6p",
  },
  {
    id: 5,
    title: "Reduce Platform Fees for New Artisans",
    description:
      "Proposal to reduce platform fees for first-time artisans joining the marketplace to encourage broader participation.",
    status: "rejected",
    votes: {
      for: 423,
      against: 891,
    },
    timeLeft: "Ended",
    author: "0x7q8r...9s0t",
  },
  {
    id: 6,
    title: "Community Workshop Series",
    description:
      "Organize monthly workshops in different regions to teach traditional craft techniques to the wider community.",
    status: "active",
    votes: {
      for: 672,
      against: 215,
    },
    timeLeft: "1 day",
    author: "0x1u2v...3w4x",
  },
]

const statusColors = {
  active: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  passed: "bg-green-500/20 text-green-300 border-green-500/30",
  rejected: "bg-red-500/20 text-red-300 border-red-500/30",
  pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
}

interface ProposalGridProps {
  limit?: number
}

export function ProposalGrid({ limit }: ProposalGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProposalStatus | "all">("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filters: Array<{ label: string; value: ProposalStatus | "all" }> = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Passed", value: "passed" },
    { label: "Rejected", value: "rejected" },
    { label: "Pending", value: "pending" },
  ]

  const filteredProposals = mockProposals
    .filter((proposal) => activeFilter === "all" || proposal.status === activeFilter)
    .slice(0, limit || mockProposals.length)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant="outline"
            size="sm"
            className={`rounded-full border ${
              activeFilter === filter.value
                ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                : "bg-transparent text-gray-400 border-gray-700 hover:bg-blue-500/10 hover:text-blue-200 hover:border-blue-500/20"
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProposals.map((proposal) => (
          <motion.div
            key={proposal.id}
            className="glass-card rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{
              y: -5,
              rotateY: 5,
              z: 10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            onHoverStart={() => setHoveredId(proposal.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <div className="border-b border-white/10 p-4 flex justify-between items-center">
              <Badge className={`${statusColors[proposal.status]}`}>
                {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
              </Badge>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="h-3 w-3" />
                {proposal.timeLeft}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{proposal.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{proposal.description}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-400">
                  By: <span className="text-gray-300">{proposal.author}</span>
                </div>
              </div>

              <div className="flex justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4 text-green-400" />
                  <span>{proposal.votes.for}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsDown className="h-4 w-4 text-red-400" />
                  <span>{proposal.votes.against}</span>
                </div>
              </div>

              <Link
                href={`/proposals/${proposal.id}`}
                className="block w-full text-center py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 transition-all duration-300"
              >
                View Proposal
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
