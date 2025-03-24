import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart } from "@/components/area-chart"

export default function ConsumoPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Consumo de Água"
        description="Monitore e analise o consumo de água do sistema"
        icon="water_drop"
      />

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Consumo Hoje</h3>
                  <p className="text-3xl font-bold text-primary">
                    125<span className="text-lg ml-1">m³</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">today</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                <span>-5% em relação a ontem</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Consumo Semanal</h3>
                  <p className="text-3xl font-bold text-primary">
                    845<span className="text-lg ml-1">m³</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">date_range</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                <span>-2% em relação à semana anterior</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Consumo Mensal</h3>
                  <p className="text-3xl font-bold text-primary">
                    2.845<span className="text-lg ml-1">m³</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">calendar_month</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-warning">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                <span>+12% em relação ao mês anterior</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Consumo Anual</h3>
                  <p className="text-3xl font-bold text-primary">
                    32.450<span className="text-lg ml-1">m³</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                <span>-8% em relação ao ano anterior</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-1 lg:col-span-2 bg-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold text-gray-800">Histórico de Consumo</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="px-3 py-1 text-xs rounded-full">
                    Diário
                  </Button>
                  <Button variant="default" size="sm" className="px-3 py-1 text-xs rounded-full">
                    Semanal
                  </Button>
                  <Button variant="outline" size="sm" className="px-3 py-1 text-xs rounded-full">
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
              <CardTitle className="text-lg font-bold text-gray-800">Maiores Consumidores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-700">Setor Industrial</span>
                    <span className="text-primary font-medium">1.250 m³</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-700">Setor Residencial</span>
                    <span className="text-primary font-medium">950 m³</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-700">Irrigação</span>
                    <span className="text-primary font-medium">645 m³</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-700">Comércio</span>
                    <span className="text-primary font-medium">420 m³</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-700">Serviços Públicos</span>
                    <span className="text-primary font-medium">380 m³</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-800">Registros de Consumo</h3>
              <div className="flex space-x-2">
                <Button className="flex items-center px-3 py-1.5 rounded-lg text-sm">
                  <span className="material-symbols-outlined text-sm mr-1">download</span>
                  Exportar
                </Button>
                <Button variant="outline" size="icon" className="p-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-gray-500 text-xs">
                    <th className="text-left pl-4 pb-2 font-medium">DATA</th>
                    <th className="text-left pb-2 font-medium">SETOR</th>
                    <th className="text-left pb-2 font-medium">CONSUMO</th>
                    <th className="text-left pb-2 font-medium">VARIAÇÃO</th>
                    <th className="text-left pb-2 font-medium">STATUS</th>
                    <th className="text-right pr-4 pb-2 font-medium">AÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">21/06/2023</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">factory</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">Setor Industrial</p>
                          <p className="text-xs text-gray-500">Zona Norte</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">125 m³</td>
                    <td className="py-3">
                      <span className="flex items-center text-xs text-success">
                        <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                        -5%
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                        Normal
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">visibility</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">download</span>
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">20/06/2023</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">home</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">Setor Residencial</p>
                          <p className="text-xs text-gray-500">Zona Sul</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">98 m³</td>
                    <td className="py-3">
                      <span className="flex items-center text-xs text-warning">
                        <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                        +8%
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning">
                        Atenção
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">visibility</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">download</span>
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">19/06/2023</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">grass</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">Irrigação</p>
                          <p className="text-xs text-gray-500">Zona Rural</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">145 m³</td>
                    <td className="py-3">
                      <span className="flex items-center text-xs text-destructive">
                        <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                        +15%
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
                        Crítico
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">visibility</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-gray-600">download</span>
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

