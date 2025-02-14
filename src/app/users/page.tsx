"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { MenuOne } from "@/components/menu-one"
import {
  Table,
  TableBody,

  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Trash2 } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  role: string
}

const initialUsers: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", role: "Manager" },
  {
    id: "5",
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "User",
  },
]

export default function User() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" })

  const addUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, { ...newUser, id: Date.now().toString() }])
      setNewUser({ name: "", email: "", role: "" })
    }
  }

  const removeUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div>
      <DashboardLayout sidebar={<MenuOne />}>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">User Management</h1>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Add New User</h2>
            
             
            <div className="flex gap-2">
              <Input
                placeholder="Name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
              <Input
                placeholder="Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
              <Input
              
                placeholder="Role"
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              />
              <Button onClick={addUser}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add User
              </Button>
            </div>
          </div>

          <Table>
            
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeUser(user.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total Users</TableCell>
                <TableCell className="text-right">{users.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </DashboardLayout>
    </div>
  )
}
