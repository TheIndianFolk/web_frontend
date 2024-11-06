'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bell, ChevronDown, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <Link href="/" className="logo" style={{
              textDecoration: 'none',
              display: 'inline-block',
              fontFamily: 'Arial, sans-serif',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#E50914',
              padding: '8px 0',
            }}>
              .indianfolk
            </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
                <Link href="/new-and-popular" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">New & Popular</Link>
                <Link href="/my-list" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">My List</Link>
                <Link href="/search" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Search By Language</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="ml-3 relative">
                <div>
                  <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <Image className="h-8 w-8 rounded-sm" src="/placeholder.svg" alt="" width={32} height={32} />
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-black ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-700">Your Profile</Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-700">Settings</Link>
                    <Link href="/signout" className="block px-4 py-2 text-sm hover:bg-gray-700">Sign out</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
            <Link href="/new-and-popular" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">New & Popular</Link>
            <Link href="/my-list" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">My List</Link>
            <Link href="/search" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Search By Language</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Image className="h-10 w-10 rounded-sm" src="/placeholder.svg" alt="" width={40} height={40} />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium">User Name</div>
                <div className="text-sm font-medium text-gray-400">user@example.com</div>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Bell className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Your Profile</Link>
              <Link href="/settings" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Settings</Link>
              <Link href="/signout" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Sign out</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}