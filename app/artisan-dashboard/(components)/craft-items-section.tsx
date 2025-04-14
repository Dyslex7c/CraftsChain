"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, ExternalLink, MoreHorizontal, Edit, Trash, QrCode, Video } from "lucide-react"
import Image from "next/image"

export default function CraftItemsSection() {
  const [craftItems, setCraftItems] = useState([
    {
      id: 1,
      name: "Baluchari Saree",
      image: "/placeholder.svg?height=400&width=300",
      nftId: "#2398",
      status: "sold",
      creationDate: "March 3, 2025",
      materials: ["Handloom", "Natural Dye"],
    },
    {
      id: 2,
      name: "Dokra Sculpture",
      image: "/placeholder.svg?height=400&width=300",
      nftId: "#3142",
      status: "listed",
      creationDate: "February 15, 2025",
      materials: ["Brass", "Lost-wax casting"],
    },
    {
      id: 3,
      name: "Kantha Stitch Wall Hanging",
      image: "/placeholder.svg?height=400&width=300",
      nftId: "#4201",
      status: "in-progress",
      creationDate: "April 1, 2025",
      materials: ["Cotton", "Embroidery Thread"],
    },
  ])

  const getStatusBadge = (status) => {
    switch (status) {
      case "sold":
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">✅ Sold</span>
      case "listed":
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">🔄 Listed</span>
      case "in-progress":
        return <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">🛠️ In Progress</span>
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">My Craft Items</h2>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-red-600 text-white rounded-lg text-sm">
            <Plus className="h-4 w-4" />
            <span>Add New</span>
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {craftItems.map((item) => (
          <div key={item.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-24 sm:h-24 rounded-lg overflow-hidden relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="relative group">
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <MoreHorizontal className="h-5 w-5 text-gray-500" />
                    </button>

                    <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-10 hidden group-hover:block">
                      <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-50">
                        <Edit className="h-4 w-4 text-gray-500" />
                        <span>Edit Item</span>
                      </button>
                      <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-50">
                        <Video className="h-4 w-4 text-gray-500" />
                        <span>Add Making Video</span>
                      </button>
                      <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-50">
                        <QrCode className="h-4 w-4 text-gray-500" />
                        <span>Print QR Tag</span>
                      </button>
                      <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50">
                        <Trash className="h-4 w-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span className="font-medium">NFT ID:</span>
                    <span>{item.nftId}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span className="font-medium">Created:</span>
                    <span>{item.creationDate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {item.materials.map((material, index) => (
                    <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {material}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-3">
                  {getStatusBadge(item.status)}

                  <a href="#" className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800">
                    <span>View on IPFS</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 text-center border-t border-gray-100">
        <button className="text-sm text-blue-600 hover:text-blue-800">View All Craft Items</button>
      </div>
    </motion.div>
  )
}
