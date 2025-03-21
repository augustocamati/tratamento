import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart } from "@/components/area-chart"
import { DonutChart } from "@/components/donut-chart"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Visão Geral"
        description="Monitore o desempenho do sistema de água em tempo real"
        icon="dashboard"
      />

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Consumo Total Card */}
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Consumo Total</h3>
                  <p className="text-3xl font-bold text-primary">
                    2.845<span className="text-lg ml-1">m³</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    water_drop
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">
                  trending_up
                </span>
                <span>+12% em relação ao mês anterior</span>
              </div>
            </CardContent>
          </Card>

          {/* Economia Gerada Card */}
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Economia Gerada</h3>
                  <p className="text-3xl font-bold text-primary">R$ 8.270</p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    savings
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">
                  trending_up
                </span>
                <span>+18% em relação ao mês anterior</span>
              </div>
            </CardContent>
          </Card>

          {/* Eficiência do Sistema Card */}
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">
                    Eficiência do Sistema
                  </h3>
                  <p className="text-3xl font-bold text-primary">
                    94.2<span className="text-lg ml-1">%</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    speed
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">
                  trending_up
                </span>
                <span>+2.5% em relação ao mês anterior</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          {/* Consumo Diário Chart */}
          <Card className="col-span-1 lg:col-span-3 bg-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold text-gray-800">
                  Consumo Diário
                </CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    7 dias
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    30 dias
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    3 meses
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <AreaChart />
            </CardContent>
          </Card>

          {/* Distribuição de Consumo Chart */}
          <Card className="col-span-1 lg:col-span-2 bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">
                Distribuição de Consumo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DonutChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Estado do Sistema Card */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800">Estado do Sistema</h3>
                <span className="flex items-center text-xs bg-primary-100 text-primary px-2 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-success mr-1 animate-pulse"></span>
                  Online
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-500">Tratamento Primário</span>
                    <span className="text-primary">98%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar-gradient rounded-full"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-500">Filtração</span>
                    <span className="text-primary">92%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar-gradient rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-500">Desinfecção</span>
                    <span className="text-primary">95%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar-gradient rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-500">Armazenamento</span>
                    <span className="text-primary">76%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar-gradient rounded-full"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Qualidade da Água Card */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-800 mb-4">
                Qualidade da Água
              </h3>

              <div className="flex justify-between space-x-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center w-1/3">
                  <div className="text-3xl font-bold text-primary mb-1">
                    7.2
                  </div>
                  <div className="text-xs text-gray-500">pH</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center w-1/3">
                  <div className="text-3xl font-bold text-primary mb-1">
                    0.8
                  </div>
                  <div className="text-xs text-gray-500">Cloro (mg/L)</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center w-1/3">
                  <div className="text-3xl font-bold text-primary mb-1">
                    2.1
                  </div>
                  <div className="text-xs text-gray-500">Turbidez</div>
                </div>
              </div>

              <div className="flex items-center bg-success/10 rounded-lg p-3">
                <span className="material-symbols-outlined text-success mr-3">
                  check_circle
                </span>
                <div>
                  <p className="text-gray-800 text-sm font-medium">
                    Dentro dos Padrões
                  </p>
                  <p className="text-xs text-gray-500">
                    Última verificação: hoje às 14:30
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alertas Recentes Card */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-800 mb-4">Alertas Recentes</h3>

              <div className="space-y-3">
                <div className="flex items-start p-3 bg-primary-50 rounded-lg">
                  <span className="material-symbols-outlined text-primary mr-3">
                    info
                  </span>
                  <div>
                    <p className="text-sm text-gray-800">
                      Manutenção Preventiva
                    </p>
                    <p className="text-xs text-gray-500">
                      Agendada para 15/07 - 08:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-3 bg-warning/10 rounded-lg">
                  <span className="material-symbols-outlined text-warning mr-3">
                    water_damage
                  </span>
                  <div>
                    <p className="text-sm text-gray-800">
                      Consumo Acima da Média
                    </p>
                    <p className="text-xs text-gray-500">
                      Setor B2 - Ontem às 22:15
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-3 bg-success/10 rounded-lg">
                  <span className="material-symbols-outlined text-success mr-3">
                    task_alt
                  </span>
                  <div>
                    <p className="text-sm text-gray-800">
                      Troca de Filtros Concluída
                    </p>
                    <p className="text-xs text-gray-500">Hoje às 09:45</p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4 py-2 rounded-lg text-primary text-sm"
              >
                Ver Todos os Alertas
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Estações de Tratamento Table */}
        <Card className="w-full bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-800">
                Estações de Tratamento
              </h3>
              <div className="flex space-x-2">
                <Button className="flex items-center px-3 py-1.5 rounded-lg text-sm">
                  <span className="material-symbols-outlined text-sm mr-1">
                    add
                  </span>
                  Adicionar
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="p-1.5 rounded-lg"
                >
                  <span className="material-symbols-outlined text-sm">
                    more_vert
                  </span>
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-gray-500 text-xs">
                    <th className="text-left pl-4 pb-2 font-medium">ID</th>
                    <th className="text-left pb-2 font-medium">ESTAÇÃO</th>
                    <th className="text-left pb-2 font-medium">CAPACIDADE</th>
                    <th className="text-left pb-2 font-medium">STATUS</th>
                    <th className="text-left pb-2 font-medium">EFICIÊNCIA</th>
                    <th className="text-right pr-4 pb-2 font-medium">AÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">
                      #EST-001
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
                    <td className="py-3 text-gray-600">1.200 m³/dia</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mr-1 animate-pulse"></span>
                        Operacional
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden mr-2">
                          <div
                            className="h-full progress-bar-gradient rounded-full"
                            style={{ width: "92%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-primary">92%</span>
                      </div>
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
                            edit
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            more_horiz
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">
                      #EST-002
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
                    <td className="py-3 text-gray-600">980 m³/dia</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mr-1 animate-pulse"></span>
                        Operacional
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden mr-2">
                          <div
                            className="h-full progress-bar-gradient rounded-full"
                            style={{ width: "88%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-primary">88%</span>
                      </div>
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
                            edit
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            more_horiz
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">
                      #EST-003
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
                    <td className="py-3 text-gray-600">750 m³/dia</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-600">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mr-1"></span>
                        Manutenção
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden mr-2">
                          <div
                            className="h-full progress-bar-gradient rounded-full"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">0%</span>
                      </div>
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
                            edit
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">
                            more_horiz
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
