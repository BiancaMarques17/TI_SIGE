'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export type ChecklistState = { message?: string } | undefined

export async function saveChecklistAction(
  _state: ChecklistState,
  formData: FormData
): Promise<ChecklistState> {
  const veiculo = (formData.get('veiculo') as string)?.trim()
  const data_inspecao = formData.get('data_inspecao') as string
  const inspetor = (formData.get('inspetor') as string)?.trim()
  const setor = formData.get('setor') as string
  const observacoes = (formData.get('observacoes') as string)?.trim() || null
  const status = formData.get('status') as string

  const pintura_ok = formData.get('pintura_ok') === 'Sim'
  const alinhamento_ok = formData.get('alinhamento_ok') === 'Sim'
  const identificacao_ok = formData.get('identificacao_ok') === 'Sim'
  const documentacao_ok = formData.get('documentacao_ok') === 'Sim'

  if (!veiculo || !data_inspecao || !inspetor || !setor) {
    return { message: 'Preencha os campos obrigatórios.' }
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { message: 'Sessão expirada. Faça login novamente.' }

  const { error } = await supabase.from('checklists').insert({
    user_id: user.id,
    veiculo,
    data_inspecao,
    inspetor,
    setor,
    pintura_ok,
    alinhamento_ok,
    identificacao_ok,
    documentacao_ok,
    observacoes,
    status: status || 'Aberto',
  })

  if (error) return { message: 'Erro ao salvar checklist. Tente novamente.' }

  redirect('/lista-checklist')
}
