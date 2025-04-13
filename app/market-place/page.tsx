"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag, Bell } from "lucide-react"

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const headerStyle = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://images.pexels.com/photos/3330009/pexels-photo-3330009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }
  const categories = [
    { id: "all", name: "All Products" },
    { id: "jute", name: "Jute Crafts" },
    { id: "terracotta", name: "Terracotta" },
    { id: "handloom", name: "Handloom Sarees" },
    { id: "bamboo", name: "Bamboo Crafts" },
    { id: "kantha", name: "Kantha Embroidery" },
    { id: "clay", name: "Clay Pottery" },
  ]

  const products = [
    {
      id: 1,
      name: "Dokra Silk Saree",
      category: "handloom",
      artist: "Meena Devi",
      price: "0.15 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Terracotta Wall Hanging",
      category: "terracotta",
      artist: "Rajesh Kumar",
      price: "0.08 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Jute Handbag",
      category: "jute",
      artist: "Priya Singh",
      price: "0.05 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Bamboo Table Lamp",
      category: "bamboo",
      artist: "Amit Sharma",
      price: "0.12 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Kantha Embroidery Scarf",
      category: "kantha",
      artist: "Lakshmi Rao",
      price: "0.07 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Terracotta Planter",
      category: "terracotta",
      artist: "Vikram Patel",
      price: "0.06 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 7,
      name: "Jute Floor Mat",
      category: "jute",
      artist: "Sunita Devi",
      price: "0.09 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Bamboo Storage Basket",
      category: "bamboo",
      artist: "Ravi Kumar",
      price: "0.04 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 9,
      name: "Clay Water Pot",
      category: "clay",
      artist: "Ananya Gupta",
      price: "0.11 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 10,
      name: "Kantha Bedspread",
      category: "kantha",
      artist: "Deepa Roy",
      price: "0.18 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      name: "Handloom Cotton Stole",
      category: "handloom",
      artist: "Nirmala Das",
      price: "0.06 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 12,
      name: "Bamboo Wind Chime",
      category: "bamboo",
      artist: "Suresh Mondal",
      price: "0.05 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 13,
      name: "Baluchari Saree",
      category: "handloom",
      artist: "Nirmala Devi",
      price: "0.15 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 14,
      name: "Jamdani Saree",
      category: "handloom",
      artist: "Sima Devi",
      price: "0.15 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 15,
      name: "Tant Saree",
      category: "handloom",
      artist: "Minati Barua",
      price: "0.15 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 16,
      name: "Terracotta Sculpture",
      category: "terracotta",
      artist: "Vivas Adhikary",
      price: "0.08 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 17,
      name: "Bankura Horses",
      category: "terracotta",
      artist: "Nitai Saha",
      price: "0.16 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 19,
      name: "Jute Doll",
      category: "jute",
      artist: "Riya Ghosh",
      price: "0.05 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 20,
      name: "Jute Jewellery Box",
      category: "jute",
      artist: "Sumita Dey",
      price: "0.16 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 21,
      name: "Jute Wall Hanging",
      category: "jute",
      artist: "Nirmal Das",
      price: "0.07 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 22,
      name: "Bamboo Chair",
      category: "bamboo",
      artist: "Vikash Mondal",
      price: "0.15 ETH",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-cyan-400 to-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <span className="text-xl font-bold">CraftsChain</span>
              </Link>

              <nav className="hidden md:flex space-x-8">
                <Link href="/#journey" className="hover:text-cyan-400 transition-colors">
                  Artisan Journey
                </Link>
                <Link href="/#products" className="hover:text-cyan-400 transition-colors">
                  Products
                </Link>
                <Link href="/#blockchain" className="hover:text-cyan-400 transition-colors">
                  Blockchain
                </Link>
                <Link href="/#nft" className="hover:text-cyan-400 transition-colors">
                  NFT Marketplace
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-gray-800 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-[#f7931a]"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              <div className="relative">
                <Bell className="h-6 w-6 text-gray-300 hover:text-cyan-400 cursor-pointer" />
                <span className="absolute -top-1 -right-1 bg-cyan-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </div>

              <button className="bg-gradient-to-r from-cyan-400 to-red-600 hover:bg-[#e78418] text-white font-medium py-2 px-6 rounded-full transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>

          <div className="mt-4 md:hidden relative">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-800 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-none focus:ring-cyan-400"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12 p-10 rounded-[20px]" style={headerStyle}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Handcrafted Products</h1>
          <p className="text-white max-w-2xl mx-auto">
            Each product is unique, handcrafted by skilled artisans and authenticated on the blockchain.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-400 to-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Collections */}
        {activeCategory === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#1a1f2c] to-[#0d1117] rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-400/10 transition-all">
                <h3 className="text-xl font-bold mb-2">Bengal Heritage</h3>
                <p className="text-gray-400 mb-4">Traditional crafts with centuries of history</p>
                <Link href="#" className="text-cyan-400 hover:underline">
                  Explore collection →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-[#1a1f2c] to-[#0d1117] rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-400/10 transition-all">
                <h3 className="text-xl font-bold mb-2">Modern Fusion</h3>
                <p className="text-gray-400 mb-4">Contemporary designs with traditional techniques</p>
                <Link href="#" className="text-cyan-400 hover:underline">
                  Explore collection →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-[#1a1f2c] to-[#0d1117] rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-400/10 transition-all">
                <h3 className="text-xl font-bold mb-2">Artisan Spotlight</h3>
                <p className="text-gray-400 mb-4">Featuring this month's celebrated creators</p>
                <Link href="#" className="text-cyan-400 hover:underline">
                  Explore collection →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Products by Category */}
        {activeCategory === "all" ? (
          <>
            {/* Handloom Sarees Section */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Handloom Sarees</h2>
                <Link href="#" className="text-cyan-400 hover:underline">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === "handloom")
                  .slice(0, 4)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-[#1a1f2c] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-400/10 transition-all"
                    >
                      <div className="relative group">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <button className="bg-cyan-400 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                            <ShoppingBag className="h-4 w-4" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-400 text-sm mb-2">by {product.artist}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500">Price</p>
                            <p className="font-bold">{product.price}</p>
                          </div>
                          <button className="bg-gradient-to-r from-cyan-400 to-red-600 hover:bg-[#e78418] text-white text-sm px-4 py-1 rounded-full transition-colors">
                            View NFT
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Terracotta Section */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Terracotta</h2>
                <Link href="#" className="text-cyan-400 hover:underline">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === "terracotta")
                  .slice(0, 4)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-[#1a1f2c] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-400/10 transition-all"
                    >
                      <div className="relative group">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <button className="bg-cyan-400 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                            <ShoppingBag className="h-4 w-4" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-400 text-sm mb-2">by {product.artist}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500">Price</p>
                            <p className="font-bold">{product.price}</p>
                          </div>
                          <button className="bg-gradient-to-r from-cyan-400 to-red-600 hover:bg-[#e78418] text-white text-sm px-4 py-1 rounded-full transition-colors">
                            View NFT
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Jute Crafts Section */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Jute Crafts</h2>
                <Link href="#" className="text-cyan-400 hover:underline">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === "jute")
                  .slice(0, 4)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-[#1a1f2c] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-400/10 transition-all"
                    >
                      <div className="relative group">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <button className="bg-cyan-400 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                            <ShoppingBag className="h-4 w-4" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-400 text-sm mb-2">by {product.artist}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500">Price</p>
                            <p className="font-bold">{product.price}</p>
                          </div>
                          <button className="bg-gradient-to-r from-cyan-400 to-red-600 hover:bg-[#e78418] text-white text-sm px-4 py-1 rounded-full transition-colors">
                            View NFT
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Bamboo Crafts Section */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Bamboo Crafts</h2>
                <Link href="#" className="text-cyan-400 hover:underline">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === "bamboo")
                  .slice(0, 4)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-[#1a1f2c] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-400/10 transition-all"
                    >
                      <div className="relative group">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <button className="bg-cyan-400 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                            <ShoppingBag className="h-4 w-4" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-400 text-sm mb-2">by {product.artist}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500">Price</p>
                            <p className="font-bold">{product.price}</p>
                          </div>
                          <button className="bg-gradient-to-r from-cyan-400 to-red-600 hover:bg-[#e78418] text-white text-sm px-4 py-1 rounded-full transition-colors">
                            View NFT
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#1a1f2c] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-400/10 transition-all"
              >
                <div className="relative group">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <button className="bg-cyan-400 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                      <ShoppingBag className="h-4 w-4" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">by {product.artist}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="font-bold">{product.price}</p>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-400 to-red-600 hover:bg-[#e78418] text-white text-sm px-4 py-1 rounded-full transition-colors">
                      View NFT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button - Only show when viewing all products */}
        {activeCategory === "all" && (
          <div className="text-center mt-12">
            <button className="border border-cyan-400 text-cyan-400 hover:bg-gradient-to-r from-cyan-400 to-red-600 hover:text-white px-6 py-2 rounded-full transition-colors">
              Load More
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-cyan-400 to-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <span className="text-xl font-bold">CraftsChain</span>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting traditional craftsmanship with blockchain technology to create a transparent, fair
                marketplace.
              </p>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="bg-gray-800 rounded-full w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="bg-gray-800 rounded-full w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="bg-gray-800 rounded-full w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Handloom Sarees
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Terracotta
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Jute Crafts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Bamboo Products
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    About Artisans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Blockchain Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    NFT Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 ArtisanChain. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 text-sm hover:text-cyan-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-cyan-400">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-cyan-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
