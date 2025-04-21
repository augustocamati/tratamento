"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { href: "/", label: "Visão Geral", icon: "dashboard" },
    { href: "/consumo", label: "Consumo", icon: "water_drop" },
    { href: "/tratamento", label: "Tratamento", icon: "cycle" },
    { href: "/cartoes", label: "Cartões", icon: "credit_card" },
    // { href: "/relatorios", label: "Relatórios", icon: "monitoring" },
    { href: "/configuracoes", label: "Configurações", icon: "settings" },
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-white text-primary shadow-md border-primary-200"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={toggleSidebar} />}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 w-64 
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:h-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${className}
        `}
      >
        <div className="flex flex-col h-full bg-gradient-sidebar rounded-r-xl shadow-lg p-6">
          {/* Close button for mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-white">
              <X className="h-5 w-5" />
              <span className="sr-only">Fechar menu</span>
            </Button>
          </div>

          <div className="flex items-center space-x-3 mb-8">
            <span className="material-symbols-outlined text-white text-3xl">water</span>
            <div>
              <h1 className="text-white text-xl font-bold">AquaSystem</h1>
              <p className="text-primary-200 text-xs">Gestão Hídrica</p>
            </div>
          </div>

          <nav className="space-y-2 mb-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center space-x-3 p-3 rounded-lg 
                    transform hover:translate-x-1 transition-all duration-300
                    ${isActive ? "bg-white/20 border-l-4 border-white" : "hover:bg-white/10"}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={`material-symbols-outlined ${isActive ? "text-white" : "text-primary-200"}`}>
                    {item.icon}
                  </span>
                  <span className={`${isActive ? "text-white" : "text-primary-200"} font-medium`}>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">person</span>
              </div>
              <div>
                <p className="text-white font-medium">Admin</p>
                <p className="text-xs text-primary-200">Sistema de Água</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

