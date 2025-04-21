"use client"
import { useEffect, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TratamentoPage() {
   const API_URL = process.env.NEXT_PUBLIC_API_URL 
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const res = await fetch(`${API_URL}/sensors/data/latest`) // ajuste para sua API
        const json = await res.json()
        console.log('json', json)
        setData(json)
      } catch (err) {
        console.error("Erro ao buscar dados da API:", err)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!data) return <div className="p-6">Carregando...</div>

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Tratamento de Água"
        description="Monitore e controle os processos de tratamento de água"
        icon="cycle"
      />

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Vazão Total</h3>
                  <p className="text-3xl font-bold text-primary">
                    {data.totalFlow}
                    <span className="text-lg ml-1">L</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    water_full
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Estações Ativas</h3>
                  <p className="text-3xl font-bold text-primary">
                    1<span className="text-lg ml-1">/1</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">
                  check_circle
                </span>
                <span>100% operacionais</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Última Atualização</h3>
                  <p className="text-3xl font-bold text-primary">
                    {new Date(data.timestamp).toLocaleTimeString("pt-BR")}
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">
                Qualidade da Água
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Parametro
                label="Turbidez"
                valor={data.turbidity}
                unidade={data.turbidityUnit}
                status={data.turbidityStatus}
              />
              <Parametro
                label="TDS"
                valor={data.tds}
                unidade={data.tdsUnit}
                status={data.tdsStatus}
              />
              <Parametro
                label="Vazão"
                valor={data.flowRate}
                unidade={data.flowRateUnit}
                status={data.flowRateStatus}
              />
              <Parametro
                label="pH"
                valor={7.2} // Simulado por enquanto
                unidade=""
                status="NORMAL"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function Parametro({ label, valor, unidade, status }) {
  const statusColor =
    {
      NORMAL: "text-success bg-success/10",
      WARNING: "text-warning bg-warning/10",
      DANGER: "text-destructive bg-destructive/10",
      CRITICAL: "text-destructive bg-destructive/10",
    }[status] || "text-muted"

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 text-sm">{label}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
          {status}
        </span>
      </div>
      <div className="text-3xl font-bold text-primary mb-1 text-center">
        {valor} <span className="text-sm">{unidade}</span>
      </div>
    </div>
  )
}
