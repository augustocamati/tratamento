"use client"

import type React from "react"
import { useState } from "react"
import { Beaker, Bell, FileBarChart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DashboardLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
}

export function DashboardLayout({ children, sidebar }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {sidebar}
        </div>
        
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <nav className="bg-primary text-primary-foreground shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex ">
                <div className="flex-shrink-0 flex items-center">
                  <Beaker className="h-8 w-8" />
                  <span className="ml-2 text-xl font-semibold">
                    Sistema de Tratamento de Água
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground"
                >
                  <Bell className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 text-primary-foreground"
                >
                  <FileBarChart className="h-5 w-5" />
                </Button>
                <Link href="/" className="ml-4">
                  <Button variant="secondary">Produtos</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-6">
          <Button
            variant="outline"
            size="icon"
            className="mb-4 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {children}
        </div>
      </div>
    </div>
  )
}

