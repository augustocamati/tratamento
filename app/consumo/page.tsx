"use client"

import { useEffect, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart } from "@/components/area-chart"
import axios from "axios"
import dayjs from "dayjs"
import { set } from "date-fns"

interface Consumo {
  id: number
  uid: string
  litros: number
  createdAt: string
  card: {
    id: number
    uid: string
    proprietario: string
    tipo: string
    saldo: number
    status: string
    description: string
    createdAt: string
  }
}

export default function ConsumoPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL 
  const [dados, setDados] = useState<Consumo[]>([])
  const [totais, setTotais] = useState({
    hoje: 0,
    semana: 0,
    mes: 0,
    ano: 0,
  })

  const [consumidores, setConsumidores] = useState<Record<string, number>>({})

  useEffect(() => {
    async function fetchData() {
      try {
        
        const res = await axios.get<Consumo[]>(`${API_URL}/consumo`);
        const consumo = res.data
        console.log('consumo', consumo)
        setDados(consumo)

        const hoje = dayjs().startOf("day")
        const inicioSemana = dayjs().startOf("week")
        const inicioMes = dayjs().startOf("month")
        const inicioAno = dayjs().startOf("year")

        let totalHoje = 0,
          totalSemana = 0,
          totalMes = 0,
          totalAno = 0
        const grupos: Record<string, number> = {}

        for (const c of consumo) {
          const data = dayjs(c.createdAt)
          if (data.isAfter(hoje)) totalHoje += c.litros
          if (data.isAfter(inicioSemana)) totalSemana += c.litros
          if (data.isAfter(inicioMes)) totalMes += c.litros
          if (data.isAfter(inicioAno)) totalAno += c.litros

          const tipo = c.card?.tipo ?? "Outro"
          grupos[tipo] = (grupos[tipo] || 0) + c.litros
        }

        setTotais({
          hoje: totalHoje,
          semana: totalSemana,
          mes: totalMes,
          ano: totalAno,
        })

        setConsumidores(grupos)
      } catch (err) {
        console.error("Erro ao buscar consumo:", err)
      }
    }



    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Consumo de Água"
        description="Monitore e analise o consumo de água do sistema"
        icon="water_drop"
      />

      <main className="p-6">
        {/* Cartões Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: "Consumo Hoje", valor: totais.hoje, icon: "today" },
            {
              label: "Consumo Semanal",
              valor: totais.semana,
              icon: "date_range",
            },
            {
              label: "Consumo Mensal",
              valor: totais.mes,
              icon: "calendar_month",
            },
            {
              label: "Consumo Anual",
              valor: totais.ano,
              icon: "calendar_today",
            },
          ].map(({ label, valor, icon }) => (
            <Card className="bg-white" key={label}>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-gray-500 text-sm">{label}</h3>
                    <p className="text-3xl font-bold text-primary">
                      {valor}
                      <span className="text-lg ml-1">L</span>
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      {icon}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gráfico e Maiores Consumidores */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-1 lg:col-span-2 bg-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold text-gray-800">
                  Histórico de Consumo
                </CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    Diário
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    Semanal
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    Mensal
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <AreaChart />
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">
                Maiores Consumidores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(consumidores)
                  .sort((a, b) => b[1] - a[1])
                  .map(([tipo, litros]) => {
                    const porcentagem = Math.min(
                      (litros / totais.mes) * 100,
                      100
                    )
                    return (
                      <div key={tipo}>
                        <div className="flex justify-between items-center text-sm mb-1">
                          <span className="text-gray-700">{tipo}</span>
                          <span className="text-primary font-medium">
                            {litros} L
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full progress-bar-gradient rounded-full"
                            style={{ width: `${porcentagem}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Tabela de Registros */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-800">
              Registros de Consumo
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="p-2">UID</th>
                  <th className="p-2">Proprietário</th>
                  <th className="p-2">Tipo</th>
                  <th className="p-2">Litros</th>
                  <th className="p-2">Data</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((registro) => (
                  <tr key={registro.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{registro.uid}</td>
                    <td className="p-2">
                      {registro.card?.proprietario || "N/A"}
                    </td>
                    <td className="p-2">{registro.card?.tipo || "N/A"}</td>
                    <td className="p-2">{registro.litros} L</td>
                    <td className="p-2">
                      {dayjs(registro.createdAt).format("DD/MM/YYYY HH:mm")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
