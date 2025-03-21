"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
}

export function DashboardLayout({ children, sidebar }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex items-center p-4 bg-primary text-primary-foreground">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-primary-foreground"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="ml-2 text-xl font-semibold">Sistema de Tratamento de Água</h1>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`
        fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden
        ${sidebarOpen ? "block" : "hidden"}
      `}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`
        fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        {sidebar}
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">{children}</main>
    </div>
  )
}

