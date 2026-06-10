-- QualCheck — Schema v2
-- Run this in the Supabase SQL Editor (after schema.sql)

-- Checklists
create table if not exists public.checklists (
  id               uuid default gen_random_uuid() primary key,
  user_id          uuid references auth.users on delete cascade not null,
  veiculo          text not null,
  data_inspecao    date not null,
  inspetor         text not null,
  setor            text not null,
  pintura_ok       boolean not null default true,
  alinhamento_ok   boolean not null default true,
  identificacao_ok boolean not null default true,
  documentacao_ok  boolean not null default true,
  observacoes      text,
  status           text not null default 'Aberto',
  created_at       timestamptz default now()
);

alter table public.checklists enable row level security;

create policy "Authenticated users can read all checklists"
  on public.checklists for select to authenticated using (true);

create policy "Users can insert own checklists"
  on public.checklists for insert to authenticated with check (auth.uid() = user_id);

create policy "Users can update own checklists"
  on public.checklists for update to authenticated using (auth.uid() = user_id);

create policy "Users can delete own checklists"
  on public.checklists for delete to authenticated using (auth.uid() = user_id);

-- Não Conformidades
create table if not exists public.nao_conformidades (
  id               uuid default gen_random_uuid() primary key,
  user_id          uuid references auth.users on delete cascade not null,
  numero_checklist text,
  descricao        text not null,
  prioridade       text not null default 'Média',
  causa_provavel   text,
  acao_corretiva   text,
  responsavel      text,
  status           text not null default 'Aberto',
  created_at       timestamptz default now()
);

alter table public.nao_conformidades enable row level security;

create policy "Authenticated users can read all nao_conformidades"
  on public.nao_conformidades for select to authenticated using (true);

create policy "Users can insert own nao_conformidades"
  on public.nao_conformidades for insert to authenticated with check (auth.uid() = user_id);

create policy "Users can update own nao_conformidades"
  on public.nao_conformidades for update to authenticated using (auth.uid() = user_id);

create policy "Users can delete own nao_conformidades"
  on public.nao_conformidades for delete to authenticated using (auth.uid() = user_id);
