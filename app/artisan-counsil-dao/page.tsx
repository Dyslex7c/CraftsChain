import Link from "next/link"
import { DashboardStats } from "@/components/dashboard-stats"
import { ProposalGrid } from "@/components/proposal-grid"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { VoteStats } from "@/components/vote-stats"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <ScrollReveal>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">
              Artisan Council
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Decentralized governance for the ArtisanChain ecosystem
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <DashboardStats />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Governance Overview</h2>
            <VoteStats />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <section className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif">Active Proposals</h2>
              <Link
                href="/proposals"
                className="px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 transition-all duration-300 flex items-center gap-2 group"
              >
                View All
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
            <ProposalGrid limit={3} />
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <section className="mt-16 mb-20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif">Funding Requests</h2>
              <Link
                href="/funding"
                className="px-4 py-2 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600/30 transition-all duration-300 flex items-center gap-2 group"
              >
                View All
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-xl bg-black/40 backdrop-blur-md border border-white/10 p-6 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Pending</div>
                    <div className="text-gray-400 text-sm">3 days left</div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Terracotta Workshop Funding</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    Funding request for organizing a 2-week terracotta crafting workshop in Kolkata.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-blue-400 font-medium">2.5 ETH</div>
                    <Link href={`/funding/${i}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  )
}
