'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export type NaoConformidadeState = { message?: string } | undefined

export async function saveNaoConformidadeAction(
  _state: NaoConformidadeState,
  formData: FormData
): Promise<NaoConformidadeState> {
  const numero_checklist = (formData.get('numero_checklist') as string)?.trim() || null
  const descricao = (formData.get('descricao') as string)?.trim()
  const prioridade = formData.get('prioridade') as string
  const causa_provavel = (formData.get('causa_provavel') as string)?.trim() || null
  const acao_corretiva = (formData.get('acao_corretiva') as string)?.trim() || null
  const responsavel = (formData.get('responsavel') as string)?.trim() || null
  const status = formData.get('status') as string

  if (!descricao) {
    return { message: 'A descrição do erro é obrigatória.' }
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { message: 'Sessão expirada. Faça login novamente.' }

  const { error } = await supabase.from('nao_conformidades').insert({
    user_id: user.id,
    numero_checklist,
    descricao,
    prioridade: prioridade || 'Média',
    causa_provavel,
    acao_corretiva,
    responsavel,
    status: status || 'Aberto',
  })

  if (error) return { message: 'Erro ao salvar. Tente novamente.' }

  redirect('/lista-nao-conformidade')
}
