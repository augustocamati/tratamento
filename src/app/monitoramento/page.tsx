"use client"

import { useState, useEffect } from "react"
import { Beaker, Bell, FileBarChart, MapPin, Power, Pause } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { MenuOne } from "@/components/menu-one"

// Placeholder function to simulate real-time data
const getRandomValue = (min: number, max: number) => {
  return Math.round((Math.random() * (max - min) + min) * 10) / 10
}

export default function RealTimeMonitoring() {
  const [phValue, setPhValue] = useState(7.0)
  const [conductivityValue, setConductivityValue] = useState(500)
  const [oxygenValue, setOxygenValue] = useState(8.0)
  const [purificationActive, setPurificationActive] = useState(true)
  const [sensorsPaused, setSensorsPaused] = useState(false)

  useEffect(() => {
    if (!sensorsPaused) {
      const interval = setInterval(() => {
        setPhValue(getRandomValue(6.5, 8.5))
        setConductivityValue(getRandomValue(450, 550))
        setOxygenValue(getRandomValue(7.0, 9.0))
      }, 5000) // Update every 5 seconds

      return () => clearInterval(interval)
    }
  }, [sensorsPaused])

  const getStatusColor = (value: number, min: number, max: number) => {
    if (value < min || value > max)
      return "bg-red-100 text-red-800 border-red-300"
    if (value < min + 0.5 || value > max - 0.5)
      return "bg-yellow-100 text-yellow-800 border-yellow-300"
    return "bg-green-100 text-green-800 border-green-300"
  }

  const getStatusDescription = (param: string, value: number) => {
    switch (param) {
      case "pH":
        if (value < 6.5) return "pH muito baixo. Risco de corrosão."
        if (value > 8.5) return "pH muito alto. Risco de incrustação."
        return "pH dentro dos padrões aceitáveis."
      case "conductivity":
        if (value < 450)
          return "Condutividade baixa. Possível falta de minerais."
        if (value > 550)
          return "Condutividade alta. Possível excesso de sais dissolvidos."
        return "Condutividade dentro dos padrões aceitáveis."
      case "oxygen":
        if (value < 7.0)
          return "Oxigênio dissolvido baixo. Risco para vida aquática."
        if (value > 9.0)
          return "Oxigênio dissolvido alto. Possível supersaturação."
        return "Oxigênio dissolvido em níveis adequados."
      default:
        return ""
    }
  }

  return (
    <DashboardLayout sidebar={<MenuOne />}>
      <div className="min-h-screen bg-background">
        

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold mb-6 text-primary">
              Monitoramento em Tempo Real
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">pH</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-blue-600">
                    {phValue}
                  </div>
                  <Alert
                    className={`border ${getStatusColor(phValue, 6.5, 8.5)}`}
                  >
                    <AlertTitle>Status</AlertTitle>
                    <AlertDescription>
                      {getStatusDescription("pH", phValue)}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-purple-700">
                    Condutividade Elétrica
                  </CardTitle>
                  <CardDescription>μS/cm</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-purple-600">
                    {conductivityValue}
                  </div>
                  <Alert
                    className={`border ${getStatusColor(
                      conductivityValue,
                      450,
                      550
                    )}`}
                  >
                    <AlertTitle>Status</AlertTitle>
                    <AlertDescription>
                      {getStatusDescription("conductivity", conductivityValue)}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-green-700">
                    Oxigênio Dissolvido
                  </CardTitle>
                  <CardDescription>mg/L</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-green-600">
                    {oxygenValue}
                  </div>
                  <Alert
                    className={`border ${getStatusColor(
                      oxygenValue,
                      7.0,
                      9.0
                    )}`}
                  >
                    <AlertTitle>Status</AlertTitle>
                    <AlertDescription>
                      {getStatusDescription("oxygen", oxygenValue)}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6 bg-gradient-to-br from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-primary">Controle Manual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={purificationActive}
                      onCheckedChange={setPurificationActive}
                      id="purification-mode"
                    />
                    <label htmlFor="purification-mode" className="text-primary">
                      Purificação Automática{" "}
                      {purificationActive ? "Ativada" : "Desativada"}
                    </label>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setSensorsPaused(!sensorsPaused)}
                        >
                          {sensorsPaused ? (
                            <Power className="h-4 w-4" />
                          ) : (
                            <Pause className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {sensorsPaused
                            ? "Retomar Sensores"
                            : "Pausar Sensores para Manutenção"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Alert
                  variant="default"
                  className="bg-blue-50 border-blue-200 text-blue-800"
                >
                  <AlertTitle>Status do Sistema</AlertTitle>
                  <AlertDescription>
                    {sensorsPaused
                      ? "Sensores pausados para manutenção. Os dados não estão sendo atualizados."
                      : "Sistema funcionando normalmente. Dados sendo atualizados em tempo real."}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-700">
                  Mapa de Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white h-64 flex items-center justify-center rounded-lg border-2 border-dashed border-orange-300">
                  <MapPin className="h-12 w-12 text-orange-400" />
                  <span className="ml-2 text-orange-600">
                    Mapa Interativo (Em desenvolvimento)
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
