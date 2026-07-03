"use client"

import { useActionState } from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
import { submitSignup, type SignupState } from "@/app/actions/signup"

type SignupFormLabels = {
  title: string
  subtitle: string
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  country: string
  countryPlaceholder: string
  submit: string
  submitting: string
  successTitle: string
  successDesc: string
}

const initialState: SignupState = { success: false }

export function SignupForm({ labels }: { labels: SignupFormLabels }) {
  const [state, formAction, isPending] = useActionState(submitSignup, initialState)

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
          <CheckCircle className="h-7 w-7 text-[#2563EB]" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{labels.successTitle}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-500">{labels.successDesc}</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">{labels.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-500">{labels.subtitle}</p>

      <form action={formAction} className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-slate-700">
            {labels.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={labels.namePlaceholder}
            className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700">
            {labels.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={labels.emailPlaceholder}
            className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="country" className="text-sm font-semibold text-slate-700">
            {labels.country}
          </label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder={labels.countryPlaceholder}
            className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {state.error ? <p className="text-sm text-red-500">{state.error}</p> : null}

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? labels.submitting : labels.submit}
          {!isPending ? <ArrowRight className="h-4 w-4" /> : null}
        </button>
      </form>
    </div>
  )
}
