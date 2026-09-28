import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INKCODE_INSTAGRAM_URL, trackInkcodeEvent } from '../data/inkcodeData';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="py-24 sm:py-32 bg-[#F1F1F1] text-[#171717] border-t border-[#D4D4D4]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Lead-In */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-mono text-[#666666] tabular-nums">
              06. CONTACTO & ORÇAMENTO
            </p>
            <h2
              id="contacto-heading"
              className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-[1.08]"
            >
              Vamos criar o teu próximo site?
            </h2>
            <p className="text-[#242424] text-base sm:text-lg leading-relaxed max-w-xl">
              Diz-nos quem és, mostra-nos o teu trabalho e conta-nos o que tens em mente. Fala directamente connosco no Instagram e entregamos o teu website pronto em 24h, já com domínio e hospedagem na Vercel incluídos.
            </p>

            <div className="pt-2">
              <a
                href={INKCODE_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackInkcodeEvent('instagram_clicked', { location: 'contact_primary_cta' })
                }
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-semibold bg-[#171717] text-white hover:bg-[#242424] transition-colors whitespace-nowrap"
              >
                <span>Falar no Instagram · @inkcode.web</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Instagram Card & Next Steps */}
          <div className="lg:col-span-6 space-y-6">
            <a
              href={INKCODE_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackInkcodeEvent('instagram_clicked', { location: 'contact_card' })
              }
              className="block p-8 sm:p-10 bg-[#171717] text-white border border-[#171717] hover:bg-[#242424] transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-mono text-[#A3A3A3] tabular-nums">
                    CANAL DIRECTO OFICIAL
                  </p>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-white">
                    @inkcode.web
                  </p>
                  <p className="text-sm text-[#D4D4D4] pt-1">
                    Envia-nos uma mensagem directa (DM) no Instagram para começarmos o teu projecto hoje.
                  </p>
                </div>
                <div className="w-12 h-12 bg-white text-[#171717] flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#666666]/30 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#D4D4D4]">
                <span>instagram.com/inkcode.web</span>
                <span>Abrir Instagram →</span>
              </div>
            </a>

            {/* Process Commitment Summary */}
            <div className="bg-white p-6 sm:p-8 border border-[#171717]/15 space-y-4">
              <p className="text-xs font-mono text-[#666666] tabular-nums">
                O QUE ACONTECE A SEGUIR
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#242424] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#171717] font-semibold tabular-nums">01.</span>
                  <span>Envias-nos mensagem no Instagram (@inkcode.web) com o teu perfil e estilo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#171717] font-semibold tabular-nums">02.</span>
                  <span>Alinhamos a direcção visual e as melhores fotos do teu portfólio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#171717] font-semibold tabular-nums">03.</span>
                  <span>Em 24h entregamos o teu site publicado com domínio e hospedagem na Vercel.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
