import { NextResponse } from "next/server"
import { subscribeToMailchimp } from "@/lib/mailchimp"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    const result = await subscribeToMailchimp(email)

    if (!result.success) {
      return NextResponse.json({ success: false, message: result.message }, { status: 400 })
    }

    // Send a confirmation email (in a real implementation)
    // This is just a placeholder for the actual email sending logic
    console.log(`Confirmation email would be sent to ${email} from hello@nutranicals.com`)

    return NextResponse.json({ success: true, message: "Suscripción exitosa" }, { status: 200 })
  } catch (error) {
    console.error("Error en la suscripción:", error)
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Error interno del servidor",
      },
      { status: 500 },
    )
  }
}
