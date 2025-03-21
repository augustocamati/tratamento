"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { MenuOne } from "@/components/menu-one"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Trash2 } from "lucide-react"

interface Usuario {
  id: string
  nome: string
  email: string
  funcao: string
  acesso: string
}

const usuariosIniciais: Usuario[] = [
  { id: "1", nome: "João Silva", email: "joao@exemplo.com", funcao: "Administrador", acesso: "Total" },
  { id: "2", nome: "Maria Oliveira", email: "maria@exemplo.com", funcao: "Usuário", acesso: "Parcial" },
  { id: "3", nome: "Pedro Santos", email: "pedro@exemplo.com", funcao: "Usuário", acesso: "Parcial" },
  { id: "4", nome: "Ana Costa", email: "ana@exemplo.com", funcao: "Gerente", acesso: "Avançado" },
  { id: "5", nome: "Carlos Ferreira", email: "carlos@exemplo.com", funcao: "Usuário", acesso: "Básico" },
]

export default function Usuario() {
  const [usuarios, setUsuarios] = useState<Usuario[]>(usuariosIniciais)
  const [novoUsuario, setNovoUsuario] = useState({ nome: "", email: "", funcao: "", acesso: "" })

  const adicionarUsuario = () => {
    if (novoUsuario.nome && novoUsuario.email && novoUsuario.funcao && novoUsuario.acesso) {
      setUsuarios([...usuarios, { ...novoUsuario, id: Date.now().toString() }])
      setNovoUsuario({ nome: "", email: "", funcao: "", acesso: "" })
    }
  }

  const removerUsuario = (id: string) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id))
  }

  return (
    <div>
      <DashboardLayout sidebar={<MenuOne />}>
        <div className="p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-6 text-primary">Gerenciamento de Usuários</h1>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-blue-700">Adicionar Novo Usuário</h2>
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                placeholder="Nome"
                value={novoUsuario.nome}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                className="md:w-1/4"
              />
              <Input
                placeholder="Email"
                value={novoUsuario.email}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                className="md:w-1/4"
              />
              <Input
                placeholder="Função"
                value={novoUsuario.funcao}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, funcao: e.target.value })}
                className="md:w-1/4"
              />
              <Input
                placeholder="Nível de Acesso"
                value={novoUsuario.acesso}
                onChange={(e) => setNovoUsuario({ ...novoUsuario, acesso: e.target.value })}
                className="md:w-1/4"
              />
              <Button onClick={adicionarUsuario} className="mt-2 md:mt-0">
                <PlusCircle className="mr-2 h-4 w-4" /> Adicionar
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableCaption>Lista de usuários no sistema.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead>Acesso</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usuarios.map((usuario) => (
                  <TableRow key={usuario.id}>
                    <TableCell className="font-medium">{usuario.nome}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell>{usuario.funcao}</TableCell>
                    <TableCell>{usuario.acesso}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="destructive" size="sm" onClick={() => removerUsuario(usuario.id)}>
                        <Trash2 className="mr-2 h-4 w-4" /> Remover
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total de Usuários</TableCell>
                  <TableCell className="text-right">{usuarios.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

