"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Coins,
  Users,
  FileText,
  CheckCircle,
  XCircle,
  MessageSquare,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function FundingDetailPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState<"details" | "beneficiaries" | "timeline">("details")

  // Mock funding request data
  const request = {
    id: Number(id),
    title: "Terracotta Workshop Funding",
    description:
      "Funding request for organizing a 2-week terracotta crafting workshop in Kolkata to preserve traditional techniques and train new artisans.",
    status: "pending" as const,
    amount: 2.5,
    timeLeft: "3 days",
    author: "0x1a2b...3c4d",
    authorName: "Rajiv Sharma",
    category: "Education",
    beneficiaries: 25,
    createdAt: "2023-04-10",
    votesFor: 782,
    votesAgainst: 134,
    details: `
## Project Overview

This funding request aims to organize a comprehensive 2-week terracotta crafting workshop in Kolkata, focusing on preserving traditional Bengali terracotta techniques while training a new generation of artisans.

## Objectives

1. Document and preserve traditional terracotta crafting techniques
2. Train 25 new artisans in authentic methods
3. Create a sustainable model for knowledge transfer
4. Produce a collection of terracotta works for exhibition

## Budget Breakdown

- **Venue Rental**: 0.5 ETH
- **Master Artisan Compensation**: 0.8 ETH
- **Materials and Tools**: 0.6 ETH
- **Documentation (Video/Photography)**: 0.3 ETH
- **Participant Stipends**: 0.3 ETH

## Timeline

- **Week 1**: Introduction to clay preparation, basic molding techniques
- **Week 2**: Advanced sculpting, firing methods, finishing techniques
- **Post-Workshop**: Exhibition of created works, documentation sharing

## Expected Outcomes

- 25 trained artisans capable of producing authentic terracotta crafts
- Comprehensive documentation of traditional techniques
- Collection of 50+ terracotta pieces for exhibition
- Establishment of an ongoing mentorship program

## Long-term Impact

This workshop will help ensure the survival of traditional terracotta crafting techniques that have been practiced in Bengal for centuries. By training new artisans and documenting the processes, we create a sustainable model for preserving this cultural heritage.
    `,
    beneficiaries: [
      { id: 1, name: "Ananya Das", role: "Apprentice", location: "North Kolkata" },
      { id: 2, name: "Ravi Kumar", role: "Apprentice", location: "Howrah" },
      { id: 3, name: "Priya Singh", role: "Apprentice", location: "South Kolkata" },
      { id: 4, name: "Amit Roy", role: "Apprentice", location: "Salt Lake" },
      { id: 5, name: "Sunita Devi", role: "Master Artisan", location: "Kumartuli" },
    ],
    timeline: [
      { date: "2023-04-10", event: "Funding request submitted", status: "completed" },
      { date: "2023-04-12", event: "Initial review by council", status: "completed" },
      { date: "2023-04-15", event: "Community voting begins", status: "completed" },
      { date: "2023-04-18", event: "Community voting ends", status: "in-progress" },
      { date: "2023-04-20", event: "Final decision by council", status: "pending" },
      { date: "2023-04-25", event: "Fund disbursement (if approved)", status: "pending" },
      { date: "2023-05-01", event: "Workshop begins", status: "pending" },
      { date: "2023-05-15", event: "Workshop concludes", status: "pending" },
      { date: "2023-05-20", event: "Exhibition of works", status: "pending" },
      { date: "2023-05-25", event: "Final report submission", status: "pending" },
    ],
    comments: [
      {
        author: "0x5e6f...7g8h",
        authorName: "Meera Patel",
        content:
          "This is exactly the kind of initiative we need to preserve our traditional crafts. I fully support this proposal.",
        timestamp: "2 days ago",
      },
      {
        author: "0x9i0j...1k2l",
        authorName: "Vikram Singh",
        content:
          "Could you provide more details about how participants will be selected? Will there be any criteria to ensure diversity?",
        timestamp: "1 day ago",
      },
      {
        author: "0x1a2b...3c4d",
        authorName: "Rajiv Sharma",
        content:
          "Yes, we plan to select participants from diverse backgrounds, with a focus on including those from traditional artisan families as well as newcomers interested in learning the craft. We'll have a transparent application process.",
        timestamp: "12 hours ago",
      },
    ],
  }

  const statusColors = {
    pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    approved: "bg-green-500/20 text-green-300 border-green-500/30",
    rejected: "bg-red-500/20 text-red-300 border-red-500/30",
    completed: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <ScrollReveal>
          <Link
            href="/funding"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Funding Requests
          </Link>

          <div className="glass-card rounded-xl border border-white/10 overflow-hidden mb-8">
            <div className="border-b border-white/10 p-6">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <Badge className={statusColors[request.status]}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </Badge>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    {request.createdAt}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User className="h-4 w-4" />
                    {request.authorName} ({request.author})
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    {request.timeLeft}
                  </div>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-4">{request.title}</h1>

              <p className="text-gray-300">{request.description}</p>
            </div>

            <div className="p-6 border-b border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-card rounded-xl p-4 border border-blue-500/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Coins className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Requested Amount</p>
                      <p className="text-xl font-medium">{request.amount} ETH</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 border border-purple-500/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Users className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Beneficiaries</p>
                      <p className="text-xl font-medium">{request.beneficiaries}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Votes For</p>
                      <p className="text-xl font-medium">{request.votesFor}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 border border-red-500/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/20">
                      <XCircle className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Votes Against</p>
                      <p className="text-xl font-medium">{request.votesAgainst}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Voting Progress</span>
                  <span>
                    {Math.round((request.votesFor / (request.votesFor + request.votesAgainst)) * 100)}% Support
                  </span>
                </div>
                <Progress
                  value={(request.votesFor / (request.votesFor + request.votesAgainst)) * 100}
                  className="h-2 bg-gray-800"
                  indicatorClassName="bg-gradient-to-r from-blue-500 to-green-500"
                />
              </div>
            </div>

            <div className="border-b border-white/10">
              <div className="flex overflow-x-auto">
                <Button
                  variant="ghost"
                  className={`px-6 py-3 rounded-none ${
                    activeTab === "details" ? "border-b-2 border-blue-500 text-white" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("details")}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Details
                </Button>
                <Button
                  variant="ghost"
                  className={`px-6 py-3 rounded-none ${
                    activeTab === "beneficiaries" ? "border-b-2 border-blue-500 text-white" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("beneficiaries")}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Beneficiaries
                </Button>
                <Button
                  variant="ghost"
                  className={`px-6 py-3 rounded-none ${
                    activeTab === "timeline" ? "border-b-2 border-blue-500 text-white" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("timeline")}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Timeline
                </Button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === "details" && (
                <div className="prose prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: request.details.replace(/\n/g, "<br>") }} />
                </div>
              )}

              {activeTab === "beneficiaries" && (
                <div>
                  <h2 className="text-xl font-serif mb-4">Project Beneficiaries</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {request.beneficiaries.map((beneficiary) => (
                      <motion.div
                        key={beneficiary.id}
                        className="glass-card rounded-xl p-4 border border-white/10"
                        whileHover={{ y: -5, boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-red-600 to-blue-600 p-[2px]">
                            <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                              <span className="text-white font-serif text-lg">{beneficiary.name.charAt(0)}</span>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">{beneficiary.name}</p>
                            <p className="text-sm text-gray-400">
                              {beneficiary.role} • {beneficiary.location}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "timeline" && (
                <div>
                  <h2 className="text-xl font-serif mb-4">Project Timeline</h2>
                  <div className="relative">
                    {request.timeline.map((item, index) => (
                      <div key={index} className="mb-8 flex gap-4">
                        <div className="relative">
                          <div
                            className={`h-4 w-4 rounded-full ${
                              item.status === "completed"
                                ? "bg-green-500"
                                : item.status === "in-progress"
                                  ? "bg-blue-500"
                                  : "bg-gray-700"
                            }`}
                          />
                          {index < request.timeline.length - 1 && (
                            <div
                              className={`absolute top-4 left-1/2 h-full w-0.5 -translate-x-1/2 ${
                                item.status === "completed" ? "bg-green-500" : "bg-gray-700"
                              }`}
                            />
                          )}
                        </div>
                        <div className="flex-1 pb-2">
                          <p className="text-sm text-gray-400">{item.date}</p>
                          <p className="font-medium">{item.event}</p>
                          <Badge
                            className={
                              item.status === "completed"
                                ? "bg-green-500/20 text-green-300 border-green-500/30 mt-2"
                                : item.status === "in-progress"
                                  ? "bg-blue-500/20 text-blue-300 border-blue-500/30 mt-2"
                                  : "bg-gray-500/20 text-gray-300 border-gray-500/30 mt-2"
                            }
                          >
                            {item.status === "completed"
                              ? "Completed"
                              : item.status === "in-progress"
                                ? "In Progress"
                                : "Pending"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-6">
              <h2 className="text-xl font-serif mb-4">Discussion</h2>

              <div className="space-y-4 mb-6">
                {request.comments.map((comment, index) => (
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">
                        {comment.authorName} ({comment.author})
                      </div>
                      <div className="text-sm text-gray-400">{comment.timestamp}</div>
                    </div>
                    <p className="text-gray-300">{comment.content}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Add Comment
                </Button>
                <Button variant="outline" className="border-white/20 text-gray-300 hover:bg-white/5">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Request
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <CheckCircle className="h-4 w-4 mr-2" />
              Vote For Proposal
            </Button>
            <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
              <XCircle className="h-4 w-4 mr-2" />
              Vote Against
            </Button>
          </div>
        </ScrollReveal>
      </main>
    </div>
  )
}
