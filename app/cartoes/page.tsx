"use client"

import { useEffect, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const API_URL = process.env.NEXT_PUBLIC_API_URL


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
  cartao: Cartao
  quantidade: number
  valor: number
  metodo: string
  data: string
}


export default function CartoesPage() {
const [loading, setLoading] = useState(true)
  
useEffect(() => {
  const fetchDados = async () => {
    try {
      const [cartoesRes, recargasRes] = await Promise.all([
        fetch(`${API_URL}/cards`),
        fetch(`${API_URL}/recargas`),
      ])

      const cartoesData = await cartoesRes.json()
      const recargasData = await recargasRes.json()
console.log("cartoesData", cartoesData)
console.log("recargasData", recargasData)
      setCartoes(cartoesData)
      setRecargas(recargasData)
    } catch (error) {
      console.error("Erro ao buscar dados:", error)
    }finally {
        setLoading(false)
      }
  }

  fetchDados()
}, [])
  // Estado para cartões
  const [cartoes, setCartoes] = useState<Cartao[]>(
  //   [
  //   {
  //     id: "#CARD-001245",
  //     proprietario: "João Silva",
  //     tipo: "Residencial",
  //     saldo: 250,
  //     status: "Ativo",
  //   },
  //   {
  //     id: "#CARD-002187",
  //     proprietario: "Condomínio Central",
  //     tipo: "Comercial",
  //     saldo: 1250,
  //     status: "Ativo",
  //   },
  //   {
  //     id: "#CARD-003421",
  //     proprietario: "Indústria ABC",
  //     tipo: "Industrial",
  //     saldo: 5000,
  //     status: "Saldo Baixo",
  //   },
  // ]
)

  // Estado para recargas
  const [recargas, setRecargas] = useState<Recarga[]>(
  //   [
  //   {
  //     id: "REC-001",
  //     cartaoId: "#CARD-001245",
  //     proprietario: "João Silva",
  //     tipo: "Residencial",
  //     quantidade: 100,
  //     valor: 350,
  //     metodo: "Cartão de Crédito",
  //     data: "21/06/2023",
  //   },
  //   {
  //     id: "REC-002",
  //     cartaoId: "#CARD-002187",
  //     proprietario: "Condomínio Central",
  //     tipo: "Comercial",
  //     quantidade: 500,
  //     valor: 1750,
  //     metodo: "PIX",
  //     data: "18/06/2023",
  //   },
  //   {
  //     id: "REC-003",
  //     cartaoId: "#CARD-003421",
  //     proprietario: "Indústria ABC",
  //     tipo: "Industrial",
  //     quantidade: 2000,
  //     valor: 7000,
  //     metodo: "Boleto",
  //     data: "15/06/2023",
  //   },
  // ]
)

  // Estado para formulário de recarga
  const [formRecarga, setFormRecarga] = useState({
    cartaoId: "",
    quantidade: "",
    valor: "",
    metodo: "",
  })

  // Estado para formulário de novo cartão
  const [formNovoCartao, setFormNovoCartao] = useState({
    proprietario: "",
    tipo: "",
    uid: "",
    status: "Ativo",
    saldoInicial: "",
  })

  // Função para adicionar recarga
  const adicionarRecarga = async () => {
    if (
      !formRecarga.cartaoId ||
      !formRecarga.quantidade ||
      !formRecarga.valor ||
      !formRecarga.metodo
    ) {
      alert("Preencha todos os campos obrigatórios")
      return
    }
console.log('valores', formRecarga)
    try {
      const res = await fetch(`${API_URL}/recargas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartaoId: formRecarga.cartaoId,
          quantidade: Number(formRecarga.quantidade),
          valor: Number(formRecarga.valor),
          metodo: formRecarga.metodo,
        }),
      })

      if (res.ok) {
        const nova = await res.json()
        setRecargas([nova, ...recargas])
        setFormRecarga({ cartaoId: "", quantidade: "", metodo: "", valor: "" })

        // Atualizar saldo localmente
        const novosCartoes = cartoes.map((c) =>
          c.id === nova.cartaoId
            ? {
                ...c,
                saldo: c.saldo + nova.quantidade,
                status:
                  c.saldo + nova.quantidade < 100 ? "Saldo Baixo" : "Ativo",
              }
            : c
        )
        setCartoes(novosCartoes)

        alert(`Recarga realizada com sucesso!`)
      } else {
        alert("Erro ao realizar recarga")
      }
    } catch (err) {
      console.error(err)
      alert("Erro ao conectar com o servidor")
    }
  }


  // Função para criar novo cartão
  const criarNovoCartao = async () => {
    if (
      !formNovoCartao.proprietario ||
      !formNovoCartao.tipo ||
      !formNovoCartao.uid ||
      !formNovoCartao.status ||
      !formNovoCartao.saldoInicial
    ) {
      alert("Preencha todos os campos obrigatórios")
      return
    }

    const novoCartao = {
      uid:formNovoCartao.uid,
      proprietario: formNovoCartao.proprietario,
      tipo: formNovoCartao.tipo,
      status: formNovoCartao.status,
      saldo: Number(formNovoCartao.saldoInicial),
    }
console.log('novoCartao', novoCartao)
    try {
      const res = await fetch(`${API_URL}/cards`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoCartao),
      })

      if (res.ok) {
        const data = await res.json()
        console.log('data', data)
        setCartoes([data.card,...cartoes])
        setFormNovoCartao({ proprietario: "", tipo: "", saldoInicial: "", uid: "", status: "Ativo" })
        alert(`Cartão criado com sucesso para ${data.proprietario}`)
      } else {
        alert("Erro ao criar cartão")
      }
    } catch (err) {
      console.error(err)
      alert("Erro ao conectar com o servidor")
    }
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
      document
        .getElementById("form-recarga")
        ?.scrollIntoView({ behavior: "smooth" })

      alert(
        `Cartão selecionado! Preencha a quantidade e o método de pagamento para adicionar saldo ao cartão de ${cartao.proprietario}`
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
      `O cartão de ${cartao?.proprietario} foi ${
        cartao?.status === "Bloqueado" ? "bloqueado" : "desbloqueado"
      } com sucesso`
    )
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
                <CardTitle className="text-lg font-bold text-gray-800">
                  Cartões Ativos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-separate border-spacing-y-2">
                    <thead>
                      <tr className="text-gray-500 text-xs">
                        <th className="text-left pl-4 pb-2 font-medium">
                          ID DO CARTÃO
                        </th>
                        <th className="text-left pb-2 font-medium">
                          PROPRIETÁRIO
                        </th>
                        <th className="text-left pb-2 font-medium">SALDO</th>
                        <th className="text-left pb-2 font-medium">STATUS</th>
                        <th className="text-right pr-4 pb-2 font-medium">
                          AÇÕES
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td
                            colSpan={5}
                            className="text-center py-4 text-gray-500"
                          >
                            Carregando cartões...
                          </td>
                        </tr>
                      ) : cartoes.length > 0 ? (
                        cartoes.map((cartao) => (
                          <tr
                            key={cartao.id}
                            className="bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <td className="py-3 pl-4 rounded-l-lg text-gray-600">
                              {cartao.uid}
                            </td>
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
                                  <p className="text-gray-800 text-sm font-medium">
                                    {cartao.proprietario}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {cartao.tipo}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 text-gray-600">
                              {cartao.saldo} L
                            </td>
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
                                  <span className="material-symbols-outlined text-sm text-primary">
                                    add
                                  </span>
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                                  onClick={() => bloquearCartao(cartao.id)}
                                >
                                  <span className="material-symbols-outlined text-sm text-gray-600">
                                    {cartao.status === "Bloqueado"
                                      ? "lock_open"
                                      : "block"}
                                  </span>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={5}
                            className="text-center py-4 text-gray-500"
                          >
                            Nenhum cartão encontrado.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white" id="form-recarga">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">
                  Adicionar Recarga
                </CardTitle>
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
                      onChange={(e) =>
                        setFormRecarga({
                          ...formRecarga,
                          cartaoId: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Quantidade (L)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0"
                      min="1"
                      value={formRecarga.quantidade}
                      onChange={(e) =>
                        setFormRecarga({
                          ...formRecarga,
                          quantidade: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="payment">Método de Pagamento</Label>
                    <select
                      id="payment"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formRecarga.metodo}
                      onChange={(e) =>
                        setFormRecarga({
                          ...formRecarga,
                          metodo: e.target.value,
                        })
                      }
                    >
                      <option value="">Selecione um método</option>
                      <option value="Cartão de Crédito">
                        Cartão de Crédito
                      </option>
                      <option value="Cartão de Débito">Cartão de Débito</option>
                      <option value="PIX">PIX</option>
                      <option value="Boleto">Boleto</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Valor Pago (kz)</Label>
                    <Input
                      id="valor"
                      type="number"
                      placeholder="0"
                      min="1"
                      value={formRecarga.valor}
                      onChange={(e) =>
                        setFormRecarga({
                          ...formRecarga,
                          valor: e.target.value,
                        })
                      }
                    />
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary-700"
                    type="submit"
                  >
                    Adicionar Recarga
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">
                  Novo Cartão
                </CardTitle>
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
                      onChange={(e) =>
                        setFormNovoCartao({
                          ...formNovoCartao,
                          proprietario: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="owner-name">UID do cartão</Label>
                    <Input
                      id="owner-name"
                      placeholder="Ex: 001245"
                      value={formNovoCartao.uid}
                      onChange={(e) =>
                        setFormNovoCartao({
                          ...formNovoCartao,
                          uid: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="owner-type">Tipo de Proprietário</Label>
                    <select
                      id="owner-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formNovoCartao.tipo}
                      onChange={(e) =>
                        setFormNovoCartao({
                          ...formNovoCartao,
                          tipo: e.target.value,
                        })
                      }
                    >
                      <option value="">Selecione um tipo</option>
                      <option value="Residencial">Residencial</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="initial-amount">
                      Quantidade Inicial (L)
                    </Label>
                    <Input
                      id="initial-amount"
                      type="number"
                      placeholder="0"
                      min="1"
                      value={formNovoCartao.saldoInicial}
                      onChange={(e) =>
                        setFormNovoCartao({
                          ...formNovoCartao,
                          saldoInicial: e.target.value,
                        })
                      }
                    />
                  </div>

                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90"
                    type="submit"
                  >
                    Criar Cartão
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="w-full bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-800">
              Histórico de Recargas
            </CardTitle>
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
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center py-4 text-gray-500"
                      >
                        Carregando recargas...
                      </td>
                    </tr>
                  ) : recargas.length > 0 ? (
                    recargas.map((recarga) => (
                      <tr
                        key={recarga.id}
                        className="bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <td className="py-3 pl-4 rounded-l-lg text-gray-600">
                          {recarga.data}
                        </td>
                        <td className="py-3 text-gray-600">
                          {recarga?.cartao?.uid}
                        </td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                              <span className="material-symbols-outlined text-sm text-primary">
                                {recarga.cartao.tipo === "Residencial"
                                  ? "person"
                                  : recarga.tipo === "Comercial"
                                  ? "apartment"
                                  : "factory"}
                              </span>
                            </div>
                            <div>
                              <p className="text-gray-800 text-sm font-medium">
                                {recarga.cartao.proprietario}
                              </p>
                              <p className="text-xs text-gray-500">
                                {recarga.tipo}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-gray-600">
                          {recarga.quantidade} L
                        </td>
                        <td className="py-3 text-gray-600">
                         KZ {recarga.valor.toFixed(2).replace(".", ",")}
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary">
                            {recarga.metodo}
                          </span>
                        </td>
                       
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center py-4 text-gray-500"
                      >
                        Nenhuma recarga encontrada.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
