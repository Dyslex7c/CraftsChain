"use client"

import { motion } from "framer-motion"
import { Shield, ExternalLink, Upload } from "lucide-react"

export default function IdentitySection() {
  const identityDetails = {
    fullName: "Rupa Sutradhar",
    district: "Nadia, West Bengal",
    skill: "Baluchari Weaving",
    issuedBy: "West Bengal Khadi Board",
    verificationDate: "January 15, 2025",
    sbtId: "0x8f7d...e4a2",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">My Identity (SBT)</h2>
          <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
            <Shield className="h-3 w-3" />
            <span>Verified</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="sm:w-1/3">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/10 to-red-600/10 flex items-center justify-center border border-gray-200 relative overflow-hidden">
              {/* Traditional pattern background */}
              <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

              <div className="relative z-10 text-center p-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-red-600 flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-2xl">RS</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2">
                  <p className="font-medium text-gray-900">{identityDetails.fullName}</p>
                  <p className="text-xs text-gray-500">{identityDetails.district}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:w-2/3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Traditional Skill</p>
                <p className="font-medium">{identityDetails.skill}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">Issued By</p>
                <p className="font-medium">{identityDetails.issuedBy}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">Verification Date</p>
                <p className="font-medium">{identityDetails.verificationDate}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">SBT ID</p>
                <div className="flex items-center gap-1">
                  <p className="font-mono text-sm">{identityDetails.sbtId}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-red-600 text-white rounded-lg text-sm">
                  <ExternalLink className="h-4 w-4" />
                  <span>View SBT On-Chain</span>
                </button>

                <button className="flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm">
                  <Upload className="h-4 w-4" />
                  <span>Update KYC Documents</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
