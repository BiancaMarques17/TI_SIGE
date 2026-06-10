'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  options: string[]
  paramKey?: string
  label?: string
}

export default function StatusFilter({ options, paramKey = 'status', label = 'Filtro de status' }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const current = searchParams.get(paramKey) ?? options[0]

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === options[0]) {
      params.delete(paramKey)
    } else {
      params.set(paramKey, value)
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <label className="flex flex-col text-sm text-slate-700">
      {label}
      <select
        value={current}
        onChange={(e) => handleChange(e.target.value)}
        className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#285ebb] focus:ring-2 focus:ring-[#cfe0ff]"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  )
}
