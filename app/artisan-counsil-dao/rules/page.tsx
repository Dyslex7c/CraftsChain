"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, FileText, Shield, Users, Coins, Vote, Scale, Clock } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Rule {
  id: string
  title: string
  content: string
  icon: React.ElementType
}

export default function RulesPage() {
  const [expandedRules, setExpandedRules] = useState<string[]>([])

  const toggleRule = (id: string) => {
    setExpandedRules((prev) => (prev.includes(id) ? prev.filter((ruleId) => ruleId !== id) : [...prev, id]))
  }

  const rules: Rule[] = [
    {
      id: "governance",
      title: "Governance Structure",
      icon: Shield,
      content: `
## Governance Structure

The Artisan Council operates as a decentralized autonomous organization (DAO) with the following structure:

### Core Council
- 7 elected members serving 6-month terms
- Responsible for day-to-day operations and emergency decisions
- Must include at least 3 practicing artisans

### Community Members
- All token holders with at least 100 ART tokens
- Voting rights proportional to token holdings (capped at 5% influence per member)
- Can submit proposals and vote on all major decisions

### Advisory Board
- 5 appointed experts in crafts, culture, and technology
- Non-voting role focused on providing guidance and expertise
- Term limit of 1 year with possibility of reappointment

### Working Groups
- Specialized teams focused on specific areas (education, marketplace, grants)
- Open to all community members
- Led by elected coordinators serving 3-month terms

The governance structure is designed to balance efficient decision-making with broad community participation, ensuring that traditional artisans maintain significant influence in the DAO's direction.
      `,
    },
    {
      id: "membership",
      title: "Membership & Participation",
      icon: Users,
      content: `
## Membership & Participation

### Becoming a Member
- Acquire at least 100 ART tokens through:
  - Direct purchase on supported exchanges
  - Contribution of artworks to the community collection
  - Active participation in community initiatives
- Complete identity verification through the approved process
- Sign the community values agreement

### Member Rights
- Submit proposals for consideration
- Vote on all community decisions
- Access exclusive resources and educational materials
- Participate in working groups and committees
- Receive proportional benefits from treasury growth

### Member Responsibilities
- Participate regularly in governance votes
- Uphold the community values and code of conduct
- Contribute expertise and knowledge to the community
- Disclose conflicts of interest in relevant votes
- Support and mentor new members

### Membership Levels
1. **Apprentice** (100-499 ART tokens)
   - Basic voting rights
   - Access to community resources

2. **Artisan** (500-999 ART tokens)
   - Enhanced voting weight
   - Ability to create proposals
   - Access to funding opportunities

3. **Master** (1000+ ART tokens)
   - Maximum voting weight
   - Priority consideration for funding
   - Eligibility for Core Council election

Membership status is reviewed quarterly, with inactive members receiving notifications before any status changes.
      `,
    },
    {
      id: "proposals",
      title: "Proposal Process",
      icon: FileText,
      content: `
## Proposal Process

### Types of Proposals
1. **Governance Proposals**: Changes to DAO structure, rules, or parameters
2. **Funding Proposals**: Requests for treasury funds for projects or initiatives
3. **Technical Proposals**: Updates to the platform or technical infrastructure
4. **Community Proposals**: Events, partnerships, or community initiatives

### Submission Requirements
- Minimum 500 ART tokens to submit a proposal
- Detailed description including objectives, timeline, and expected outcomes
- Budget breakdown for funding requests
- Impact assessment on the community and traditional crafts
- Implementation plan with clear milestones

### Proposal Lifecycle
1. **Draft Stage** (7 days)
   - Initial submission and community discussion
   - Feedback and refinement of the proposal

2. **Formal Review** (3 days)
   - Assessment by relevant working groups
   - Technical and feasibility review

3. **Voting Period** (5 days)
   - Community-wide vote on the proposal
   - Minimum 30% participation required for validity

4. **Implementation** (if approved)
   - Assignment of resources and responsibilities
   - Regular progress updates to the community

### Voting Thresholds
- **Standard Proposals**: Simple majority (>50%)
- **Funding Proposals**: 60% approval required
- **Governance Changes**: 75% approval required
- **Emergency Actions**: 80% approval from Core Council

All proposals must include a clear reporting mechanism for accountability after implementation.
      `,
    },
    {
      id: "treasury",
      title: "Treasury Management",
      icon: Coins,
      content: `
## Treasury Management

### Treasury Composition
- Minimum 70% in stable assets (stablecoins, low-risk investments)
- Maximum 20% in growth assets (tokens, higher-risk investments)
- Minimum 10% in liquid assets for immediate operational needs

### Funding Allocation
- 40% for artisan support and education
- 25% for platform development and maintenance
- 20% for community growth and marketing
- 10% for operational expenses
- 5% for emergency reserve

### Spending Limits
- Up to 0.5 ETH: Approval by 2 Core Council members
- 0.5-3 ETH: Approval by majority of Core Council
- 3-10 ETH: Community vote with 60% approval
- Above 10 ETH: Community vote with 75% approval

### Treasury Reports
- Weekly automated reports on treasury composition
- Monthly detailed financial statements
- Quarterly comprehensive audit by rotating community members
- Annual professional audit by external firm

### Risk Management
- No single investment to exceed 10% of treasury value
- Diversification across at least 5 different asset types
- Multi-signature wallet requiring 4 of 7 Core Council signatures
- Time-lock of 24 hours on all transactions above 1 ETH

All treasury activities are recorded on-chain for complete transparency and accountability.
      `,
    },
    {
      id: "voting",
      title: "Voting Mechanisms",
      icon: Vote,
      content: `
## Voting Mechanisms

### Voting Power
- 1 ART token = 1 vote
- Maximum voting power capped at 5% of total supply per address
- Quadratic voting implemented for funding decisions
- Time-weighted voting power based on token holding duration

### Voting Methods
- **Token-weighted voting**: Standard governance decisions
- **Quadratic voting**: Resource allocation and funding decisions
- **Conviction voting**: Long-term initiatives and strategic decisions
- **Ranked-choice voting**: Multi-option selections

### Delegation
- Members can delegate voting power to trusted representatives
- Delegation can be full or partial (by proposal type)
- Delegation can be revoked at any time with 24-hour notice
- Delegates must disclose all voting intentions

### Vote Security
- All votes recorded on-chain for transparency
- Off-chain voting with on-chain verification for gas efficiency
- Snapshot voting for gas-free participation
- 24-hour timelock on execution of passed proposals

### Special Voting Conditions
- Emergency votes can be called by Core Council with 6/7 agreement
- Votes affecting artisan livelihoods require separate approval by artisan members
- Constitutional changes require two successive votes 14 days apart

Voting participation is incentivized through a reputation system that rewards active governance participation.
      `,
    },
    {
      id: "dispute",
      title: "Dispute Resolution",
      icon: Scale,
      content: `
## Dispute Resolution

### Types of Disputes
1. **Governance Disputes**: Disagreements about rules, procedures, or decisions
2. **Resource Allocation Disputes**: Conflicts over funding or resource distribution
3. **Code of Conduct Violations**: Behavioral issues within the community
4. **Technical Disputes**: Disagreements about platform implementation

### Resolution Process
1. **Direct Resolution** (3 days)
   - Parties attempt to resolve the dispute directly
   - Facilitated by a neutral community member if requested

2. **Mediation** (7 days)
   - Appointed mediator from the community
   - Structured discussion and proposed resolution

3. **Arbitration Committee** (14 days)
   - Panel of 5 randomly selected community members
   - Binding decision by majority vote

4. **Community Vote** (Last resort)
   - Dispute presented to entire community
   - Resolution by simple majority vote

### Principles of Resolution
- Transparency in all proceedings
- Equal opportunity for all parties to present their case
- Focus on community values and mission
- Preference for restorative rather than punitive outcomes

### Sanctions
- Warning and education for minor violations
- Temporary suspension of privileges for repeated issues
- Token slashing for serious violations
- Permanent removal in extreme cases (requires 75% community approval)

All dispute resolution proceedings are documented and stored for community reference and precedent.
      `,
    },
    {
      id: "amendments",
      title: "Amendment Process",
      icon: Clock,
      content: `
## Amendment Process

### Proposing Amendments
- Any member with 1000+ ART tokens can propose amendments
- Amendments must be submitted with clear rationale and expected impact
- Proposed text must be provided in both technical and plain language formats
- 14-day discussion period before voting begins

### Amendment Categories
1. **Minor Amendments**: Clarifications or non-structural changes
   - Requires 60% approval with 30% participation
   - Implementation after 7-day timelock

2. **Major Amendments**: Significant changes to governance or economics
   - Requires 75% approval with 40% participation
   - Implementation after 14-day timelock
   - Requires two successive votes 14 days apart

3. **Emergency Amendments**: Critical security or operational issues
   - Requires 80% approval from Core Council
   - Temporary implementation (30 days) pending community vote

### Amendment Implementation
- All approved amendments are documented with version control
- Changes are announced through all community channels
- Technical implementation is verified by at least 3 independent reviewers
- Post-implementation review after 90 days

### Amendment Limitations
- Amendments cannot violate the core principles of the DAO
- Changes to token economics require 85% approval
- Amendments affecting artisan representation require separate approval by artisan members
- No more than 3 major amendments can be implemented per quarter

The amendment history is maintained as part of the permanent record of the DAO, accessible to all members.
      `,
    },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <ScrollReveal>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">
              DAO Rules & Governance
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The foundational principles and operational guidelines that govern the Artisan Council. These rules ensure
              transparent, fair, and effective governance of our decentralized community.
            </p>
          </header>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {rules.map((rule, index) => (
            <ScrollReveal key={rule.id} delay={index * 0.1}>
              <motion.div
                className="glass-card rounded-xl border border-white/10 overflow-hidden mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleRule(rule.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <rule.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h2 className="text-xl font-serif font-medium">{rule.title}</h2>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      expandedRules.includes(rule.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedRules.includes(rule.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="prose prose-invert max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: rule.content.replace(/\n/g, "<br>") }} />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </div>
  )
}
