import React, { useState } from 'react';
import { CalendarDays, CheckCircle2, MessageCircle, RotateCcw } from 'lucide-react';
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

const initialForm = {
  parent_name: '',
  child_name: '',
  phone: '',
  email: '',
  event_date: '',
  event_time: '',
  package_name: '',
  guests_count: '',
  message: '',
};

const ReservationForm = ({ packages = [] }) => {
  const { openWhatsApp } = useWhatsApp();
  const [form, setForm] = useState(initialForm);
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

  const resetForm = () => {
    setForm({ ...initialForm });
    setStatus({ type: '', message: '' });
  };

  const submit = async (event) => {
    event.preventDefault();
    if (submitting || status.type === 'success') return;
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    // O WhatsApp é uma opção adicional, não uma condição para registar um pedido.
    // Só uma resposta bem-sucedida do Supabase dá origem à confirmação.
    if (!isSupabaseConfigured) {
      setStatus({
        type: 'error',
        message: 'De momento não é possível registar o pedido no site. Pode enviar-nos os dados diretamente pelo WhatsApp.'
      });
      setSubmitting(false);
      return;
    }

    const payload = {
      ...form,
      guests_count: form.guests_count ? Number(form.guests_count) : null,
      event_date: form.event_date || null,
      status: 'novo',
      source: 'website',
    };

    try {
      const { error } = await supabase.from('reservation_leads').insert(payload);
      if (error) throw error;
      setStatus({
        type: 'success',
        message: 'Recebemos o seu pedido. Vamos entrar em contacto para confirmar a disponibilidade.'
      });
    } catch (error) {
      console.error('Falha ao registar pedido de disponibilidade:', error);
      setStatus({
        type: 'error',
        message: 'Não conseguimos registar o pedido. Pode tentar novamente ou enviar-nos uma mensagem pelo WhatsApp.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="pre-reserva" className="py-12 px-4 bg-[#F0F8F4] md:py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-7 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#378E85]">
            <CalendarDays className="h-4 w-4" /> Pedido de disponibilidade
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:mt-4 md:text-4xl font-bold tracking-tight text-[#29423D]">
            {status.type === 'success' ? 'Pedido recebido com sucesso!' : 'Vamos descobrir a melhor data para a sua festa'}
          </h2>
          {status.type !== 'success' && (
            <p className="mt-2 text-sm text-[#62766D] md:mt-3 md:text-base">Diga-nos a data e o pack que prefere. Confirmamos as opções disponíveis antes de reservar.</p>
          )}
        </div>

        {status.type === 'success' ? (
          <div
            role="status"
            aria-live="polite"
            data-testid="reservation-success"
            className="mx-auto max-w-2xl rounded-[1.5rem] border border-[#B7DED4] bg-white px-6 py-8 text-center shadow-sm md:rounded-[2rem] md:px-10 md:py-12"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F7F0] text-[#378E85]">
              <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-[#29423D] md:text-2xl">O seu pedido foi registado!</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#567168] md:text-base">
              {status.message}
            </p>
            {(form.event_date || form.package_name) && (
              <div className="mx-auto mt-5 max-w-md rounded-xl bg-[#F1F9F5] px-4 py-3 text-sm text-[#42695E]">
                {form.package_name && <p><strong>Pack:</strong> {form.package_name}</p>}
                {form.event_date && (
                  <p className="mt-1"><strong>Data pretendida:</strong> {new Date(form.event_date + 'T12:00:00').toLocaleDateString('pt-PT')}</p>
                )}
              </div>
            )}
            <p className="mt-5 text-sm leading-relaxed text-[#68796E]">
              A data ainda não está reservada. A reserva só é confirmada após validação da disponibilidade e pagamento do sinal de 20%.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button type="button" onClick={() => openWhatsApp(buildWhatsAppMessage())}
                className="min-h-11 rounded-full bg-[#378E85] px-6 text-sm font-bold text-white hover:bg-[#2B766D]">
                <MessageCircle className="mr-2 h-4 w-4" /> Falar pelo WhatsApp
              </Button>
              <Button type="button" variant="outline" onClick={resetForm}
                className="min-h-11 rounded-full border-[#B6D9D0] px-6 text-sm font-semibold text-[#347F75] hover:bg-[#F1F9F5]">
                <RotateCcw className="mr-2 h-4 w-4" /> Fazer novo pedido
              </Button>
            </div>
          </div>
        ) : (
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
          <p className="text-xs leading-relaxed text-[#68796E]">
            Utilizamos os dados indicados apenas para responder ao seu pedido e organizar o contacto. Consulte a nossa Política de Privacidade no rodapé do site. O envio não confirma a reserva.
          </p>
          <Button type="submit" disabled={submitting} className="bg-[#378E85] hover:bg-[#2B766D] text-white rounded-full py-5 text-sm font-bold md:py-6 md:text-base">
            <MessageCircle className="h-5 w-5 mr-2" /> {submitting ? 'A enviar...' : 'Pedir disponibilidade'}
          </Button>
          {status.type === 'error' && (
            <div role="alert" aria-live="assertive" data-testid="reservation-form-error"
              className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium leading-relaxed text-red-800">
              <p>{status.message}</p>
              <button type="button" onClick={() => openWhatsApp(buildWhatsAppMessage())}
                className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-[#347F75] shadow-sm">
                <MessageCircle className="h-4 w-4" /> Enviar pelo WhatsApp
              </button>
            </div>
          )}
        </form>
        )}
      </div>
    </section>
  );
};

export default ReservationForm;
