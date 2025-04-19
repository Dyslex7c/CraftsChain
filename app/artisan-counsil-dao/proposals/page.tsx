import { ProposalGrid } from "@/components/proposal-grid"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { VotingTrendChart } from "@/components/voting-trend-chart"

export default function ProposalsPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <ScrollReveal>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">
              Proposals
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Browse, vote, and track all proposals in the Artisan Council DAO. Each proposal represents a potential
              change or initiative for our community.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-card rounded-xl border border-white/10 p-6 mb-8">
            <VotingTrendChart />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <ProposalGrid />
        </ScrollReveal>
      </main>
    </div>
  )
}
