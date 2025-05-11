"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Ocurrió un error al suscribirte")
      }

      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro newsletter.",
      })
      setEmail("")
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Ocurrió un error al suscribirte",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center">
      <div className="mr-2 whitespace-nowrap">
        <span className="text-sm font-medium text-white">Suscríbete al Newsletter</span>
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <Input
          className="flex h-10 w-full rounded-l-md border-0 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none"
          placeholder="Ingresa tu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="rounded-l-none bg-white text-[#1A7A8B] hover:bg-gray-100" disabled={isLoading}>
          {isLoading ? "..." : "Enviar"}
        </Button>
      </form>
    </div>
  )
}
