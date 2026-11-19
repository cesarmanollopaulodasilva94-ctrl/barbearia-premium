import { useState } from 'react'
import { CalendarDays, ChevronRight, Clock3, Instagram, MapPin, Menu, Phone, Scissors, Star, X } from 'lucide-react'

const WHATSAPP_NUMBER = '5511999999999'

const services = [
  { name: 'Corte masculino', description: 'Corte clássico ou moderno, finalizado com precisão.', price: 'R$ 60' },
  { name: 'Corte degradê', description: 'Fade personalizado com transição limpa e acabamento impecável.', price: 'R$ 70' },
  { name: 'Barba completa', description: 'Ritual de barba com toalha quente e produtos premium.', price: 'R$ 50' },
  { name: 'Corte + barba', description: 'A combinação completa para renovar seu visual.', price: 'R$ 110' },
  { name: 'Sobrancelha', description: 'Design masculino com alinhamento natural e preciso.', price: 'R$ 25' },
  { name: 'Pigmentação', description: 'Cobertura uniforme e resultado natural para cabelo ou barba.', price: 'R$ 80' },
  { name: 'Hidratação capilar', description: 'Tratamento nutritivo para força, brilho e maciez.', price: 'R$ 45' }
]

const gallery = [
  ['https://images.unsplash.com/photo-1621605815971-fbc98d665033', 'Corte masculino'],
  ['https://images.unsplash.com/photo-1503951914875-452162b0f3f1', 'Barba completa'],
  ['https://images.unsplash.com/photo-1599351431202-1e0f0137899a', 'Ambiente premium'],
  ['https://images.unsplash.com/photo-1622296089863-eb7fc530daa8', 'Corte degradê'],
  ['https://images.unsplash.com/photo-1585747860715-2ba37e788b70', 'Acabamento'],
  ['https://images.unsplash.com/photo-1622287162716-f311baa1a2b8', 'Estilo clássico']
]

