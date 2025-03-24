import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RelatoriosPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Relatórios"
        description="Visualize e exporte relatórios detalhados do sistema"
        icon="monitoring"
      />

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Relatórios Gerados</h3>
                  <p className="text-3xl font-bold text-primary">24</p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">description</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span className="material-symbols-outlined text-sm mr-1">calendar_today</span>
                <span>Nos últimos 30 dias</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Relatórios Agendados</h3>
                  <p className="text-3xl font-bold text-primary">8</p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">check_circle</span>
                <span>Todos ativos</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Usuários com Acesso</h3>
                  <p className="text-3xl font-bold text-primary">12</p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">group</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span className="material-symbols-outlined text-sm mr-1">admin_panel_settings</span>
                <span>3 administradores</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Espaço Utilizado</h3>
                  <p className="text-3xl font-bold text-primary">
                    1.2<span className="text-lg ml-1">GB</span>
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">storage</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span className="material-symbols-outlined text-sm mr-1">cloud_done</span>
                <span>8.8 GB disponíveis</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-1 lg:col-span-2 bg-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold text-gray-800">Relatórios Recentes</CardTitle>
                <Button className="flex items-center px-3 py-1.5 rounded-lg text-sm">
                  <span className="material-symbols-outlined text-sm mr-1">add</span>
                  Novo Relatório
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-gray-500 text-xs">
                      <th className="text-left pl-4 pb-2 font-medium">NOME</th>
                      <th className="text-left pb-2 font-medium">TIPO</th>
                      <th className="text-left pb-2 font-medium">GERADO EM</th>
                      <th className="text-left pb-2 font-medium">TAMANHO</th>
                      <th className="text-right pr-4 pb-2 font-medium">AÇÕES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="py-3 pl-4 rounded-l-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                            <span className="material-symbols-outlined text-sm text-primary">description</span>
                          </div>
                          <div>
                            <p className="text-gray-800 text-sm font-medium">Consumo Mensal - Junho</p>
                            <p className="text-xs text-gray-500">Relatório completo</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-gray-600">PDF</td>
                      <td className="py-3 text-gray-600">21/06/2023</td>
                      <td className="py-3 text-gray-600">4.2 MB</td>
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
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm text-gray-600">share</span>
                          </Button>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="py-3 pl-4 rounded-l-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                            <span className="material-symbols-outlined text-sm text-primary">table_chart</span>
                          </div>
                          <div>
                            <p className="text-gray-800 text-sm font-medium">Qualidade da Água - Q2</p>
                            <p className="text-xs text-gray-500">Análise trimestral</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-gray-600">Excel</td>
                      <td className="py-3 text-gray-600">15/06/2023</td>
                      <td className="py-3 text-gray-600">2.8 MB</td>
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
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm text-gray-600">share</span>
                          </Button>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="py-3 pl-4 rounded-l-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                            <span className="material-symbols-outlined text-sm text-primary">bar_chart</span>
                          </div>
                          <div>
                            <p className="text-gray-800 text-sm font-medium">Eficiência do Sistema</p>
                            <p className="text-xs text-gray-500">Relatório técnico</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-gray-600">PDF</td>
                      <td className="py-3 text-gray-600">10/06/2023</td>
                      <td className="py-3 text-gray-600">5.7 MB</td>
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
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm text-gray-600">share</span>
                          </Button>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="py-3 pl-4 rounded-l-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                            <span className="material-symbols-outlined text-sm text-primary">receipt_long</span>
                          </div>
                          <div>
                            <p className="text-gray-800 text-sm font-medium">Faturamento - Maio</p>
                            <p className="text-xs text-gray-500">Relatório financeiro</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-gray-600">Excel</td>
                      <td className="py-3 text-gray-600">05/06/2023</td>
                      <td className="py-3 text-gray-600">3.1 MB</td>
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
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm text-gray-600">share</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">Relatórios Agendados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-sm text-primary">calendar_month</span>
                      </div>
                      <div>
                        <p className="text-gray-800 text-sm font-medium">Consumo Mensal</p>
                        <p className="text-xs text-gray-500">Todo dia 1</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-success mr-1"></span>
                      <span className="text-xs text-success">Ativo</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">Próximo: 01/07/2023</span>
                    <Button variant="outline" size="sm" className="text-xs h-7 px-2">
                      Editar
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                      </div>
                      <div>
                        <p className="text-gray-800 text-sm font-medium">Qualidade da Água</p>
                        <p className="text-xs text-gray-500">Semanal (Segunda-feira)</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-success mr-1"></span>
                      <span className="text-xs text-success">Ativo</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">Próximo: 26/06/2023</span>
                    <Button variant="outline" size="sm" className="text-xs h-7 px-2">
                      Editar
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-sm text-primary">receipt_long</span>
                      </div>
                      <div>
                        <p className="text-gray-800 text-sm font-medium">Faturamento</p>
                        <p className="text-xs text-gray-500">Mensal (Dia 5)</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-success mr-1"></span>
                      <span className="text-xs text-success">Ativo</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">Próximo: 05/07/2023</span>
                    <Button variant="outline" size="sm" className="text-xs h-7 px-2">
                      Editar
                    </Button>
                  </div>
                </div>

                <Button className="w-full">Agendar Novo Relatório</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-bold text-gray-800">Gerar Novo Relatório</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl text-primary">water_drop</span>
                </div>
                <h3 className="text-gray-800 font-medium mb-2">Consumo de Água</h3>
                <p className="text-sm text-gray-500 mb-4">Relatório detalhado de consumo por período e setor.</p>
                <Button variant="outline" className="w-full">
                  Gerar Relatório
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl text-primary">cycle</span>
                </div>
                <h3 className="text-gray-800 font-medium mb-2">Tratamento de Água</h3>
                <p className="text-sm text-gray-500 mb-4">Análise de eficiência e qualidade do tratamento.</p>
                <Button variant="outline" className="w-full">
                  Gerar Relatório
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl text-primary">credit_card</span>
                </div>
                <h3 className="text-gray-800 font-medium mb-2">Cartões e Recargas</h3>
                <p className="text-sm text-gray-500 mb-4">Histórico de recargas e uso de cartões no sistema.</p>
                <Button variant="outline" className="w-full">
                  Gerar Relatório
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

