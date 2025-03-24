"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Cartao {
  id: string
  proprietario: string
  tipo: string
  saldo: number
  status: "Ativo" | "Saldo Baixo" | "Bloqueado"
}

interface Recarga {
  id: string
  cartaoId: string
  proprietario: string
  tipo: string
  quantidade: number
  valor: number
  metodo: string
  data: string
}

export default function CartoesPage() {
  // Estado para cartões
  const [cartoes, setCartoes] = useState<Cartao[]>([
    {
      id: "#CARD-001245",
      proprietario: "João Silva",
      tipo: "Residencial",
      saldo: 250,
      status: "Ativo",
    },
    {
      id: "#CARD-002187",
      proprietario: "Condomínio Central",
      tipo: "Comercial",
      saldo: 1250,
      status: "Ativo",
    },
    {
      id: "#CARD-003421",
      proprietario: "Indústria ABC",
      tipo: "Industrial",
      saldo: 5000,
      status: "Saldo Baixo",
    },
  ])

  // Estado para recargas
  const [recargas, setRecargas] = useState<Recarga[]>([
    {
      id: "REC-001",
      cartaoId: "#CARD-001245",
      proprietario: "João Silva",
      tipo: "Residencial",
      quantidade: 100,
      valor: 350,
      metodo: "Cartão de Crédito",
      data: "21/06/2023",
    },
    {
      id: "REC-002",
      cartaoId: "#CARD-002187",
      proprietario: "Condomínio Central",
      tipo: "Comercial",
      quantidade: 500,
      valor: 1750,
      metodo: "PIX",
      data: "18/06/2023",
    },
    {
      id: "REC-003",
      cartaoId: "#CARD-003421",
      proprietario: "Indústria ABC",
      tipo: "Industrial",
      quantidade: 2000,
      valor: 7000,
      metodo: "Boleto",
      data: "15/06/2023",
    },
  ])

  // Estado para formulário de recarga
  const [formRecarga, setFormRecarga] = useState({
    cartaoId: "",
    quantidade: "",
    metodo: "",
  })

  // Estado para formulário de novo cartão
  const [formNovoCartao, setFormNovoCartao] = useState({
    proprietario: "",
    tipo: "",
    saldoInicial: "",
  })

  // Função para adicionar recarga
  const adicionarRecarga = () => {
    if (!formRecarga.cartaoId || !formRecarga.quantidade || !formRecarga.metodo) {
      alert("Preencha todos os campos obrigatórios")
      return
    }

    const cartao = cartoes.find((c) => c.id === formRecarga.cartaoId)
    if (!cartao) {
      alert("Cartão não encontrado")
      return
    }

    // Criar nova recarga
    const novaRecarga: Recarga = {
      id: `REC-${Date.now().toString().slice(-6)}`,
      cartaoId: formRecarga.cartaoId,
      proprietario: cartao.proprietario,
      tipo: cartao.tipo,
      quantidade: Number(formRecarga.quantidade),
      valor:
        Number(formRecarga.quantidade) * (cartao.tipo === "Residencial" ? 3.5 : cartao.tipo === "Comercial" ? 4.25 : 5),
      metodo: formRecarga.metodo,
      data: new Date().toLocaleDateString("pt-BR"),
    }

    // Atualizar saldo do cartão
    const cartoesAtualizados = cartoes.map((c) => {
      if (c.id === formRecarga.cartaoId) {
        const novoSaldo = c.saldo + Number(formRecarga.quantidade)
        return {
          ...c,
          saldo: novoSaldo,
          status: novoSaldo < 100 ? "Saldo Baixo" : "Ativo",
        }
      }
      return c
    })

    // Atualizar estados
    setRecargas([novaRecarga, ...recargas])
    setCartoes(cartoesAtualizados)
    setFormRecarga({ cartaoId: "", quantidade: "", metodo: "" })

    alert(`Recarga adicionada com sucesso! Adicionado ${formRecarga.quantidade}m³ ao cartão ${formRecarga.cartaoId}`)
  }

  // Função para criar novo cartão
  const criarNovoCartao = () => {
    if (!formNovoCartao.proprietario || !formNovoCartao.tipo || !formNovoCartao.saldoInicial) {
      alert("Preencha todos os campos obrigatórios")
      return
    }

    // Criar novo cartão
    const novoCartao: Cartao = {
      id: `#CARD-${Date.now().toString().slice(-6)}`,
      proprietario: formNovoCartao.proprietario,
      tipo: formNovoCartao.tipo,
      saldo: Number(formNovoCartao.saldoInicial),
      status: Number(formNovoCartao.saldoInicial) < 100 ? "Saldo Baixo" : "Ativo",
    }

    // Atualizar estado
    setCartoes([...cartoes, novoCartao])
    setFormNovoCartao({ proprietario: "", tipo: "", saldoInicial: "" })

    alert(`Cartão criado com sucesso! Cartão ${novoCartao.id} criado para ${novoCartao.proprietario}`)
  }

  // Função para adicionar saldo
  const adicionarSaldo = (cartaoId: string) => {
    const cartao = cartoes.find((c) => c.id === cartaoId)
    if (cartao) {
      setFormRecarga({
        ...formRecarga,
        cartaoId: cartaoId,
      })

      // Rolar para o formulário de recarga
      document.getElementById("form-recarga")?.scrollIntoView({ behavior: "smooth" })

      alert(
        `Cartão selecionado! Preencha a quantidade e o método de pagamento para adicionar saldo ao cartão de ${cartao.proprietario}`,
      )
    }
  }

  // Função para bloquear cartão
  const bloquearCartao = (cartaoId: string) => {
    const cartoesAtualizados = cartoes.map((c) => {
      if (c.id === cartaoId) {
        return {
          ...c,
          status: c.status === "Bloqueado" ? "Ativo" : "Bloqueado",
        }
      }
      return c
    })

    setCartoes(cartoesAtualizados)

    const cartao = cartoesAtualizados.find((c) => c.id === cartaoId)
    alert(
      `O cartão de ${cartao?.proprietario} foi ${cartao?.status === "Bloqueado" ? "bloqueado" : "desbloqueado"} com sucesso`,
    )
  }

  // Função para baixar comprovante
  const baixarComprovante = (recargaId: string) => {
    const recarga = recargas.find((r) => r.id === recargaId)
    if (recarga) {
      alert(`O comprovante da recarga ${recargaId} foi gerado com sucesso`)
    }
  }

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
                      {cartoes.map((cartao) => (
                        <tr key={cartao.id} className="bg-gray-50 hover:bg-gray-100 transition-colors">
                          <td className="py-3 pl-4 rounded-l-lg text-gray-600">{cartao.id}</td>
                          <td className="py-3">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                                <span className="material-symbols-outlined text-sm text-primary">
                                  {cartao.tipo === "Residencial"
                                    ? "person"
                                    : cartao.tipo === "Comercial"
                                      ? "apartment"
                                      : "factory"}
                                </span>
                              </div>
                              <div>
                                <p className="text-gray-800 text-sm font-medium">{cartao.proprietario}</p>
                                <p className="text-xs text-gray-500">{cartao.tipo}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 text-gray-600">{cartao.saldo} m³</td>
                          <td className="py-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium 
                              ${
                                cartao.status === "Ativo"
                                  ? "bg-success/10 text-success"
                                  : cartao.status === "Saldo Baixo"
                                    ? "bg-warning/10 text-warning"
                                    : "bg-destructive/10 text-destructive"
                              }`}
                            >
                              {cartao.status}
                            </span>
                          </td>
                          <td className="py-3 rounded-r-lg">
                            <div className="flex justify-end space-x-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                                onClick={() => adicionarSaldo(cartao.id)}
                              >
                                <span className="material-symbols-outlined text-sm text-primary">add</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                                onClick={() => bloquearCartao(cartao.id)}
                              >
                                <span className="material-symbols-outlined text-sm text-gray-600">
                                  {cartao.status === "Bloqueado" ? "lock_open" : "block"}
                                </span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white" id="form-recarga">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Adicionar Recarga</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    adicionarRecarga()
                  }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="card-id">ID do Cartão</Label>
                    <Input
                      id="card-id"
                      placeholder="Digite o ID do cartão"
                      value={formRecarga.cartaoId}
                      onChange={(e) => setFormRecarga({ ...formRecarga, cartaoId: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Quantidade (m³)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0"
                      min="1"
                      value={formRecarga.quantidade}
                      onChange={(e) => setFormRecarga({ ...formRecarga, quantidade: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="payment">Método de Pagamento</Label>
                    <select
                      id="payment"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formRecarga.metodo}
                      onChange={(e) => setFormRecarga({ ...formRecarga, metodo: e.target.value })}
                    >
                      <option value="">Selecione um método</option>
                      <option value="Cartão de Crédito">Cartão de Crédito</option>
                      <option value="Cartão de Débito">Cartão de Débito</option>
                      <option value="PIX">PIX</option>
                      <option value="Boleto">Boleto</option>
                    </select>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-700" type="submit">
                    Adicionar Recarga
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Novo Cartão</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    criarNovoCartao()
                  }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="owner-name">Nome do Proprietário</Label>
                    <Input
                      id="owner-name"
                      placeholder="Digite o nome completo"
                      value={formNovoCartao.proprietario}
                      onChange={(e) => setFormNovoCartao({ ...formNovoCartao, proprietario: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="owner-type">Tipo de Proprietário</Label>
                    <select
                      id="owner-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formNovoCartao.tipo}
                      onChange={(e) => setFormNovoCartao({ ...formNovoCartao, tipo: e.target.value })}
                    >
                      <option value="">Selecione um tipo</option>
                      <option value="Residencial">Residencial</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="initial-amount">Quantidade Inicial (m³)</Label>
                    <Input
                      id="initial-amount"
                      type="number"
                      placeholder="0"
                      min="1"
                      value={formNovoCartao.saldoInicial}
                      onChange={(e) => setFormNovoCartao({ ...formNovoCartao, saldoInicial: e.target.value })}
                    />
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90" type="submit">
                    Criar Cartão
                  </Button>
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
                  {recargas.map((recarga) => (
                    <tr key={recarga.id} className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="py-3 pl-4 rounded-l-lg text-gray-600">{recarga.data}</td>
                      <td className="py-3 text-gray-600">{recarga.cartaoId}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                            <span className="material-symbols-outlined text-sm text-primary">
                              {recarga.tipo === "Residencial"
                                ? "person"
                                : recarga.tipo === "Comercial"
                                  ? "apartment"
                                  : "factory"}
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-800 text-sm font-medium">{recarga.proprietario}</p>
                            <p className="text-xs text-gray-500">{recarga.tipo}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-gray-600">{recarga.quantidade} m³</td>
                      <td className="py-3 text-gray-600">R$ {recarga.valor.toFixed(2).replace(".", ",")}</td>
                      <td className="py-3">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary">
                          {recarga.metodo}
                        </span>
                      </td>
                      <td className="py-3 rounded-r-lg">
                        <div className="flex justify-end space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                            onClick={() => baixarComprovante(recarga.id)}
                          >
                            <span className="material-symbols-outlined text-sm text-gray-600">download</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

