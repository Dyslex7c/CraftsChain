"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ChevronRight, Database, FileCheck, Globe, Menu, Shield, Users, Wallet, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col bg-white">
      <header className="border-b border-gray-200 relative z-50">
        <div className="w-full flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">CraftChain</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link
              href="#marketplace"
              className="text-sm font-medium text-gray-500 hover:text-black hover:underline underline-offset-4"
            >
              Marketplace
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-gray-500 hover:text-black hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#artisans"
              className="text-sm font-medium text-gray-500 hover:text-black hover:underline underline-offset-4"
            >
              Artisans
            </Link>
            <Link
              href="#dao"
              className="text-sm font-medium text-gray-500 hover:text-black hover:underline underline-offset-4"
            >
              DAO
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-black text-white hover:bg-gray-800">
              <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-200 py-3">
            <div className="w-full px-4">
              <nav className="flex flex-col space-y-3">
                <Link href="#" className="text-sm font-medium py-1" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link
                  href="#marketplace"
                  className="text-sm font-medium text-gray-500 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Marketplace
                </Link>
                <Link
                  href="#features"
                  className="text-sm font-medium text-gray-500 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#artisans"
                  className="text-sm font-medium text-gray-500 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Artisans
                </Link>
                <Link
                  href="#dao"
                  className="text-sm font-medium text-gray-500 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  DAO
                </Link>
                <Button className="w-full justify-center bg-black text-white hover:bg-gray-800 mt-2">
                  <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-black text-white hover:bg-gray-800">Web3 Marketplace</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Authentic Bengal Handicrafts on the Blockchain
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From the hands of Bengal to the heart of the world—verified, authentic, immutable.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Learn About DAO</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Authentic Bengal Handicraft Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Innovative Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Leveraging blockchain technology to bring transparency, authenticity, and fair trade to Bengal
                  handicrafts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 border border-gray-200 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Soulbound Token Identity</h3>
                <p className="text-gray-500">
                  Verified artisan identities with non-transferable on-chain SBTs, ensuring authenticity and building
                  reputation.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border border-gray-200 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">NFT-Backed Crafts</h3>
                <p className="text-gray-500">
                  Each handicraft comes with a unique NFT containing craft details, artisan profile, and creation story.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border border-gray-200 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Supply Chain Tracking</h3>
                <p className="text-gray-500">
                  Complete transparency with on-chain recording of each stage from artisan to buyer, eliminating
                  counterfeits.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border border-gray-200 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Eco-Credits</h3>
                <p className="text-gray-500">
                  Artisans using sustainable materials receive on-chain eco tokens, verified by field officers and DAO
                  participants.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border border-gray-200 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Artisan DAO</h3>
                <p className="text-gray-500">
                  Decentralized governance allowing artisans to vote on community decisions, product highlights, and
                  fund allocations.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border border-gray-200 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Wallet className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Direct Payments</h3>
                <p className="text-gray-500">
                  Crypto payments go directly to artisan wallets, eliminating middlemen and ensuring fair compensation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace Preview */}
        <section id="marketplace" className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Handicrafts</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover authentic Bengal handicrafts with verified provenance on the blockchain.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="textiles">Textiles</TabsTrigger>
                <TabsTrigger value="pottery">Pottery</TabsTrigger>
                <TabsTrigger value="woodwork">Woodwork</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Baluchari Silk Saree",
                      artist: "Ruma Devi",
                      location: "Bishnupur, West Bengal",
                      price: "0.15 ETH",
                      category: "Textiles",
                    },
                    {
                      title: "Terracotta Horse",
                      artist: "Anand Kumar",
                      location: "Panchmura, West Bengal",
                      price: "0.05 ETH",
                      category: "Pottery",
                    },
                    {
                      title: "Wooden Dokra Art",
                      artist: "Sanjay Mondal",
                      location: "Darjeeling, West Bengal",
                      price: "0.08 ETH",
                      category: "Woodwork",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                        <p className="text-gray-500 text-sm">{item.category} Image</p>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>By {item.artist}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-gray-500">{item.location}</p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="font-bold">{item.price}</p>
                          <Badge variant="outline" className="text-xs">
                            Verified
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 border-t">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="textiles" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Textiles Image</p>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Baluchari Silk Saree</CardTitle>
                      <CardDescription>By Ruma Devi</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-500">Bishnupur, West Bengal</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold">0.15 ETH</p>
                        <Badge variant="outline" className="text-xs">
                          Verified
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 border-t">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="pottery" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Pottery Image</p>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Terracotta Horse</CardTitle>
                      <CardDescription>By Anand Kumar</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-500">Panchmura, West Bengal</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold">0.05 ETH</p>
                        <Badge variant="outline" className="text-xs">
                          Verified
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 border-t">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="woodwork" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Woodwork Image</p>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Wooden Dokra Art</CardTitle>
                      <CardDescription>By Sanjay Mondal</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-500">Darjeeling, West Bengal</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold">0.08 ETH</p>
                        <Badge variant="outline" className="text-xs">
                          Verified
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 border-t">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="gap-1">
                View All Handicrafts <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* DAO Section */}
        <section id="dao" className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200 bg-gray-50">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-black text-white hover:bg-gray-800">Decentralized Governance</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bengal Artisan DAO</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A community-governed platform where artisans collectively make decisions on product highlights, fund
                  allocations, and verification of new members.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Vote on community decisions and fund allocations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Verify new artisan members joining the platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Participate in selecting featured products for promotion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Earn rewards for active participation in governance</span>
                  </li>
                </ul>
                <Button className="bg-black text-white hover:bg-gray-800">Join the DAO</Button>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-[500px] aspect-video bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-sm">DAO Governance Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artisan Section */}
        <section id="artisans" className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Artisans</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Skilled craftspeople with verified on-chain identities, preserving Bengal's rich cultural heritage.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Ruma Devi",
                  craft: "Textile Weaver",
                  location: "Bishnupur, West Bengal",
                  verified: true,
                },
                {
                  name: "Anand Kumar",
                  craft: "Terracotta Artist",
                  location: "Panchmura, West Bengal",
                  verified: true,
                },
                {
                  name: "Sanjay Mondal",
                  craft: "Woodwork Artisan",
                  location: "Darjeeling, West Bengal",
                  verified: true,
                },
              ].map((artisan, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-6 border border-gray-200 rounded-lg"
                >
                  <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500 text-xs">Artisan Photo</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">{artisan.name}</h3>
                    <p className="text-sm text-gray-500">{artisan.craft}</p>
                    <p className="text-xs text-gray-500">{artisan.location}</p>
                  </div>
                  {artisan.verified && (
                    <Badge variant="outline" className="text-xs">
                      <Shield className="h-3 w-3 mr-1" /> Verified Identity
                    </Badge>
                  )}
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the CraftChain Revolution</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect your wallet to start exploring authentic Bengal handicrafts with verified provenance on the
                  blockchain.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="w-full flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-bold">CraftChain</span>
              </div>
              <p className="max-w-[350px] text-sm text-gray-500">
                From the hands of Bengal to the heart of the world—verified, authentic, immutable.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Artisans
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">DAO</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Governance
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Proposals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Voting
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Tutorials
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-black">
                      Licenses
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <p className="text-xs text-gray-500">© 2024 CraftChain. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-black">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-black">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-black">
                <span className="sr-only">Discord</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                  <path d="M7.5 16.5c3.5 1 5.5 1 9 0" />
                  <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
                  <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
