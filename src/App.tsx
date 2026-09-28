import React, { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  Menu,
  X,
  Check,
} from 'lucide-react';
import {
  PROBLEMS,
  SERVICES,
  TATTOO_SPECIALIZED_FEATURES,
  PROJECTS,
  PROCESS_STEPS,
  BENEFITS,
  FAQS,
  INKCODE_INSTAGRAM_URL,
  ProjectCaseStudy,
  trackInkcodeEvent,
} from './data/inkcodeData';
import { HeroMockupPreview } from './components/HeroMockupPreview';
import { ProjectModal } from './components/ProjectModal';
import { ContactSection } from './components/ContactSection';
import { ResilientImage } from './components/ResilientImage';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comparisonMode, setComparisonMode] = useState<'both' | 'instagram' | 'website'>('both');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const [activeTattooFeatureId, setActiveTattooFeatureId] = useState<string>(
    TATTOO_SPECIALIZED_FEATURES[0].id
  );
  const [projectStyleFilter, setProjectStyleFilter] = useState<string>('Todos');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectCaseStudy | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryCtaClick = (source: string) => {
    trackInkcodeEvent('cta_clicked', { source });
    scrollToSection('contacto');
  };

  const filteredProjects =
    projectStyleFilter === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.styleCategory === projectStyleFilter);

  const activeTattooFeature =
    TATTOO_SPECIALIZED_FEATURES.find((f) => f.id === activeTattooFeatureId) ||
    TATTOO_SPECIALIZED_FEATURES[0];

  return (
    <div id="inicio" className="min-h-screen bg-[#171717] text-white flex flex-col">
      {/* HEADER — Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 h-16 bg-[#171717]/95 backdrop-blur-md border-b border-[#666666]/30">
        <div className="max-w-[1200px] mx-auto h-full px-5 sm:px-8 flex items-center justify-between gap-4">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
            className="font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:text-[#D4D4D4] transition-colors whitespace-nowrap shrink-0"
          >
            @inkcode.web
          </a>

          {/* Zone 2: Clean Typography Navigation Links */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A3A3A3]"
          >
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('inicio');
              }}
              className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('servicos');
              }}
              className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              Serviços
            </a>
            <a
              href="#projectos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projectos');
              }}
              className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              Projectos
            </a>
            <a
              href="#processo"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('processo');
              }}
              className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              Processo
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('faq');
              }}
              className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
              }}
              className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              Contacto
            </a>
          </nav>

          {/* Zone 3: Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handlePrimaryCtaClick('header_cta')}
              className="px-4 py-2 text-xs sm:text-sm font-semibold bg-white text-[#171717] hover:bg-[#D4D4D4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Criar o meu site
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-[#D4D4D4] hover:text-white border border-[#666666]/40 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#171717] border-b border-[#666666]/40 px-5 py-6 space-y-4">
            <nav aria-label="Menu mobile" className="flex flex-col space-y-3 text-base font-medium">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Projectos', id: 'projectos' },
                { label: 'Processo', id: 'processo' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contacto', id: 'contacto' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="py-2 text-[#D4D4D4] hover:text-white border-b border-[#242424] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#666666]" />
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handlePrimaryCtaClick('mobile_menu_cta')}
                className="w-full py-3 text-sm font-semibold bg-white text-[#171717] hover:bg-[#D4D4D4] transition-colors whitespace-nowrap cursor-pointer"
              >
                Quero o meu website
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* SECÇÃO 1 (CINZA ESCURO) — HERO SECTION */}
        <section
          aria-labelledby="hero-heading"
          className="relative py-16 sm:py-24 lg:py-28 bg-[#171717] text-white border-b border-[#666666]/30"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Editorial Value Proposition & CTAs */}
              <div className="lg:col-span-6 space-y-7">
                <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                  <span>Websites feitos para quem transforma pele em arte</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#D4D4D4]">Portugal</span>
                </div>

                <h1
                  id="hero-heading"
                  className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.04]"
                >
                  O teu trabalho merece mais do que um perfil.
                </h1>

                <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-xl">
                  Criamos websites únicos para tatuadores que querem transformar o seu trabalho numa presença digital à altura da sua arte.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handlePrimaryCtaClick('hero_primary_cta')}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold bg-white text-[#171717] hover:bg-[#D4D4D4] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Quero o meu website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('projectos')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-white bg-[#242424] border border-[#666666]/50 hover:border-white transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Ver projectos</span>
                    <ArrowRight className="w-4 h-4 text-[#A3A3A3]" />
                  </button>
                </div>

                {/* Unboxed Editorial Proof Metadata (2 columns: 100% and 24h) */}
                <div className="pt-6 border-t border-[#666666]/30 grid grid-cols-2 gap-6 max-w-md">
                  <div>
                    <p className="font-mono text-lg sm:text-xl font-medium text-white tabular-nums">
                      100%
                    </p>
                    <p className="text-xs text-[#A3A3A3] mt-0.5">
                      Focado em tatuadores e estúdios
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-lg sm:text-xl font-medium text-white tabular-nums">
                      24h
                    </p>
                    <p className="text-xs text-[#A3A3A3] mt-0.5">
                      Do conceito ao site publicado
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating @inkcode.web Photo */}
              <div className="lg:col-span-6">
                <HeroMockupPreview />
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO 2 (CINZA CLARO) — SECÇÃO DE PROBLEMA */}
        <section
          id="problema"
          aria-labelledby="problema-heading"
          className="py-24 sm:py-32 bg-[#F1F1F1] text-[#171717] border-b border-[#D4D4D4]"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-mono text-[#666666] tabular-nums">
                  01. O PROBLEMA ACTUAL
                </p>
                <h2
                  id="problema-heading"
                  className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-[1.08]"
                >
                  O Instagram mostra. O teu site apresenta.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[#242424] text-base leading-relaxed">
                  O Instagram é óptimo para publicar trabalho. Mas quando alguém quer conhecer melhor o teu estilo, perceber como trabalhas ou marcar uma sessão, precisas de um espaço teu.
                </p>
              </div>
            </div>

            {/* Interactive View Filter for Problem / Solution Contrast */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#171717]/15">
              <span className="text-xs text-[#666666]">
                Compara a experiência do teu cliente antes de marcar uma sessão:
              </span>
              <div className="flex items-center gap-1 bg-white p-1 border border-[#171717]/20">
                <button
                  type="button"
                  onClick={() => setComparisonMode('both')}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    comparisonMode === 'both'
                      ? 'bg-[#171717] text-white'
                      : 'text-[#666666] hover:text-[#171717]'
                  }`}
                >
                  Visão Completa
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonMode('instagram')}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    comparisonMode === 'instagram'
                      ? 'bg-[#171717] text-white'
                      : 'text-[#666666] hover:text-[#171717]'
                  }`}
                >
                  Limitação no Instagram
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonMode('website')}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    comparisonMode === 'website'
                      ? 'bg-[#171717] text-white'
                      : 'text-[#666666] hover:text-[#171717]'
                  }`}
                >
                  Solução @inkcode.web
                </button>
              </div>
            </div>

            {/* 3 Numbered Problem Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROBLEMS.map((item) => (
                <article
                  key={item.index}
                  className="bg-white border border-[#171717]/15 p-7 sm:p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-sm font-medium text-[#666666] tabular-nums block">
                      {item.index}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-[#171717]">
                      {item.description}
                    </p>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#171717]/15 space-y-3 text-xs">
                    {(comparisonMode === 'both' || comparisonMode === 'instagram') && (
                      <div className="text-[#666666]">
                        <span className="block font-mono text-[11px] text-[#666666] mb-0.5">
                          Apenas Redes Sociais:
                        </span>
                        <span>{item.instagramReality}</span>
                      </div>
                    )}
                    {(comparisonMode === 'both' || comparisonMode === 'website') && (
                      <div className="text-[#171717] font-medium">
                        <span className="block font-mono text-[11px] text-[#242424] mb-0.5">
                          Com o teu Website:
                        </span>
                        <span>{item.websiteSolution}</span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECÇÃO 3 (CINZA ESCURO) — SECÇÃO DE SERVIÇOS */}
        <section
          id="servicos"
          aria-labelledby="servicos-heading"
          className="py-24 sm:py-32 border-b border-[#666666]/30 bg-[#171717] text-white"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <p className="text-xs font-mono text-[#A3A3A3] tabular-nums">
                  02. SERVIÇOS ESPECIALIZADOS
                </p>
                <h2
                  id="servicos-heading"
                  className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08]"
                >
                  Tudo o que precisas. Num só site.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#A3A3A3] max-w-md">
                Selecciona qualquer módulo abaixo para ver como estruturamos cada detalhe técnico e visual do teu website.
              </p>
            </div>

            {/* Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {SERVICES.map((service) => {
                const isSelected = selectedServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => {
                      setSelectedServiceId(service.id);
                      trackInkcodeEvent('service_viewed', { service: service.id });
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedServiceId(service.id);
                        trackInkcodeEvent('service_viewed', { service: service.id });
                      }
                    }}
                    className={`${service.colSpan} bg-[#242424] border transition-colors p-7 sm:p-9 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'border-white'
                        : 'border-[#666666]/40 hover:border-[#D4D4D4]'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-sm text-[#D4D4D4] tabular-nums">
                          {service.index}
                        </span>
                        <span className="text-xs text-[#A3A3A3] font-mono tabular-nums">
                          {service.previewSnippet.metricsOrSpec}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                        {service.extendedDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#666666]/30 space-y-4">
                      <ul className="space-y-2">
                        {service.deliverables.map((deliv) => (
                          <li
                            key={deliv}
                            className="flex items-start gap-2.5 text-xs text-[#D4D4D4]"
                          >
                            <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-[#A3A3A3]">
                          {service.previewSnippet.label}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrimaryCtaClick(`service_card_${service.id}`);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#D4D4D4] underline underline-offset-4 whitespace-nowrap cursor-pointer"
                        >
                          <span>Pedir proposta com este serviço</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECÇÃO 4 (CINZA CLARO) — SECÇÃO "FEITO PARA TATUADORES" */}
        <section
          aria-labelledby="feito-tatuadores-heading"
          className="py-24 sm:py-32 bg-[#F1F1F1] text-[#171717] border-b border-[#D4D4D4]"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-mono text-[#666666] tabular-nums">
                  03. ESPECIALIZAÇÃO EXCLUSIVA
                </p>
                <h2
                  id="feito-tatuadores-heading"
                  className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-[1.06]"
                >
                  Não fazemos sites para toda a gente.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[#242424] text-base leading-relaxed">
                  A @inkcode.web é especializada em criar experiências digitais para tatuadores. Conhecemos a importância do portfólio, do estilo visual e da primeira impressão.
                </p>
              </div>
            </div>

            {/* Interactive Feature Selector + Live Studio Architecture Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: 7 Interactive Tattoo-Specific Capabilities */}
              <div
                className="lg:col-span-5 flex flex-col justify-between border border-[#171717]/15 bg-white p-3"
                role="tablist"
                aria-label="Funcionalidades feitas para tatuadores"
              >
                {TATTOO_SPECIALIZED_FEATURES.map((feat, idx) => {
                  const isActive = feat.id === activeTattooFeature.id;
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTattooFeatureId(feat.id)}
                      className={`w-full text-left px-4 py-3.5 flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#171717] text-white'
                          : 'text-[#171717] hover:bg-[#F1F1F1]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs tabular-nums ${
                            isActive ? 'text-[#D4D4D4]' : 'text-[#666666]'
                          }`}
                        >
                          0{idx + 1}.
                        </span>
                        <span className="font-display text-sm sm:text-base font-bold">
                          {feat.label}
                        </span>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? 'text-white translate-x-0.5' : 'text-[#666666]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right: Detailed Inspection Card for the Active Tattoo Feature */}
              <div className="lg:col-span-7 bg-[#171717] text-white p-8 sm:p-10 flex flex-col justify-between border border-[#171717]">
                <div className="space-y-5">
                  <div className="flex items-center justify-between text-xs text-[#A3A3A3] border-b border-[#666666]/30 pb-4">
                    <span className="font-mono text-white">
                      MÓDULO DEDICADO · {activeTattooFeature.label.toUpperCase()}
                    </span>
                    <span>Arquitectura @inkcode.web</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {activeTattooFeature.headline}
                  </h3>

                  <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed">
                    {activeTattooFeature.description}
                  </p>

                  {/* Simulated Component Wireframe Preview */}
                  <div className="bg-[#242424] border border-[#666666]/40 p-5 space-y-3 mt-4">
                    <div className="flex items-center justify-between border-b border-[#666666]/30 pb-2.5">
                      <span className="text-xs font-semibold text-white">
                        {activeTattooFeature.mockData.header}
                      </span>
                      <span className="text-[11px] font-mono text-[#A3A3A3] tabular-nums">
                        {activeTattooFeature.mockData.sub}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {activeTattooFeature.mockData.rows.map((row) => (
                        <div
                          key={row.label}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-[#171717] px-3.5 py-2.5 border border-[#666666]/20 text-xs"
                        >
                          <span className="text-[#A3A3A3]">{row.label}</span>
                          <span className="font-mono text-white font-medium tabular-nums">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#666666]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#D4D4D4]">
                    <strong className="text-white">Resultado prático:</strong>{' '}
                    {activeTattooFeature.studioImpact}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      handlePrimaryCtaClick(`tattoo_feature_${activeTattooFeature.id}`)
                    }
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold bg-white text-[#171717] hover:bg-[#D4D4D4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Quero isto no meu site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO 5 (CINZA ESCURO) — PORTFÓLIO / PROJECTOS (sem links externos dos tatuadores) */}
        <section
          id="projectos"
          aria-labelledby="projectos-heading"
          className="py-24 sm:py-32 border-b border-[#666666]/30 bg-[#171717] text-white"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-14">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4">
                <p className="text-xs font-mono text-[#A3A3A3] tabular-nums">
                  04. PORTFÓLIO & EXEMPLOS
                </p>
                <h2
                  id="projectos-heading"
                  className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08]"
                >
                  Trabalho que fala por si.
                </h2>
              </div>

              {/* Interactive Style Filter Controls */}
              <div
                className="flex flex-wrap items-center gap-1 bg-[#242424] p-1 border border-[#666666]/40"
                role="group"
                aria-label="Filtrar projectos por estilo de tatuagem"
              >
                {['Todos', 'Blackwork', 'Fine Line', 'Black & Grey', 'Geométrico'].map(
                  (category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setProjectStyleFilter(category)}
                      className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                        projectStyleFilter === category
                          ? 'bg-white text-[#171717]'
                          : 'text-[#A3A3A3] hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Projects Grid — No reference links to the artists' sites */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => {
                    trackInkcodeEvent('project_viewed', {
                      project: project.id,
                      name: project.name,
                    });
                    setActiveProjectModal(project);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      trackInkcodeEvent('project_viewed', {
                        project: project.id,
                        name: project.name,
                      });
                      setActiveProjectModal(project);
                    }
                  }}
                  aria-label={`Ver detalhes do projecto ${project.name} (${project.style} · ${project.location})`}
                  className="group bg-[#242424] border border-[#666666]/40 hover:border-white transition-colors cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  {/* Project Image with Hover Zoom + Project Name & Arrow Overlay */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171717]">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      fallbackTitle={project.name}
                      fallbackSubtitle={`${project.style} · ${project.location}`}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Measured Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-200" />

                    {/* Hover Reveal Overlay: Project Name + Arrow */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div className="transform transition-transform duration-200 group-hover:translate-x-1">
                        <span className="block text-xs text-[#D4D4D4] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          Ver detalhes do projecto
                        </span>
                        <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {project.name}
                        </span>
                      </div>

                      <div className="w-10 h-10 bg-white text-[#171717] flex items-center justify-center transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body: Clean Metadata (Style · Location) without external URL */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#D4D4D4]">
                      <div className="flex items-center gap-2 font-medium">
                        <span>{project.style}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.location}</span>
                      </div>
                      <span className="text-[#A3A3A3] group-hover:text-white transition-colors">
                        Ver caso de estudo →
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="pt-4 border-t border-[#666666]/30 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#F1F1F1] tabular-nums">
                      <span>{project.impactMetric}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECÇÃO 6 (CINZA CLARO) — PROCESSO */}
        <section
          id="processo"
          aria-labelledby="processo-heading"
          className="py-24 sm:py-32 bg-[#F1F1F1] text-[#171717] border-b border-[#D4D4D4]"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-mono text-[#666666] tabular-nums">
                  05. COMO FUNCIONA
                </p>
                <h2
                  id="processo-heading"
                  className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-[1.08]"
                >
                  Do primeiro contacto ao site publicado.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[#242424] text-base leading-relaxed">
                  Um processo simples, directo e sem complicações técnicas — com entrega em 24h — para que possas manter o foco nas tuas sessões.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="bg-white border border-[#171717]/15 p-7 flex flex-col justify-between space-y-8"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                      <span className="text-[#171717] text-base font-bold">{step.number}</span>
                      <span className="text-[#666666]">{step.durationLabel}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-[#171717] tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-sm font-medium text-[#242424] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <p className="text-xs text-[#666666] leading-relaxed pt-4 border-t border-[#171717]/15">
                    {step.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECÇÃO 7 (CINZA ESCURO) — SECÇÃO DE BENEFÍCIOS */}
        <section
          aria-labelledby="beneficios-heading"
          className="py-24 sm:py-32 border-b border-[#666666]/30 bg-[#171717] text-white"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-16">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-mono text-[#A3A3A3] tabular-nums">
                PORQUÊ TER UM ESPAÇO PRÓPRIO
              </p>
              <h2
                id="beneficios-heading"
                className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08]"
              >
                Mais do que um site. Uma extensão do teu trabalho.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#666666]/30 border border-[#666666]/30">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.index}
                  className="bg-[#171717] p-8 sm:p-9 space-y-3 hover:bg-[#242424] transition-colors"
                >
                  <span className="font-mono text-xs text-[#A3A3A3] tabular-nums block">
                    {benefit.index}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECÇÃO 8 (CINZA CLARO) — CTA INTERMÉDIO */}
        <section
          aria-labelledby="cta-intermedio-heading"
          className="py-24 sm:py-28 bg-[#F1F1F1] text-[#171717] border-b border-[#D4D4D4]"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="border border-[#171717] bg-white p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <p className="text-xs font-mono text-[#666666] tabular-nums">
                  @INKCODE.WEB · DIRECÇÃO DIGITAL PARA TATUADORES
                </p>
                <h2
                  id="cta-intermedio-heading"
                  className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-[1.06]"
                >
                  A tua próxima obra pode começar no ecrã.
                </h2>
                <p className="text-[#242424] text-base sm:text-lg leading-relaxed">
                  Vamos criar um espaço digital que tenha a mesma personalidade que colocas em cada tatuagem.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => handlePrimaryCtaClick('intermediate_cta_vamos_falar')}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-semibold bg-[#171717] text-white hover:bg-[#242424] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Vamos falar</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO 9 (CINZA ESCURO) — FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="py-24 sm:py-32 bg-[#171717] text-white"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="text-xs font-mono text-[#A3A3A3] tabular-nums">
                  PERGUNTAS FREQUENTES
                </p>
                <h2
                  id="faq-heading"
                  className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.1]"
                >
                  Dúvidas comuns antes de começar.
                </h2>
                <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                  Respostas directas sobre entrega em 24h, domínio e hospedagem na Vercel, autonomia e funcionamento do teu novo website.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-[#666666]/30 border-t border-b border-[#666666]/30">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={faq.question} className="py-5">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 text-left py-2 cursor-pointer group"
                      >
                        <span className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#D4D4D4] transition-colors">
                          {faq.question}
                        </span>
                        <span className="w-8 h-8 flex items-center justify-center border border-[#666666]/40 text-[#D4D4D4] shrink-0">
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-3 pb-2 pr-8 space-y-2">
                          <p className="text-base font-medium text-[#F1F1F1]">
                            {faq.answer}
                          </p>
                          <p className="text-sm text-[#A3A3A3] leading-relaxed">
                            {faq.extraNote}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO 10 (CINZA CLARO) — CONTACTO (Sem formulário, com link directo para o Instagram) */}
        <ContactSection />
      </main>

      {/* FOOTER (CINZA ESCURO) */}
      <footer className="bg-[#171717] border-t border-[#666666]/30 py-16 text-sm text-[#A3A3A3]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 justify-between">
            {/* Brand & Concept Signature */}
            <div className="md:col-span-6 space-y-3">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('inicio');
                }}
                className="font-display text-2xl font-bold tracking-tight text-white inline-block"
              >
                @inkcode.web
              </a>
              <p className="text-[#D4D4D4] text-sm max-w-sm">
                Websites para tatuadores. Feitos para destacar a tua arte.
              </p>
              <p className="text-xs font-mono text-[#A3A3A3] pt-1">
                A tua arte. O teu espaço. A tua presença.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-mono text-white">NAVEGAÇÃO</p>
              <ul className="space-y-2 text-xs sm:text-sm">
                {[
                  { label: 'Início', id: 'inicio' },
                  { label: 'Serviços', id: 'servicos' },
                  { label: 'Projectos', id: 'projectos' },
                  { label: 'Processo', id: 'processo' },
                  { label: 'FAQ', id: 'faq' },
                  { label: 'Contacto', id: 'contacto' },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.id);
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Networks */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-mono text-white">REDES SOCIAIS</p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href={INKCODE_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackInkcodeEvent('instagram_clicked', { location: 'footer' })
                    }
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com/@inkcode.web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>TikTok</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>Behance</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#666666]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#666666]">
            <p>© 2026 @inkcode.web — Todos os direitos reservados.</p>
            <p className="font-mono text-[#A3A3A3]">
              Websites feitos para quem transforma pele em arte.
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive Case Study Modal (without external artist links) */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onSelectForQuote={() => {
          setActiveProjectModal(null);
          scrollToSection('contacto');
        }}
      />
    </div>
  );
}
