"use server"

import { revalidatePath } from "next/cache"
import { subscribeToMailchimp } from "@/lib/mailchimp"

export async function subscribeAction(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Email inválido",
    }
  }

  try {
    const result = await subscribeToMailchimp(email)

    if (!result.success) {
      return {
        success: false,
        message: result.message,
      }
    }

    // Send a confirmation email (in a real implementation)
    // This is just a placeholder for the actual email sending logic
    console.log(`Confirmation email would be sent to ${email} from hello@nutranicals.com`)

    revalidatePath("/")
    return {
      success: true,
      message: "Suscripción exitosa",
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error interno del servidor",
    }
  }
}
