"use client"

import { useState, useTransition } from "react"

// Esta es una implementación personalizada para reemplazar useActionState
export function useActionState<T, U>(action: (formData: FormData) => Promise<T>) {
  const [state, setState] = useState<T | null>(null)
  const [isPending, startTransition] = useTransition()

  const actionWithState = (formData: FormData) => {
    startTransition(async () => {
      const result = await action(formData)
      setState(result)
    })
  }

  return [state, actionWithState, isPending] as const
}
