import AppShell from '../../components/AppShell'
import { createClient } from '@/lib/supabase/server'
import ChecklistForm from './ChecklistForm'

export default async function ChecklistPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profile } = user
    ? await supabase.from('profiles').select('nome, setor').eq('id', user.id).single()
    : { data: null }

  const today = new Date().toISOString().split('T')[0]

  return (
    <AppShell
      title="Checklist de Qualidade"
      description="Preencha as informações para registrar a inspeção."
      backHref="/lista-checklist"
    >
      <ChecklistForm
        defaultInspetor={profile?.nome ?? ''}
        defaultSetor={profile?.setor ?? 'Pintura'}
        defaultDate={today}
      />
    </AppShell>
  )
}