const testimonials = [
  ['Ricardo M.', 'Atendimento impecável e muito cuidado com cada detalhe. Meu corte ficou exatamente como eu queria.'],
  ['André L.', 'Ambiente elegante, profissionais excelentes e pontualidade. Já virou meu lugar de confiança.'],
  ['Paulo S.', 'Experiência premium do início ao fim. O atendimento de barba é simplesmente fantástico.']
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '' })

  const setField = (key: keyof typeof form, value: string) => setForm({ ...form, [key]: value })

  const submitBooking = (event: React.FormEvent) => {
    event.preventEvent?.()
  }

  const bookingMessage = `Olá! Gostaria de agendar um horário na barbearia.\n\nNome: ${form.name}\nTelefone: ${form.phone}\nServiço: ${form.service}\nData: ${form.date}\nHorário: ${form.time}`

  const handleBooking = (event: React.FormEvent) => {
    event.preventDefault()
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`, '_blank', 'noopener,noreferrer')
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Navegação principal">
          <button onClick={() => scrollTo('inicio')} className="flex items-center gap-3" aria-label="Ir para o início">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/70 text-gold"><Scissors size={20} /></span>
            <span className="text-left font-serif text-xl leading-none tracking-[0.12em]">ELITE<span className="block text-[9px] tracking-[0.38em] text-gold">BARBER CLUB</span></span>
          </button>
          <div className="hidden items-center gap-8 text-xs font-semibold tracking-[0.16em] text-white/75 lg:flex">
            {['Sobre', 'Serviços', 'Galeria', 'Avaliações', 'Contato'].map((item) => (
              <button key={item} onClick={() => scrollTo(item === 'Sobre' ? 'sobre' : item === 'Contato' ? 'contato' : item.toLowerCase())} className="transition hover:text-gold">{item.toUpperCase()}</button>
            ))}
            <button onClick={() => scrollTo('agendamento')} className="border border-gold px-5 py-3 text-gold transition hover:bg-gold hover:text-black">AGENDAR</button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 lg:hidden" aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
          {['Sobre', 'Serviços', 'Galeria', 'Avaliações', 'Contato'].map((item) => <button key={item} onClick={() => scrollTo(item === 'Sobre' ? 'sobre' : item === 'Contato' ? 'contato' : item.toLower()} className="block w-full border-b border-white/5 py-4 text-left text-sm tracking-widest">{item.toUpperCase()}</button>)}
          <button onClick={() => scrollTo('agendamento')} className="mt-5 w-full bg-gold py-4 font-bold text-black">AGENDAR HORÁRIO</button>
        </div>}
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-center pt-[76px]">
        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000&q=85" alt="Interior sofisticado de barbearia" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.35em] text-gold"><span className="h-px w-10 bg-gold" />BARBEARIA DE ALTO PADRÃO</p>
            <h1 className="font-serif text-6xl leading-[0.92] sm:text-7xl lg:text-[92px]">Seu estilo<br /><em className="text-gold">merece o melhor.</em></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">Cortes exclusivos, barba impecável e atendimento personalizado para homens que valorizam presença e detalhe.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollTo('agendamento')} className="group flex items-center justify-center gap-3 bg-gold px-7 py-4 text-sm font-bold tracking-widest text-black transition hover:bg-white">AGENDAR HORÁRIO <ChevronRight size={18} className="transition group-hover:translate-x-1" /></button>
              <button onClick={() => scrollTo('serviços')} className="border border-white/30 px-7 py-4 text-sm font-bold tracking-widest transition hover:border-gold hover:text-gold">CONHEÇA NOSSOS SERVIÇOS</button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[['10+', 'Anos de experiência'], ['5★', 'Avaliação média'], ['1.500+', 'Clientes atendidos'], ['100%', 'Compromisso']].map(([value, label]) => <div key={label} className="px-4 py-8 text-center"><strong className="font-serif text-3xl text-gold">{value}</strong><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50">{label}</p></div>)}
        </div>
      </section>

      <section id="sobre" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[500px]">
          <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85" alt="Cabeleireiro realizando atendimento profissional" className="absolute right-0 h-[430px] w-[82%] object-cover" />
          <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=85" alt="Detalhe de corte masculino" className="absolute bottom-0 left-0 h-[220px] w-[48%] border-[8px] border-ink object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-gold">NOSSA ESSÊNCIA</p>
          <h2 className="font-serif text-5xl leading-tight sm:text-6xl">Mais que cortes.<br />Uma assinatura de estilo.</h2>
          <p className="mt-7 leading-7 text-white/65">Texto de apresentação editável: aqui você contará a história da sua barbearia, sua filosofia de atendimento e o que torna cada visita uma experiência única.</p>
          <p className="mt-4 leading-7 text-white/65">Trabalhamos com técnica, escuta ativa e acabamento impecável. Cada serviço é pensado para respeitar o seu estilo e realçar a sua identidade.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border-l border-gold pl-4"><strong className="block font-serif text-2xl">Excelência</strong><span className="text-sm text-white/50">Em cada detalhe</span></div>
            <div className="border-l border-gold pl-4"><strong className="block font-serif text-2xl">Confiança</strong><span className="text-sm text-white/50">Profissionais qualificados</span></div>
          </div>
        </div>
      </section>

      <section id="serviços" className="bg-[#0d0d0d] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center"><p className="text-xs font-bold tracking-[0.3em] text-gold">MENU DE SERVIÇOS</p><h2 className="mt-3 font-serif text-5xl sm:text-6xl">Escolha sua experiência</h2></div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => <article key={service.name} className="group min-h-[230px] bg-charcoal p-8 transition hover:bg-gold hover:text-black">
              <div className="mb-8 flex items-center justify-between"><span className="text-xs tracking-[0.2em] opacity-50">0{index + 1}</span><Scissors size={20} className="text-gold group-hover:text-black" /></div>
              <h3 className="font-serif text-2xl">{service.name}</h3><p className="mt-3 min-h-[48px] text-sm leading-6 opacity-55">{service.description}</p><strong className="mt-5 block font-serif text-3xl text-gold group-hover:text-black">{service.price}</strong>
            </article>)}
          </div>
        </div>
      </section>

      <section id="galeria" className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-bold tracking-[0.3em] text-gold">PORTFÓLIO</p><h2 className="mt-3 font-serif text-5xl sm:text-6xl">Nossos trabalhos</h2></div><button onClick={() => scrollTo('agendamento')} className="text-sm font-bold text-gold">QUERO UM CORTE ASSIM <span aria-hidden="true">→</span></button></div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">{gallery.map(([src, label], index) => <button key={label} className={`group relative overflow-hidden ${index === 0 || index === 5 ? 'row-span-2' : ''}`} aria-label={label}><img src={`${src}?auto=format&fit=crop&w=900&q=80`} alt={label} className="h-full min-h-[220px] w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-5 opacity-0 transition group-hover:opacity-100"><span className="text-sm font-semibold">{label}</span></div></button>)}</div>
      </div></section>

      <section id="agendamento" className="border-y border-white/10 bg-charcoal px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-bold tracking-[0.3em] text-gold">RESERVE SUA VISITA</p><h2 className="mt-3 font-serif text-5xl leading-tight sm:text-6xl">Seu próximo visual começa aqui.</h2><p class="mt-6 leading-7 text-white/60">Preencha os dados e confirme seu horário diretamente pelo WhatsApp.</p><div className="mt-8 flex items-center gap-4 text-sm"><Clock3 className="text-gold" /><span>Seg–Sáb: exemplo 09h às 20h</span></div></div>
        <form onSubmit={handleBooking} className="grid gap-4 sm:grid-cols-2" id="booking-form">
          <label className="text-xs font-bold tracking-widest text-white/60">NOME<input required value={form.name} onChange={(e) => setField('name', e.target.value)} className="mt-2 h-14 w-full border border-white/10 bg-black px-4 text-white outline-none focus:border-gold" placeholder="Seu nome completo" /></label>
          <label className="text-xs font-bold tracking-widest text-white/60">WHATSAPP<input required type="tel" value={form.phone} onChange={(e) => setField('phone', e.target.value)} className="mt-2 h-14 w-full border border-white/10 bg-black px-4 text-white outline-none focus:border-gold" placeholder="(00) 00000-0000" /></label>
          <label className="text-xs font-bold tracking-widest text-white/60 sm:col-span-2">SERVIÇO<select required value={form.service} onChange={(e) => setField('service', e.target.value)} className="mt-2 h-14 w-full border border-white/10 bg-black px-4 text-white outline-none focus:border-gold"><option value="">Selecione um serviço</option>{services.map(s => <option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}</select></label>
          <label className="text-xs font-bold tracking-widest text-white/60">DATA<input required type="date" value={form.date} onChange={(e) => setField('date', e.target.value)} className="mt-2 h-14 w-full border border-white/10 bg-black px-4 text-white outline-none focus:border-gold [color-scheme:dark]" /></label>
          <label className="text-xs font-bold tracking-widest text-white/60">HORÁRIO<select required value={form.time} onChange={(e) => setField('time', e.target.value)} className="mt-2 h-14 w-full border border-white/10 bg-black px-4 text-white outline-none focus:border-gold"><option value="">Selecione</option>{['09:00','10:00','11:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'].map(time => <option key={time}>{time}</option>)}</select></label>
          <button type="submit" className="mt-2 flex h-14 items-center justify-center gap-3 bg-gold text-sm font-bold tracking-widest text-black transition hover:bg-white sm:col-span-2"><CalendarDays size={18} />CONFIRMAR PELO WHATSAPP</button>
        </form></div></section>

      <section id="avaliações" className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 text-center"><p className="text-xs font-bold tracking-[0.3em] text-gold">AVALIAÇÕES</p><h2 className="mt-3 font-serif text-5xl sm:text-6xl">Quem conhece, recomenda</h2></div><div className="grid gap-5 md:grid-cols-3">{testimonials.map(([name, text]) => <article key={name} className="border border-white/10 bg-charcoal p-7"><div className="mb-5 flex gap-1 text-gold">{[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}</div><p className="min-h-[100px] leading-7 text-white/65">“{text}”</p><strong className="mt-6 block border-t border-white/10 pt-5 font-serif text-xl">{name}</strong></article>)}</div></div></section>

      <section id="contato" className="grid lg:grid-cols-2"><div className="bg-[#0d0d0d] px-5 py-20 lg:px-[max(2rem,calc((100vw-1280px)/2))]"><p class="text-xs font-bold tracking-[0.3em] text-gold">ENCONTRE-NOS</p><h2 class="mt-3 font-serif text-5xl">Visite a barbearia</h2><div className="mt-8 space-y-5 text-sm text-white/65"><p className="flex gap-4"><MapPin className="shrink-0 text-gold" /><span><strong className="block text-white">Endereço de exemplo</strong>Rua Exemplo, 123 — Centro, Sua Cidade — SP</span></p><p className="flex gap-4"><Phone className="shrink-0 text-gold" /><span><strong className="block text-white">Telefone / WhatsApp</strong>(11) 99999-9999</span></p><p className="flex gap-4"><Instagram className="shrink-0 text-gold" /><span><strong className="block text-white">Instagram</strong>@seuinstagram</span></p></div></div><iframe title="Mapa de localização — endereço de exemplo" src="https://www.google.com/maps?q=Av%20Paulista%20Sao%20Paulo&output=embed" className="h-[420px] w-full border-0 grayscale-[80%] contrast-125 lg:h-full" loading="lazy" /></section>

      <footer className="border-t border-white/10 px-5 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4"><div><div className="flex items-center gap-3"><span class="grid h-11 w-11 place-items-center rounded-full border border-gold text-gold"><Scissors size={20} /></span><span className="font-serif text-xl tracking-wider">ELITE <small className="block text-[8px] tracking-[0.35em] text-gold">BARBER CLUB</small></span></div><p className="mt-5 max-w-xs text-sm leading-6 text-white/45">Uma experiência de alto padrão, feita sob medida para você.</p></div><div><strong class="text-xs tracking-widest text-gold">NAVEGAÇÃO</strong><div className="mt-5 space-y-3 text-sm text-white/55">{['Sobre','Serviços','Galeria','Contato'].map(item => <button key={item} onClick={() => scrollTo(item === 'Sobre' ? 'sobre' : item === 'Contato' ? 'contato' : item.toLower())} className="block hover:text-gold">{item}</button>)}</div></div><div><strong class="text-xs tracking-widest text-gold">CONTATO</strong><div className="mt-5 space-y-3 text-sm text-white/55"><p>(11) 99999-9999</p><p>contato@exemplo.com.br</p><p>@seuinstagram</p></div></div><div><strong class="text-xs tracking-widest text-gold">HORÁRIOS</strong><div className="mt-5 space-y-3 text-sm text-white/55"><p>Segunda–Sexta: 09h–20h</p><p>Sábado: 09h–18h</p><p>Domingo: fechado</p></div></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Elite Barber Club. Todos os direitos reservados.</p><p>Informações demonstrativas — edite antes da publicação.</p></div></footer>
    </main>
  )
}

export default App
