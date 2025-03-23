import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TratamentoPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Tratamento de Água" 
        description="Monitore e controle os processos de tratamento de água"
        icon="cycle"
      />
      
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Água Tratada Hoje</h3>
                  <p className="text-3xl font-bold text-primary">185<span className="text-lg ml-1">m³</span></p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">water_full</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                <span>+8% em relação a ontem</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Eficiência Média</h3>
                  <p className="text-3xl font-bold text-primary">94.2<span className="text-lg ml-1">%</span></p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">speed</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-success">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                <span>+2.5% em relação ao mês anterior</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Estações Ativas</h3>
                  <p className="text-3xl font-bold text-primary">8<span className="text-lg ml-1">/10</span></p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-warning">
                <span className="material-symbols-outlined text-sm mr-1">info</span>
                <span>2 estações em manutenção</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Produtos Químicos</h3>
                  <p className="text-3xl font-bold text-primary">82<span className="text-lg ml-1">%</span></p>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">science</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-warning">
                <span className="material-symbols-outlined text-sm mr-1">warning</span>
                <span>Estoque para 18 dias</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">Estado do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">filter_alt</span>
                      <span className="text-gray-700">Tratamento Primário</span>
                    </div>
                    <span className="text-primary font-medium">98%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{width: '98%'}}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">Última manutenção: 05/06/2023</span>
                    <span className="text-xs text-success">Operacional</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">filter_alt</span>
                      <span className="text-gray-700">Filtração</span>
                    </div>
                    <span className="text-primary font-medium">92%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">Última manutenção: 12/06/2023</span>
                    <span className="text-xs text-success">Operacional</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">sanitizer</span>
                      <span className="text-gray-700">Desinfecção</span>
                    </div>
                    <span className="text-primary font-medium">95%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">Última manutenção: 10/06/2023</span>
                    <span className="text-xs text-success">Operacional</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">water_full</span>
                      <span className="text-gray-700">Armazenamento</span>
                    </div>
                    <span className="text-primary font-medium">76%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full progress-bar-gradient rounded-full" style={{width: '76%'}}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">Última manutenção: 01/06/2023</span>
                    <span className="text-xs text-success">Operacional</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">Qualidade da Água</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">ph</span>
                      <span className="text-gray-700 text-sm">pH</span>
                    </div>
                    <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">Normal</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1 text-center">7.2</div>
                  <div className="text-xs text-gray-500 text-center">Padrão: 6.5 - 8.5</div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">science</span>
                      <span className="text-gray-700 text-sm">Cloro</span>
                    </div>
                    <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">Normal</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1 text-center">0.8 <span className="text-sm">mg/L</span></div>
                  <div className="text-xs text-gray-500 text-center">Padrão: 0.2 - 2.0 mg/L</div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">opacity</span>
                      <span className="text-gray-700 text-sm">Turbidez</span>
                    </div>
                    <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">Normal</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1 text-center">2.1 <span className="text-sm">NTU</span></div>
                  <div className="text-xs text-gray-500 text-center">Padrão: 5.0 NTU</div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">water</span>
                      <span className="text-gray-700 text-sm">Coliformes</span>
                    </div>
                    <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">Normal</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1 text-center">0 <span className="text-sm">UFC</span></div>
                  <div className="text-xs text-gray-500 text-center">Padrão: Ausente</div>
                </div>
              </div>
              
              <div className="flex items-center bg-success/10 rounded-lg p-3">
                <span className="material-symbols-outlined text-success mr-3">check_circle</span>
                <div>
                  <p className="text-gray-800 text-sm font-medium">Água dentro dos Padrões de Potabilidade</p>
                  <p className="text-xs text-gray-500">Última verificação: hoje às 14:30</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="w-full bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-800">Manutenções Programadas</h3>
              <div className="flex space-x-2">
                <Button className="flex items-center px-3 py-1.5 rounded-lg text-sm">
                  <span className="material-symbols-outlined text-sm mr-1">add</span>
                  Agendar
                </Button>
                <Button variant="outline" size="icon" className="p-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
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
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">15/07/2023</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">water_drop</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">Estação Central</p>
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
                        <Button variant="ghost" size="sm" className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                          <span className="material-symbols-outlined text-sm text-gray-600">edit</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                          <span className="material-symbols-outlined text-sm text-gray-600">delete</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">22/07/2023</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">water_drop</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">Estação Norte</p>
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
                        <Button variant="ghost" size="sm" className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                          <span className="material-symbols-outlined text-sm text-gray-600">edit</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                          <span className="material-symbols-outlined text-sm text-gray-600">delete</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">10/07/2023</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">water_drop</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">Estação Sul</p>
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
                        <Button variant="ghost" size="sm" className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                          <span className="material-symbols-outlined text-sm text-gray-600">visibility</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
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

