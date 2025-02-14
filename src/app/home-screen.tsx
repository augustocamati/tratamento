import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardDescription,CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Component } from "@/components/user-stats";
import { Beaker, BeakerIcon, Bell, BellIcon, FileBarChart } from "lucide-react";

export function HomeScreen() {
  const waterStatus = "Própria para consumo"
  const statusIcon = "✅"
  const phValue = 7.2
  const conductivityValue = 500
  const oxygenValue = 8.5
  return (
    <div className="space-y-4">
      <div className="px-4 py-6 sm:px-0">
        <Alert className="bg-green-100 text-green-800 border-green-300">
          <AlertTitle className="flex items-center text-lg font-semibold">
            Status da Água: {waterStatus} {statusIcon}
          </AlertTitle>
          <AlertDescription>
            O sistema está funcionando normalmente.
          </AlertDescription>
        </Alert>
      </div>
      <h2 className="text-2xl font-bold">Welcome to Home</h2>
      <p>This is the home screen of your dashboard.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-700">pH</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-600">{phValue}</p>
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
            <p className="text-4xl font-bold text-purple-600">
              {conductivityValue}
            </p>
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
            <p className="text-4xl font-bold text-green-600">{oxygenValue}</p>
          </CardContent>
        </Card>
      </div>

      <Component />
    </div>
  )
}

