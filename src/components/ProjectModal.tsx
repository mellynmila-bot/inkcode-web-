import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, Smartphone, Monitor, CheckCircle2 } from 'lucide-react';
import { ProjectCaseStudy, trackInkcodeEvent } from '../data/inkcodeData';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectForQuote: (projectName: string, style: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectForQuote,
}) => {
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeSiteSection, setActiveSiteSection] = useState<'obras' | 'flash' | 'orcamento'>('obras');

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#171717] border border-[#666666]/50 text-white my-auto overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header — without external artist site links */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#666666]/30 bg-[#242424]">
          <div className="flex items-center gap-3 text-xs text-[#D4D4D4]">
            <span className="font-mono text-white font-medium">{project.name}</span>
            <span aria-hidden="true">·</span>
            <span>{project.style}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D4D4D4] hover:text-white bg-[#171717] border border-[#666666]/40 transition-colors cursor-pointer"
            aria-label="Fechar pré-visualização do projecto"
          >
            <span>ESC</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs text-[#A3A3A3] flex items-center gap-2">
                <span>Projecto @inkcode.web</span>
                <span aria-hidden="true">·</span>
                <span>{project.style}</span>
                <span aria-hidden="true">·</span>
                <span>{project.location}</span>
              </div>

              <h2
                id="modal-project-title"
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                {project.name}
              </h2>

              <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed">
                {project.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#242424] p-4 border border-[#666666]/30">
                  <p className="text-xs text-[#A3A3A3] mb-1">Desafio antes do site</p>
                  <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="bg-[#242424] p-4 border border-[#666666]/30">
                  <p className="text-xs text-[#A3A3A3] mb-1">Solução @inkcode.web</p>
                  <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Quantified Results */}
              <div className="border-t border-b border-[#666666]/30 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-[#A3A3A3]">Impacto nas marcações</p>
                  <p className="font-mono text-sm font-medium text-white mt-1 tabular-nums">
                    {project.impactMetric}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#A3A3A3]">Optimização de tempo</p>
                  <p className="font-mono text-sm font-medium text-white mt-1 tabular-nums">
                    {project.secondaryMetric}
                  </p>
                </div>
              </div>

              {/* Attributable Testimonial */}
              <blockquote className="bg-[#242424] p-4 border-l-2 border-white">
                <p className="text-xs sm:text-sm text-[#F1F1F1] italic leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <footer className="mt-2 text-xs text-[#A3A3A3]">
                  <strong className="text-white font-medium">{project.testimonial.author}</strong>
                  <span aria-hidden="true"> · </span>
                  <span>{project.testimonial.role}</span>
                </footer>
              </blockquote>
            </div>

            {/* Right Column: High-Contrast Visual + Structure Preview (no external links) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[4/3] w-full overflow-hidden border border-[#666666]/40 bg-[#242424]">
                <ResilientImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackTitle={project.name}
                  fallbackSubtitle={`${project.style} · ${project.location}`}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>

              {/* Structure Inspector */}
              <div className="bg-[#242424] border border-[#666666]/40 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#666666]/30">
                  <div>
                    <p className="text-xs font-mono text-[#A3A3A3] tabular-nums">
                      ESTRUTURA DO PROJECTO
                    </p>
                    <p className="text-xs text-white font-medium mt-0.5">
                      {project.livePreviewPages.bookingStatus}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 bg-[#171717] p-1 border border-[#666666]/30">
                    <button
                      type="button"
                      onClick={() => setPreviewMode('desktop')}
                      className={`px-2 py-1 text-xs flex items-center gap-1 cursor-pointer ${
                        previewMode === 'desktop' ? 'bg-white text-[#171717] font-medium' : 'text-[#A3A3A3]'
                      }`}
                    >
                      <Monitor className="w-3 h-3" />
                      <span>Desktop</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewMode('mobile')}
                      className={`px-2 py-1 text-xs flex items-center gap-1 cursor-pointer ${
                        previewMode === 'mobile' ? 'bg-white text-[#171717] font-medium' : 'text-[#A3A3A3]'
                      }`}
                    >
                      <Smartphone className="w-3 h-3" />
                      <span>Mobile</span>
                    </button>
                  </div>
                </div>

                {/* Inner Frame */}
                <div
                  className={`bg-[#171717] border border-[#666666]/30 p-4 transition-all ${
                    previewMode === 'mobile' ? 'max-w-[320px] mx-auto' : 'w-full'
                  }`}
                >
                  <p className="font-display text-xs sm:text-sm font-bold text-white tracking-tight mb-3">
                    {project.livePreviewPages.heroHeadline}
                  </p>

                  <div className="flex items-center gap-1 mb-3 border-b border-[#666666]/30 pb-2">
                    <button
                      type="button"
                      onClick={() => setActiveSiteSection('obras')}
                      className={`px-2.5 py-1 text-xs transition-colors whitespace-nowrap cursor-pointer ${
                        activeSiteSection === 'obras'
                          ? 'bg-white text-[#171717] font-medium'
                          : 'text-[#A3A3A3] hover:text-white'
                      }`}
                    >
                      Obras Seleccionadas
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSiteSection('flash')}
                      className={`px-2.5 py-1 text-xs transition-colors whitespace-nowrap cursor-pointer ${
                        activeSiteSection === 'flash'
                          ? 'bg-white text-[#171717] font-medium'
                          : 'text-[#A3A3A3] hover:text-white'
                      }`}
                    >
                      Flash & Sessões
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSiteSection('orcamento')}
                      className={`px-2.5 py-1 text-xs transition-colors whitespace-nowrap cursor-pointer ${
                        activeSiteSection === 'orcamento'
                          ? 'bg-white text-[#171717] font-medium'
                          : 'text-[#A3A3A3] hover:text-white'
                      }`}
                    >
                      Entregáveis
                    </button>
                  </div>

                  {activeSiteSection === 'obras' && (
                    <div className="space-y-2">
                      {project.livePreviewPages.featuredWorks.map((work) => (
                        <div
                          key={work.title}
                          className="flex items-center justify-between text-xs bg-[#242424] px-3 py-2 border border-[#666666]/20"
                        >
                          <div>
                            <p className="text-white font-medium">{work.title}</p>
                            <p className="text-[#A3A3A3] text-[11px]">{work.placement}</p>
                          </div>
                          <span className="font-mono text-[11px] text-[#D4D4D4] tabular-nums">
                            {work.sessions}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSiteSection === 'flash' && (
                    <div className="space-y-2">
                      {project.livePreviewPages.flashItems.map((item) => (
                        <div
                          key={item.code}
                          className="flex items-center justify-between text-xs bg-[#242424] px-3 py-2 border border-[#666666]/20"
                        >
                          <div>
                            <span className="font-mono text-[#A3A3A3] mr-2 tabular-nums">
                              {item.code}
                            </span>
                            <span className="text-white font-medium">{item.title}</span>
                          </div>
                          <span className="font-mono text-[11px] text-[#D4D4D4] tabular-nums">
                            {item.size} · {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSiteSection === 'orcamento' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-[#D4D4D4] bg-[#242424] px-3 py-2 border border-[#666666]/20"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-[#666666]/30 bg-[#242424]">
          <p className="text-xs sm:text-sm text-[#D4D4D4]">
            Queres uma presença digital com esta estrutura para o teu trabalho?
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#D4D4D4] hover:text-white border border-[#666666]/40 transition-colors whitespace-nowrap cursor-pointer"
            >
              Voltar aos projectos
            </button>
            <button
              type="button"
              onClick={() => {
                trackInkcodeEvent('cta_clicked', {
                  source: 'project_modal',
                  project: project.id,
                });
                onSelectForQuote(project.name, project.style);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-white text-[#171717] hover:bg-[#D4D4D4] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Quero um site inspirado neste projecto</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
