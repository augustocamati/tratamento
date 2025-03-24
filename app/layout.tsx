import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sistema de Consumo e Tratamento de Água",
  description: "Soluções sustentáveis para gestão hídrica eficiente e responsável",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background flex flex-col lg:flex-row">
          <Sidebar className="lg:w-1/5 xl:w-1/6" />
          <main className="flex-1 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'