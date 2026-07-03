"use server"

import { db } from "@/lib/db"
import { cardSignups } from "@/lib/db/schema"

export type SignupState = {
  success: boolean
  error?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitSignup(_prevState: SignupState, formData: FormData): Promise<SignupState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const country = String(formData.get("country") ?? "").trim()

  if (!name) {
    return { success: false, error: "Please enter your name." }
  }
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  try {
    await db.insert(cardSignups).values({
      name,
      email,
      country: country || null,
    })
    return { success: true }
  } catch (err) {
    console.log("[v0] signup insert error:", err)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
