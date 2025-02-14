"use client"

import { Home, Users, Settings, FileBarChart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MenuOne() {
  const pathname = usePathname()

  return (
    <nav className="space-y-2 p-4">
      <Button
        asChild
        variant={pathname === "/" ? "default" : "ghost"}
        className="w-full justify-start"
      >
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Link>
      </Button>
      <Button
        asChild
        variant={pathname === "/users" ? "default" : "ghost"}
        className="w-full justify-start"
      >
        <Link href="/users">
          <Users className="mr-2 h-4 w-4" />
          Funcionarios
        </Link>
      </Button>
      <Button
        asChild
        variant={pathname === "/monitoramento" ? "default" : "ghost"}
        className="w-full justify-start"
      >
        <Link href="/monitoramento">
          <FileBarChart className="mr-2 h-4 w-4" />
          Monitoramento
        </Link>
      </Button>
      <Button
        asChild
        variant={pathname === "/settings" ? "default" : "ghost"}
        className="w-full justify-start"
      >
        <Link href="/settings">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Link>
      </Button>
      <Button
        asChild
        variant={pathname === "/produtos" ? "default" : "destructive"}
        className="w-full justify-start"
      >
        <Link href="/settings">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Produtos
        </Link>
      </Button>
    </nav>
  )
}

