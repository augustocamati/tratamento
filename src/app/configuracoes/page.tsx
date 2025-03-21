import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ConfiguracoesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Configurações" description="Gerencie as configurações do sistema de água" icon="settings" />

      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Configurações do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="system-name">Nome do Sistema</Label>
                      <Input id="system-name" defaultValue="Sistema de Consumo e Tratamento de Água" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="system-version">Versão</Label>
                      <Input id="system-version" defaultValue="2.5.1" readOnly className="bg-gray-50" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email do Administrador</Label>
                      <Input id="admin-email" type="email" defaultValue="admin@aguasystem.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notification-email">Email para Notificações</Label>
                      <Input id="notification-email" type="email" defaultValue="alertas@aguasystem.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="system-timezone">Fuso Horário</Label>
                    <select
                      id="system-timezone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="America/Sao_Paulo">América/São Paulo (GMT-3)</option>
                      <option value="America/Manaus">América/Manaus (GMT-4)</option>
                      <option value="America/Belem">América/Belém (GMT-3)</option>
                      <option value="America/Recife">América/Recife (GMT-3)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">Frequência de Backup</Label>
                    <select
                      id="backup-frequency"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="daily">Diário</option>
                      <option value="weekly">Semanal</option>
                      <option value="monthly">Mensal</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="enable-notifications"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      defaultChecked
                    />
                    <Label htmlFor="enable-notifications">Habilitar notificações por email</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="enable-sms"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="enable-sms">Habilitar notificações por SMS</Label>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Button>Salvar Configurações</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Configurações de Preços</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="price-residential">Preço Residencial (m³)</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                        <Input id="price-residential" type="number" step="0.01" defaultValue="3.50" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price-commercial">Preço Comercial (m³)</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                        <Input id="price-commercial" type="number" step="0.01" defaultValue="4.25" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price-industrial">Preço Industrial (m³)</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                        <Input id="price-industrial" type="number" step="0.01" defaultValue="5.00" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="min-recharge">Recarga Mínima (m³)</Label>
                      <Input id="min-recharge" type="number" defaultValue="50" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-recharge">Recarga Máxima (m³)</Label>
                      <Input id="max-recharge" type="number" defaultValue="10000" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Button>Atualizar Preços</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Informações do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Versão do Sistema</h4>
                    <p className="text-gray-800">2.5.1</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Última Atualização</h4>
                    <p className="text-gray-800">15/06/2023</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Banco de Dados</h4>
                    <p className="text-gray-800">PostgreSQL 14.5</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Servidor</h4>
                    <p className="text-gray-800">AWS EC2 t3.medium</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Último Backup</h4>
                    <p className="text-gray-800">21/06/2023 03:15</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Status do Sistema</h4>
                    <div className="flex items-center mt-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-success mr-2"></span>
                      <span className="text-success font-medium">Operacional</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Button variant="outline" className="w-full">
                      Verificar Atualizações
                    </Button>
                    <Button variant="outline" className="w-full">
                      Fazer Backup Manual
                    </Button>
                    <Button variant="outline" className="w-full text-destructive hover:bg-destructive/10">
                      Reiniciar Sistema
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Suporte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="material-symbols-outlined text-primary mr-2">support_agent</span>
                      <h4 className="font-medium text-gray-800">Suporte Técnico</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Disponível 24/7 para questões técnicas e emergências.</p>
                    <div className="text-sm text-gray-800">
                      <div className="flex items-center mb-1">
                        <span className="material-symbols-outlined text-sm text-primary mr-2">call</span>
                        <span>0800 123 4567</span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-sm text-primary mr-2">mail</span>
                        <span>suporte@aguasystem.com</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Abrir Chamado</Button>
                  <Button variant="outline" className="w-full">
                    Acessar Documentação
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

