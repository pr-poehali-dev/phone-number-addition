import Icon from "@/components/ui/icon";

const PHONE = "+79780402777";
const PHONE_DISPLAY = "+7 (978) 040-27-77";
const IMAGE_URL =
  "https://cdn.poehali.dev/projects/81ea0ab6-e26d-4549-ade7-1ccbf506f1db/files/b149d4eb-1186-4497-b154-66877b1e53bc.jpg";

const advantages = [
  {
    icon: "Zap",
    title: "Быстрая подача",
    desc: "Доставим станцию на объект в течение суток по Крыму",
  },
  {
    icon: "ShieldCheck",
    title: "Исправное оборудование",
    desc: "Техническое обслуживание после каждой аренды",
  },
  {
    icon: "Wrench",
    title: "Техподдержка",
    desc: "Консультация по работе со станцией включена в аренду",
  },
  {
    icon: "Banknote",
    title: "Без залога",
    desc: "Договор аренды без скрытых платежей и депозита",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-ibm">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#e8a000]" />
            <span className="font-oswald text-lg font-semibold tracking-widest uppercase text-white">
              ШтукатурПро
            </span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 text-[#e8a000] font-oswald font-semibold tracking-wider text-sm hover:text-white transition-colors"
          >
            <Icon name="Phone" size={16} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGE_URL})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f]/40" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#e8a000]" />
              <span className="font-ibm text-[#e8a000] text-xs tracking-[0.3em] uppercase">
                Аренда оборудования
              </span>
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-none tracking-tight mb-6 uppercase">
              Штукатурная
              <br />
              <span className="text-[#e8a000]">Станция</span>
              <br />
              в аренду
            </h1>

            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-10 font-ibm">
              Профессиональное оборудование для механизированной штукатурки.
              Подача раствора до 60 м², экономия времени в 5–7 раз.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-3 bg-[#e8a000] text-[#0f0f0f] font-oswald font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#ffb800] transition-all duration-200 hover:scale-[1.02]"
              >
                <Icon name="Phone" size={18} />
                Позвонить сейчас
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-3 border border-[#444] text-white font-oswald font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-[#e8a000] hover:text-[#e8a000] transition-all duration-200"
              >
                Узнать цену
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="font-oswald text-3xl font-bold text-white">
                  от 1 500 ₽
                </div>
                <div className="text-[#666] text-xs tracking-wider uppercase mt-1">
                  в сутки
                </div>
              </div>
              <div className="h-10 w-px bg-[#2a2a2a]" />
              <div>
                <div className="font-oswald text-3xl font-bold text-white">
                  24/7
                </div>
                <div className="text-[#666] text-xs tracking-wider uppercase mt-1">
                  поддержка
                </div>
              </div>
              <div className="h-10 w-px bg-[#2a2a2a]" />
              <div>
                <div className="font-oswald text-3xl font-bold text-white">
                  1 день
                </div>
                <div className="text-[#666] text-xs tracking-wider uppercase mt-1">
                  доставка
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#141414] py-24 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#e8a000]" />
            <span className="font-ibm text-[#e8a000] text-xs tracking-[0.3em] uppercase">
              Почему выбирают нас
            </span>
          </div>
          <h2 className="font-oswald text-4xl font-bold uppercase mb-16 text-white">
            Преимущества аренды
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a2a2a]">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="bg-[#141414] p-8 hover:bg-[#1a1a1a] transition-colors group"
              >
                <div className="w-12 h-12 border border-[#2a2a2a] flex items-center justify-center mb-6 group-hover:border-[#e8a000] transition-colors">
                  <Icon name={item.icon} size={20} className="text-[#e8a000]" />
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase tracking-wide mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed font-ibm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e8a000] py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-oswald text-4xl font-bold uppercase text-[#0f0f0f] leading-tight">
              Готовы к работе?
              <br />
              Звоните прямо сейчас
            </h2>
            <p className="text-[#3a2800] mt-3 font-ibm text-sm">
              Ответим на все вопросы и рассчитаем стоимость аренды
            </p>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="flex-shrink-0 inline-flex items-center gap-4 bg-[#0f0f0f] text-white font-oswald font-bold text-lg tracking-widest uppercase px-10 py-5 hover:bg-[#1a1a1a] transition-all duration-200 hover:scale-[1.02]"
          >
            <Icon name="Phone" size={22} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] border-t border-[#2a2a2a] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#555] text-sm font-ibm">
          <span className="font-oswald tracking-widest uppercase text-[#666]">
            ШтукатурПро — Аренда штукатурных станций
          </span>
          <a
            href={`tel:${PHONE}`}
            className="hover:text-[#e8a000] transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </footer>
    </div>
  );
}
