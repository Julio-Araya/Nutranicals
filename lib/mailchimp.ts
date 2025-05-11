// Asegurarnos de que no se esté utilizando useEffectEvent

export async function subscribeToMailchimp(email: string) {
  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const DATACENTER = API_KEY?.split("-")[1] // Ejemplo: us6, us10, etc.

    if (!API_KEY || !LIST_ID || !DATACENTER) {
      throw new Error("Faltan configuraciones de Mailchimp")
    }

    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {},
    }

    const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    if (response.status >= 400) {
      if (responseData.title === "Member Exists") {
        return {
          success: false,
          message: "Este email ya está suscrito",
        }
      }
      throw new Error(responseData.detail || "Error al suscribirse")
    }

    return {
      success: true,
      message: "Suscripción exitosa",
    }
  } catch (error) {
    console.error("Error en la suscripción:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error interno del servidor",
    }
  }
}
