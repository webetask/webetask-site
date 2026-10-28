-- Contact form messages from webetask.app
-- Run once in Supabase: Dashboard > SQL Editor > New query > paste > Run.

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 120),
  email       text not null check (char_length(email) between 3 and 200),
  team_size   text check (char_length(team_size) <= 40),
  topic       text check (char_length(topic) <= 60),
  message     text not null check (char_length(message) between 10 and 5000),
  ip          text check (char_length(ip) <= 64),
  handled     boolean not null default false
);

-- Lock the table down. RLS on, and the ONLY thing the public (anon) key
-- may do is insert a new row. It can never read, change or delete messages.
alter table public.contact_messages enable row level security;

drop policy if exists "website can insert contact messages" on public.contact_messages;
create policy "website can insert contact messages"
  on public.contact_messages
  for insert
  to anon
  with check (handled = false);

-- Make sure anon has no other rights on this table.
revoke select, update, delete on public.contact_messages from anon;
grant insert on public.contact_messages to anon;

-- You read messages in the dashboard: Table Editor > contact_messages.
