"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"

type ToastProps = {
  id?: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

type ToastContextType = {
  toast: (props: ToastProps) => void
  dismissToast: (id: string) => void
  toasts: ToastProps[]
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    const id = props.id || String(Date.now())
    setToasts((prevToasts) => [...prevToasts, { ...props, id }])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      dismissToast(id)
    }, 5000)
  }

  const dismissToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast, dismissToast, toasts }}>
      {children}
      <div className="fixed bottom-0 right-0 p-4 space-y-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-lg max-w-md transform transition-all duration-300 ease-in-out translate-y-0 opacity-100 ${
              toast.variant === "destructive"
                ? "bg-destructive text-white"
                : "bg-white text-gray-800 border border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                {toast.title && <h3 className="font-medium">{toast.title}</h3>}
                {toast.description && <p className="text-sm mt-1">{toast.description}</p>}
              </div>
              <button onClick={() => dismissToast(toast.id!)} className="ml-4 text-gray-500 hover:text-gray-700">
                ×
              </button>
            </div>
            {toast.action && <div className="mt-2">{toast.action}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const toast = (props: ToastProps) => {
  // This is a fallback for when the component is used outside of the provider
  // In a real app, you'd want to handle this better
  console.log("Toast:", props)
  alert(`${props.title}: ${props.description}`)
}

