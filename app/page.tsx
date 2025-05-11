import { redirect } from "next/navigation"

export default function Home() {
  redirect("/longevity")

  // This code below will never execute due to the redirect above
  return null
}
