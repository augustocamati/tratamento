import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CartoesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Cartões de Água"
        description="Gerencie cartões para retirada de água do sistema"
        icon="credit_card"
      />

      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Cartões Ativos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-separate border-spacing-y-2">
                    <thead>
                      <tr className="text-gray-500 text-xs">
                        <th className="text-left pl-4 pb-2 font-medium">ID DO CARTÃO</th>
                        <th className="text-left pb-2 font-medium">PROPRIETÁRIO</th>
                        <th className="text-left pb-2 font-medium">SALDO</th>
                        <th className="text-left pb-2 font-medium">STATUS</th>
                        <th className="text-right pr-4 pb-2 font-medium">AÇÕES</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="py-3 pl-4 rounded-l-lg text-gray-600">#CARD-001245</td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                              <span className="material-symbols-outlined text-sm text-primary">person</span>
                            </div>
                            <div>
                              <p className="text-gray-800 text-sm font-medium">João Silva</p>
                              <p className="text-xs text-gray-500">Residencial</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-gray-600">250 m³</td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                            Ativo
                          </span>
                        </td>
                        <td className="py-3 rounded-r-lg">
                          <div className="flex justify-end space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm text-gray-600">add</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm text-gray-600">block</span>
                            </Button>
                          </div>
                        </td>
                      </tr>

                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="py-3 pl-4 rounded-l-lg text-gray-600">#CARD-002187</td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                              <span className="material-symbols-outlined text-sm text-primary">apartment</span>
                            </div>
                            <div>
                              <p className="text-gray-800 text-sm font-medium">Condomínio Central</p>
                              <p className="text-xs text-gray-500">Comercial</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-gray-600">1.250 m³</td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                            Ativo
                          </span>
                        </td>
                        <td className="py-3 rounded-r-lg">
                          <div className="flex justify-end space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm text-gray-600">add</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm text-gray-600">block</span>
                            </Button>
                          </div>
                        </td>
                      </tr>

                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="py-3 pl-4 rounded-l-lg text-gray-600">#CARD-003421</td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                              <span className="material-symbols-outlined text-sm text-primary">factory</span>
                            </div>
                            <div>
                              <p className="text-gray-800 text-sm font-medium">Indústria ABC</p>
                              <p className="text-xs text-gray-500">Industrial</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-gray-600">5.000 m³</td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning">
                            Saldo Baixo
                          </span>
                        </td>
                        <td className="py-3 rounded-r-lg">
                          <div className="flex justify-end space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm text-gray-600">add</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm text-gray-600">block</span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Adicionar Recarga</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-id">ID do Cartão</Label>
                    <Input id="card-id" placeholder="Digite o ID do cartão" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Quantidade (m³)</Label>
                    <Input id="amount" type="number" placeholder="0" min="1" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="payment">Método de Pagamento</Label>
                    <select
                      id="payment"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione um método</option>
                      <option value="credit">Cartão de Crédito</option>
                      <option value="debit">Cartão de Débito</option>
                      <option value="pix">PIX</option>
                      <option value="boleto">Boleto</option>
                    </select>
                  </div>

                  <Button className="w-full">Adicionar Recarga</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Novo Cartão</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="owner-name">Nome do Proprietário</Label>
                    <Input id="owner-name" placeholder="Digite o nome completo" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="owner-type">Tipo de Proprietário</Label>
                    <select
                      id="owner-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione um tipo</option>
                      <option value="residential">Residencial</option>
                      <option value="commercial">Comercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="initial-amount">Quantidade Inicial (m³)</Label>
                    <Input id="initial-amount" type="number" placeholder="0" min="1" />
                  </div>

                  <Button className="w-full">Criar Cartão</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="w-full bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-800">Histórico de Recargas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-gray-500 text-xs">
                    <th className="text-left pl-4 pb-2 font-medium">DATA</th>
                    <th className="text-left pb-2 font-medium">ID DO CARTÃO</th>
                    <th className="text-left pb-2 font-medium">PROPRIETÁRIO</th>
                    <th className="text-left pb-2 font-medium">QUANTIDADE</th>
                    <th className="text-left pb-2 font-medium">VALOR</th>
                    <th className="text-left pb-2 font-medium">MÉTODO</th>
                    <th className="text-right pr-4 pb-2 font-medium">COMPROVANTE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">21/06/2023</td>
                    <td className="py-3 text-gray-600">#CARD-001245</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">person</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">João Silva</p>
                          <p className="text-xs text-gray-500">Residencial</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">100 m³</td>
                    <td className="py-3 text-gray-600">R$ 350,00</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary">
                        Cartão de Crédito
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
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
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">18/06/2023</td>
                    <td className="py-3 text-gray-600">#CARD-002187</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">apartment</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">Condomínio Central</p>
                          <p className="text-xs text-gray-500">Comercial</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">500 m³</td>
                    <td className="py-3 text-gray-600">R$ 1.750,00</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary">
                        PIX
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
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
                    <td className="py-3 pl-4 rounded-l-lg text-gray-600">15/06/2023</td>
                    <td className="py-3 text-gray-600">#CARD-003421</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <span className="material-symbols-outlined text-sm text-primary">factory</span>
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-medium">Indústria ABC</p>
                          <p className="text-xs text-gray-500">Industrial</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">2.000 m³</td>
                    <td className="py-3 text-gray-600">R$ 7.000,00</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary">
                        Boleto
                      </span>
                    </td>
                    <td className="py-3 rounded-r-lg">
                      <div className="flex justify-end space-x-1">
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

