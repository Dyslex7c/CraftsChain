"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, User, ThumbsUp, ThumbsDown, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ProposalDetailPage() {
  const { id } = useParams()
  const [voteState, setVoteState] = useState<"for" | "against" | null>(null)
  const [showRipple, setShowRipple] = useState(false)
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 })

  // Mock proposal data
  const proposal = {
    id: Number(id),
    title: "Expand Artisan Marketplace to International Markets",
    description:
      "This proposal aims to allocate funds for expanding our marketplace to reach international buyers and increase global visibility for Bengali crafts. By establishing partnerships with international art platforms and e-commerce sites, we can create new channels for our artisans to sell their work globally.",
    status: "active" as const,
    votes: {
      for: 782,
      against: 134,
    },
    timeLeft: "2 days",
    author: "0x1a2b...3c4d",
    createdAt: "2023-04-15",
    details: `
## Background

The ArtisanChain marketplace has successfully connected local artisans with buyers across India. However, our analytics show growing interest from international markets, particularly in North America, Europe, and Japan.

## Proposal

This proposal seeks to allocate 25 ETH from the community treasury to fund the following initiatives:

1. **International Payment Integration** - Add support for international payment methods and currencies
2. **Logistics Partnerships** - Establish relationships with international shipping providers
3. **Marketing Campaign** - Create targeted marketing materials for international audiences
4. **Translation Services** - Translate the marketplace interface into 5 additional languages
5. **Legal Compliance** - Ensure compliance with international trade regulations

## Expected Outcomes

- 40% increase in international sales within 6 months
- 30% increase in average order value
- Onboarding of 100+ new artisans specializing in export-quality crafts
- Establishment of ArtisanChain as a global brand for authentic Bengali crafts

## Timeline

- **Month 1-2**: Research and planning
- **Month 3-4**: Implementation of technical infrastructure
- **Month 5-6**: Marketing campaign and international launch

## Budget Breakdown

- International Payment Integration: 5 ETH
- Logistics Partnerships: 3 ETH
- Marketing Campaign: 10 ETH
- Translation Services: 2 ETH
- Legal Compliance: 5 ETH

## Conclusion

This expansion represents a significant opportunity for our artisan community to reach new markets and increase their income. The investment will be recovered through increased platform fees from the projected growth in sales volume.
    `,
    comments: [
      {
        author: "0x5e6f...7g8h",
        content:
          "I fully support this initiative. My handloom products have already received interest from buyers in Europe, but shipping and payment have been major obstacles.",
        timestamp: "2 days ago",
      },
      {
        author: "0x9i0j...1k2l",
        content:
          "The budget allocation for marketing seems high. Could we reallocate some of those funds to improve the logistics partnerships instead?",
        timestamp: "1 day ago",
      },
      {
        author: "0x3m4n...5o6p",
        content:
          "Have we considered the potential impact on production capacity? If international demand surges, many artisans might struggle to keep up.",
        timestamp: "12 hours ago",
      },
    ],
  }

  const handleVote = (vote: "for" | "against", e: React.MouseEvent) => {
    // Get position for ripple effect
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setRipplePosition({ x, y })
    setShowRipple(true)
    setVoteState(vote)

    // Reset ripple after animation
    setTimeout(() => {
      setShowRipple(false)
    }, 1000)
  }

  const statusColors = {
    active: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    passed: "bg-green-500/20 text-green-300 border-green-500/30",
    rejected: "bg-red-500/20 text-red-300 border-red-500/30",
    pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <ScrollReveal>
          <Link
            href="/proposals"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Proposals
          </Link>

          <div className="glass-card rounded-xl border border-white/10 overflow-hidden">
            <div className="border-b border-white/10 p-6">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <Badge className={`${statusColors[proposal.status]}`}>
                  {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                </Badge>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    {proposal.createdAt}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User className="h-4 w-4" />
                    {proposal.author}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    {proposal.timeLeft}
                  </div>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-4">{proposal.title}</h1>

              <p className="text-gray-300">{proposal.description}</p>
            </div>

            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: proposal.details.replace(/\n/g, "<br>") }} />
              </div>
            </div>

            <div className="border-t border-white/10 p-6">
              <h2 className="text-xl font-serif mb-4">Cast Your Vote</h2>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className={`relative flex-1 py-3 px-6 rounded-lg flex items-center justify-center gap-2 overflow-hidden ${
                    voteState === "for"
                      ? "bg-green-500 text-white"
                      : "bg-green-500/20 text-green-300 border border-green-500/30 hover:bg-green-500/30"
                  } transition-colors duration-300`}
                  onClick={(e) => handleVote("for", e)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ThumbsUp className="h-5 w-5" />
                  <span>Vote For ({proposal.votes.for})</span>
                  {showRipple && voteState === "for" && (
                    <span
                      className="absolute rounded-full bg-white/30 animate-ripple"
                      style={{
                        left: ripplePosition.x,
                        top: ripplePosition.y,
                        width: "10px",
                        height: "10px",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  )}
                </motion.button>

                <motion.button
                  className={`relative flex-1 py-3 px-6 rounded-lg flex items-center justify-center gap-2 overflow-hidden ${
                    voteState === "against"
                      ? "bg-red-500 text-white"
                      : "bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30"
                  } transition-colors duration-300`}
                  onClick={(e) => handleVote("against", e)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ThumbsDown className="h-5 w-5" />
                  <span>Vote Against ({proposal.votes.against})</span>
                  {showRipple && voteState === "against" && (
                    <span
                      className="absolute rounded-full bg-white/30 animate-ripple"
                      style={{
                        left: ripplePosition.x,
                        top: ripplePosition.y,
                        width: "10px",
                        height: "10px",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  )}
                </motion.button>
              </div>

              <div className="w-full bg-gray-800/50 rounded-full h-4 mb-6">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full"
                  style={{
                    width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100}%`,
                  }}
                />
              </div>

              <div className="flex justify-between text-sm text-gray-400 mb-8">
                <div>
                  {((proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100).toFixed(1)}% For
                </div>
                <div>
                  {((proposal.votes.against / (proposal.votes.for + proposal.votes.against)) * 100).toFixed(1)}% Against
                </div>
              </div>

              <h2 className="text-xl font-serif mb-4">Discussion</h2>

              <div className="space-y-4 mb-6">
                {proposal.comments.map((comment, index) => (
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">{comment.author}</div>
                      <div className="text-sm text-gray-400">{comment.timestamp}</div>
                    </div>
                    <p className="text-gray-300">{comment.content}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30">
                  Add Comment
                </Button>
                <Button variant="outline" className="border-white/20 text-gray-300 hover:bg-white/5">
                  Share Proposal
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  )
}
