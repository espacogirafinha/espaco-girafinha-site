import React, { useState } from 'react';
import { CalendarDays, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const timeSlots = [
  'Essencial manhã · 10h30–13h00',
  'Essencial tarde · 14h00–16h30',
  'Essencial tarde · 17h00–19h30',
  'Completo/Premium · 10h00–13h00',
  'Premium · 11h00–14h00',
  'Completo/Premium · 16h00–19h00',
  'Ainda não sei'
];

const timeSlotsByPack = {
  'Pack Essencial — manhã': ['Essencial manhã · 10h30–13h00'],
  'Pack Essencial — tarde': ['Essencial tarde · 14h00–16h30', 'Essencial tarde · 17h00–19h30'],
  'Pack Completo': ['Completo/Premium · 10h00–13h00', 'Completo/Premium · 16h00–19h00'],
  'Pack Premium': ['Completo/Premium · 10h00–13h00', 'Premium · 11h00–14h00', 'Completo/Premium · 16h00–19h00'],
};

const ReservationForm = ({ packages = [] }) => {
  const { openWhatsApp } = useWhatsApp();
  const [form, setForm] = useState({
    parent_name: '',
    child_name: '',
    phone: '',
    email: '',
    event_date: '',
    event_time: '',
    package_name: '',
    guests_count: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const filteredTimeSlots = timeSlotsByPack[form.package_name] || timeSlots;


  const update = (name, value) => setForm((current) => ({ ...current, [name]: value }));

  const buildWhatsAppMessage = () => [
    'Olá! Gostaria de consultar disponibilidade para uma festa no Espaço Girafinha.',
    `Nome: ${form.parent_name}`,
    form.child_name ? `Criança/aniversariante: ${form.child_name}` : '',
    `Telefone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : '',
    form.event_date ? `Data pretendida: ${form.event_date}` : '',
    form.event_time ? `Horário: ${form.event_time}` : '',
    form.package_name ? `Pacote: ${form.package_name}` : '',
    form.guests_count ? `Nº estimado de convidados: ${form.guests_count}` : '',
    'Idade da criança:',
    'Tema da festa:',
    form.message ? `Mensagem: ${form.message}` : '',
  ].filter(Boolean).join('\n');

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    // Abrir WhatsApp diretamente da interação evita bloqueio de popup
    // enquanto a gravação do lead decorre.
    openWhatsApp(buildWhatsAppMessage());

    if (isSupabaseConfigured) {
      const payload = {
        ...form,
        guests_count: form.guests_count ? Number(form.guests_count) : null,
        event_date: form.event_date || null,
        status: 'novo',
      };
      const { error } = await supabase.from('reservation_leads').insert(payload);
      if (error) {
        setStatus({ type: 'error', message: 'Não foi possível guardar o pedido no site. Por favor, conclua o contacto no WhatsApp que abriu.' });
      } else {
        setStatus({ type: 'success', message: 'Pedido registado. A data só fica reservada após confirmação e pagamento do sinal.' });
      }
    }

    setSubmitting(false);
  };

  return (
    <section id="pre-reserva" className="py-12 px-4 bg-[#F0F8F4] md:py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-7 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#378E85]">
            <CalendarDays className="h-4 w-4" /> Pedido de disponibilidade
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:mt-4 md:text-4xl font-bold tracking-tight text-[#29423D]">Vamos descobrir a melhor data para a sua festa</h2>
          <p className="mt-2 text-sm text-[#62766D] md:mt-3 md:text-base">Diga-nos a data e o pack que prefere. Confirmamos as opções disponíveis antes de reservar.</p>
        </div>

        <form onSubmit={submit} className="grid gap-3 rounded-[1.5rem] border border-[#DCEBE4] bg-white p-5 md:gap-4 md:rounded-[2rem] md:p-10 shadow-sm" data-testid="reservation-form">
          <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            <Input aria-label="Nome do responsável" autoComplete="name" placeholder="Nome do responsável" value={form.parent_name} onChange={(e) => update('parent_name', e.target.value)} required />
            <Input aria-label="Nome da criança" placeholder="Nome da criança" value={form.child_name} onChange={(e) => update('child_name', e.target.value)} />
            <Input type="tel" aria-label="Telefone ou WhatsApp" autoComplete="tel" placeholder="Telefone / WhatsApp" value={form.phone} onChange={(e) => update('phone', e.target.value)} required />
            <Input type="email" aria-label="Email" autoComplete="email" placeholder="Email" value={form.email} onChange={(e) => update('email', e.target.value)} />
            <Input type="date" aria-label="Data pretendida para a festa" value={form.event_date} onChange={(e) => update('event_date', e.target.value)} />
            <select aria-label="Horário pretendido" value={form.event_time} onChange={(e) => update('event_time', e.target.value)} className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">Horário pretendido</option>
              {filteredTimeSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
            </select>
            <select aria-label="Pack pretendido" value={form.package_name} onChange={(e) => setForm(current => ({...current, package_name: e.target.value, event_time: ''}))} className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">Pacote pretendido</option>
              {packages.map((pkg) => <option key={pkg.id} value={pkg.name}>{pkg.name}</option>)}
              <option value="Ainda não sei">Ainda não sei</option>
            </select>
            <Input type="number" aria-label="Número estimado de convidados" min="1" placeholder="Nº estimado de convidados" value={form.guests_count} onChange={(e) => update('guests_count', e.target.value)} />
          </div>
          <Textarea aria-label="Mensagem com tema, idade e detalhes da festa" placeholder="Tema, idade, dúvidas ou detalhes importantes" rows={3} value={form.message} onChange={(e) => update('message', e.target.value)} />
          {status.message && (
            <p className={`rounded-md p-3 text-sm ${status.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
              {status.message}
            </p>
          )}
          <p className="text-xs leading-relaxed text-[#68796E]">
            Utilizamos os dados indicados apenas para responder ao seu pedido e organizar o contacto. Consulte a nossa Política de Privacidade no rodapé do site. O envio não confirma a reserva.
          </p>
          <Button type="submit" disabled={submitting} className="bg-[#378E85] hover:bg-[#2B766D] text-white rounded-full py-5 text-sm font-bold md:py-6 md:text-base">
            <MessageCircle className="h-5 w-5 mr-2" /> {submitting ? 'A enviar...' : 'Pedir disponibilidade'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
