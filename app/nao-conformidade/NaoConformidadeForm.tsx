'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { saveNaoConformidadeAction } from '../actions/nao-conformidade'

const inputCls = 'mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#285ebb] focus:ring-2 focus:ring-[#cfe0ff] w-full'

export default function NaoConformidadeForm() {
  const [state, action, pending] = useActionState(saveNaoConformidadeAction, undefined)

  return (
    <div className="rounded-[30px] bg-white/95 p-5 shadow-sm">
      <form action={action} className="space-y-4">
        <label className="flex flex-col text-sm text-slate-700">
          Número do Checklist
          <input name="numero_checklist" type="text" placeholder="00021 - Porta Dianteira Esquerda" className={inputCls} />
        </label>

        <label className="flex flex-col text-sm text-slate-700">
          Descrição do Erro <span className="text-[#f23e5c]">*</span>
          <textarea name="descricao" rows={4} required placeholder="Descreva o erro encontrado..." className={inputCls} />
        </label>

        <label className="flex flex-col text-sm text-slate-700">
          Prioridade
          <select name="prioridade" className={inputCls}>
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>
        </label>

        <label className="flex flex-col text-sm text-slate-700">
          Causa provável
          <input name="causa_provavel" type="text" placeholder="Descreva a causa provável..." className={inputCls} />
        </label>

        <label className="flex flex-col text-sm text-slate-700">
          Ação corretiva
          <textarea name="acao_corretiva" rows={3} placeholder="Ação corretiva planejada..." className={inputCls} />
        </label>

        <label className="flex flex-col text-sm text-slate-700">
          Responsável pela correção
          <input name="responsavel" type="text" placeholder="Nome do responsável" className={inputCls} />
        </label>

        <label className="flex flex-col text-sm text-slate-700 max-w-[50%]">
          Status
          <select name="status" className={inputCls}>
            <option>Aberto</option>
            <option>Em andamento</option>
            <option>Concluído</option>
          </select>
        </label>

        {state?.message && (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-[#f23e5c]">{state.message}</p>
        )}

        <div className="grid grid-cols-2 gap-4 pt-2">
          <Link href="/lista-nao-conformidade" className="rounded-2xl bg-[#f23e5c] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-red-600 transition-colors">
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={pending}
            className="rounded-2xl bg-[#52ad1c] px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-colors disabled:opacity-60"
          >
            {pending ? 'Salvando…' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  )
}
