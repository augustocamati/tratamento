"use client"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

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
              <div className="flex items-center text-xs text-warning">
                <span className="material-symbols-outlined text-sm mr-1">
                  info
                </span>
                <span>2 estações em manutenção</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Última Atualização</h3>
                  <p className="text-2xl font-bold text-primary">
                    {new Date(data.timestamp).toLocaleDateString("pt-BR")}
                  </p>
                  <h3 className="text-gray-500 text-sm">
                    {new Date(data.timestamp).toLocaleTimeString("pt-BR")}
                  </h3>
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

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">
                Qualidade da Água
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Parametro
                  icon="turb"
                  label="Turbidez"
                  valor={data.turbidity}
                  unidade={data.turbidityUnit}
                  status={data.turbidityStatus}
                  padrao="0.5 - 1.0"
                />

                <Parametro
                  icon="ph"
                  label="ph"
                  valor={7.2} // Simulado por enquanto
                  unidade=""
                  status="NORMAL"
                />

                <Parametro
                  icon="science"
                  label="TDS"
                  valor={data.tds}
                  unidade={data.tdsUnit}
                  status={data.tdsStatus}
                  padrao="0.5 - 1.0"
                />

                <Parametro
                  icon="water"
                  label="Fluxo"
                  valor={data.flowRate}
                  unidade={data.flowRateUnit}
                  status={data.flowRateStatus}
                />
              </div>

              <div className="flex items-center bg-success/10 rounded-lg p-3">
                <span className="material-symbols-outlined text-success mr-3">
                  location_on
                </span>
                <div>
                  <p className="text-gray-800 text-sm font-medium">
                    {data.station.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {data.station.location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-800">
                Manutenções Programadas
              </h3>
              <div className="flex space-x-2">
                <Button className="flex items-center px-3 py-1.5 rounded-lg text-sm">
                  <span className="material-symbols-outlined text-sm mr-1">
                    add
                  </span>
                  Agendar
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="p-1.5 rounded-lg"
                >
                  <span className="material-symbols-outlined text-sm">
                    calendar_month
                  </span>
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-gray-500 text-xs">
                    <th className="text-left pl-4 pb-2 font-medium">DATA</th>
                    <th className="text-left pb-2 font-medium">ESTAÇÃO</th>
                    <th className="text-left pb-2 font-medium">TIPO</th>
                    <th className="text-left pb-2 font-medium">RESPONSÁVEL</th>
                    <th className="text-left pb-2 font-medium">STATUS</th>
                    <th className="text-right pr-4 pb-2 font-medium">AÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">
                      15/07/2023
                    </td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">
                            water_drop
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">
                            Estação Central
                          </p>
                          <p className="text-xs text-gray-500">São Paulo, SP</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">Preventiva</td>
                    <td className="py-3 text-gray-600">Carlos Silva</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary">
                        Agendada
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            edit
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            delete
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">
                      22/07/2023
                    </td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">
                            water_drop
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">
                            Estação Norte
                          </p>
                          <p className="text-xs text-gray-500">Campinas, SP</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">Troca de Filtros</td>
                    <td className="py-3 text-gray-600">Ana Oliveira</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary">
                        Agendada
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            edit
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            delete
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">
                      10/07/2023
                    </td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">
                            water_drop
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">
                            Estação Sul
                          </p>
                          <p className="text-xs text-gray-500">Santos, SP</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">Corretiva</td>
                    <td className="py-3 text-gray-600">Roberto Mendes</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                        Concluída
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            visibility
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            download
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}



function Parametro({icon, label, valor, unidade, status,padrao }) {
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
        <div className="flex items-center">
          <span className="material-symbols-outlined text-primary mr-2">
            {icon}
          </span>
          <span className="text-gray-700 text-sm">{label}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
          {status}
        </span>
      </div>
      <div className="text-3xl font-bold text-primary mb-1 text-center">
        {valor} <span className="text-sm">{unidade}</span>
      </div>
      <div className="text-xs text-gray-500 text-center">
        Padrão: {padrao} {unidade}
      </div>
    </div>
  )
}


