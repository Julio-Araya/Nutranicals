// Este archivo proporciona un shim para useEffectEvent
import { useCallback } from "react"

// Exportar useEffectEvent como un alias de useCallback
export const useEffectEvent = useCallback

// Reexportar todo desde react
export * from "react"
