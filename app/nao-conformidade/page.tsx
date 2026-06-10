import AppShell from '../../components/AppShell'
import NaoConformidadeForm from './NaoConformidadeForm'

export default function NaoConformidadePage() {
  return (
    <AppShell
      title="Não Conformidade"
      description="Registre a não conformidade encontrada durante a inspeção."
      backHref="/lista-nao-conformidade"
    >
      <NaoConformidadeForm />
    </AppShell>
  )
}
