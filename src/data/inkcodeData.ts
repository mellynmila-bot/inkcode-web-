import inkcodeHeroPhoto from '../assets/images/inkcode_hero_photo.jpg';
import projectRafael from '../assets/images/project_rafael_blackwork_1790595816823.jpg';
import projectMarta from '../assets/images/project_marta_fineline_1790595828497.jpg';
import projectNoir from '../assets/images/project_noir_studio_1790595840450.jpg';
import projectVasco from '../assets/images/project_vasco_geometric_1790595850573.jpg';

export type AnalyticsEventName =
  | 'contact_form_submitted'
  | 'project_viewed'
  | 'cta_clicked'
  | 'instagram_clicked'
  | 'service_viewed';

export function trackInkcodeEvent(
  eventName: AnalyticsEventName,
  payload?: Record<string, string | number>
) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('inkcode:analytics', {
        detail: {
          event: eventName,
          timestamp: new Date().toISOString(),
          ...payload,
        },
      })
    );
  }
}

export const HERO_IMAGE = inkcodeHeroPhoto;
export const HERO_FALLBACK_URL =
  'https://i.ibb.co/zWCSMZTG/Setting-logo-on-background-2-K-20260925112909.jpg';
export const INKCODE_INSTAGRAM_URL = 'https://www.instagram.com/inkcode.web/';

export interface ProblemItem {
  index: string;
  title: string;
  description: string;
  detail: string;
  instagramReality: string;
  websiteSolution: string;
}

export const PROBLEMS: ProblemItem[] = [
  {
    index: '01.',
    title: 'Portfólio desorganizado',
    description: 'O teu trabalho fica perdido entre publicações.',
    detail:
      'No feed, uma peça de 18 horas desaparece em 48 horas no meio de reels, stories e fotografias casuais. Quem procura um estilo específico não consegue filtrar.',
    instagramReality: 'Scroll infinito sem filtro por estilo, zona do corpo ou trabalhos cicatrizados.',
    websiteSolution: 'Galeria curada por estilo, projectos de grande escala e arquivo de tatuagens cicatrizadas.',
  },
  {
    index: '02.',
    title: 'Dependência das redes sociais',
    description: 'O teu negócio fica demasiado dependente de plataformas de terceiros.',
    detail:
      'Mudanças de algoritmo, bloqueios de conta ou quebras de alcance afectam directamente a tua agenda. Além disso, dezenas de mensagens directas vagas consomem horas de estúdio.',
    instagramReality: 'Dezenas de DMs com "Quanto custa esta?" sem tamanho, zona ou referências.',
    websiteSolution: 'Espaço próprio e canais estruturados que recolhem ideia, centímetros, zona do corpo e disponibilidade.',
  },
  {
    index: '03.',
    title: 'Primeira impressão',
    description: 'Um trabalho incrível merece uma presença digital profissional.',
    detail:
      'Quando cobras pelo teu rigor técnico e artístico, a tua presença online deve reflectir esse mesmo nível de exigência desde o primeiro segundo.',
    instagramReality: 'Um perfil igual a milhares de outros, limitado pela grelha padrão da plataforma.',
    websiteSolution: 'Direcção visual autoral, tipografia editorial e experiência pensada à medida da tua identidade.',
  },
];

export interface ServiceItem {
  index: string;
  id: string;
  title: string;
  description: string;
  extendedDescription: string;
  deliverables: string[];
  colSpan: 'lg:col-span-7' | 'lg:col-span-5' | 'lg:col-span-6' | 'lg:col-span-4' | 'lg:col-span-8';
  previewSnippet: {
    label: string;
    metricsOrSpec: string;
    sampleItems: string[];
  };
}

export const SERVICES: ServiceItem[] = [
  {
    index: '01.',
    id: 'website-personalizado',
    title: 'Website personalizado',
    description: 'Design criado especificamente para o tatuador, sem templates genéricos.',
    extendedDescription:
      'Cada tatuador tem um traço próprio. Construímos a arquitectura visual, tipografia e contraste em torno da estética do teu trabalho — do Blackwork visceral ao Fine Line minimalista.',
    deliverables: [
      'Direcção de arte monocromática ou adaptada ao teu estilo',
      'Layout editorial feito de raiz sem temas pré-comprados',
      'Domínio e hospedagem na Vercel incluídos',
    ],
    colSpan: 'lg:col-span-7',
    previewSnippet: {
      label: 'Arquitectura à medida',
      metricsOrSpec: '100% código próprio · Zero templates',
      sampleItems: ['Identidade Tipográfica', 'Grelha Brutalista / Editorial', 'Modo Escuro de Alto Contraste'],
    },
  },
  {
    index: '02.',
    id: 'portfolio',
    title: 'Portfólio',
    description: 'Galeria optimizada para apresentar tatuagens, estilos e trabalhos anteriores.',
    extendedDescription:
      'Fotografias em alta definição com carregamento instantâneo, filtros por categoria (ex.: Peças Grandes, Cicatrizadas, Flash Disponível) e visualização em ecrã inteiro.',
    deliverables: [
      'Filtro instantâneo por estilo e trabalhos cicatrizados',
      'Compressão WebP/AVIF sem perda de detalhe no traço',
      'Secção dedicada a projectos disponíveis e flash books',
    ],
    colSpan: 'lg:col-span-5',
    previewSnippet: {
      label: 'Galeria de Alta Precisão',
      metricsOrSpec: 'Zoom 4K · Filtros por Estilo',
      sampleItems: ['Trabalhos Frescos vs. Cicatrizados', 'Catálogo de Flash Disponível', 'Projectos de Costas / Manga'],
    },
  },
  {
    index: '03.',
    id: 'pagina-servicos',
    title: 'Página de serviços',
    description: 'Apresentação clara dos estilos, técnicas e serviços disponíveis.',
    extendedDescription:
      'Explica como funcionam as tuas sessões, como preparar a pele antes da marcação, cuidados pós-tatuagem (aftercare) e condições de sinal/reserva.',
    deliverables: [
      'Guia claro de estilos e especialidades',
      'Explicação do funcionamento de sessões e orçamentos',
      'Manual digital de cuidados pós-tatuagem (Aftercare)',
    ],
    colSpan: 'lg:col-span-5',
    previewSnippet: {
      label: 'Informação Estruturada',
      metricsOrSpec: 'Menos dúvidas repetidas nas DMs',
      sampleItems: ['Especialidades & Escala', 'Condições de Reserva', 'Guia Completo de Cicatrização'],
    },
  },
  {
    index: '04.',
    id: 'sistema-contacto',
    title: 'Sistema de contacto',
    description: 'Canais simples e directos para pedidos de orçamento e marcações.',
    extendedDescription:
      'Substitui trocas intermináveis de mensagens por um fluxo pensado para recolher zona do corpo, tamanho aproximado em centímetros, descrição da ideia e disponibilidade.',
    deliverables: [
      'Triagem por zona do corpo e dimensão estimada (cm)',
      'Acesso rápido a referências visuais e disponibilidade',
      'Encaminhamento directo para Instagram ou WhatsApp',
    ],
    colSpan: 'lg:col-span-7',
    previewSnippet: {
      label: 'Triagem Rápida de Clientes',
      metricsOrSpec: 'Briefing pronto em segundos',
      sampleItems: ['Zona do Corpo & Tamanho (cm)', 'Estilo / Referência', 'Preferência de Datas & Cidade'],
    },
  },
  {
    index: '05.',
    id: 'integracao-instagram',
    title: 'Integração com Instagram',
    description: 'Ligação directa entre o website e as redes sociais.',
    extendedDescription:
      'O teu site funciona como o destino principal na bio do Instagram e TikTok, convertendo seguidores em pedidos de sessão reais e mantendo os teus canais ligados.',
    deliverables: [
      'Optimização para link-in-bio sem intermediários pagos',
      'Acesso rápido ao perfil, stories de flash e contacto',
      'Partilha social com pré-visualização OpenGraph personalizada',
    ],
    colSpan: 'lg:col-span-6',
    previewSnippet: {
      label: 'Ecossistema Ligado',
      metricsOrSpec: 'Do perfil para a marcação',
      sampleItems: ['Link directo na Bio', 'Botão Rápido de Instagram / WhatsApp', 'Cards Sociais Personalizados'],
    },
  },
  {
    index: '06.',
    id: 'optimizacao-mobile',
    title: 'Optimização mobile',
    description: 'Experiência adaptada a telemóveis, tablets e computadores.',
    extendedDescription:
      'A maioria dos clientes descobre tatuadores através do telemóvel. Desenhamos cada ecrã para que navegar na galeria e entrar em contacto seja imediato com o polegar.',
    deliverables: [
      'Navegação mobile fluida e botões com toque confortável',
      'Carregamento ultrarrápido em redes móveis 4G/5G na Vercel',
      'Adaptação perfeita a ecrãs Retina, tablets de estúdio e desktop',
    ],
    colSpan: 'lg:col-span-6',
    previewSnippet: {
      label: 'Performance Mobile & Desktop',
      metricsOrSpec: 'Carregamento < 1.2s em 4G/5G',
      sampleItems: ['Galeria Táctil Fluida', 'Contacto Rápido no Telemóvel', 'Leitura de Alto Contraste'],
    },
  },
];

export interface TattooFeatureHighlight {
  id: string;
  label: string;
  headline: string;
  description: string;
  studioImpact: string;
  mockData: {
    header: string;
    sub: string;
    rows: { label: string; value: string }[];
  };
}

export const TATTOO_SPECIALIZED_FEATURES: TattooFeatureHighlight[] = [
  {
    id: 'portfolios-visuais',
    label: 'Portfólios visuais',
    headline: 'Fotografia em grande escala que respeita o contraste da pele e da tinta.',
    description:
      'Sem compressão agressiva que destrói o pontilhismo ou o fine line. As tuas peças são apresentadas com enquadramento de galeria.',
    studioImpact: 'Valoriza sessões de dia inteiro e projectos de grande dimensão.',
    mockData: {
      header: 'Arquivo Curado · 2024—2026',
      sub: 'Visualização sem perda de nitidez em ecrãs OLED',
      rows: [
        { label: 'Peças de Grande Escala (Costas / Manga)', value: '18 obras documentadas' },
        { label: 'Fotografia de Detalhe & Textura', value: 'Macro 1:1 sem artefactos' },
        { label: 'Trabalhos Cicatrizados (+6 meses)', value: 'Secção verificada' },
      ],
    },
  },
  {
    id: 'galerias-tatuagens',
    label: 'Galerias de tatuagens',
    headline: 'Organização inteligente entre peças realizadas e designs de Flash disponíveis.',
    description:
      'Separa claramente o teu portfólio de encomendas personalizadas do teu catálogo de Flash pronto a tatuar, permitindo reserva directa de peças únicas.',
    studioImpact: 'Aumenta a saída de flashes autorais sem esforço comercial.',
    mockData: {
      header: 'Catálogo Flash & Peças Únicas',
      sub: 'Estado actualizado: Disponível vs. Reservado',
      rows: [
        { label: 'Flash #04 — Serpente Botânica (16cm)', value: 'Disponível · Reservar' },
        { label: 'Flash #09 — Adaga Brutalista (12cm)', value: 'Disponível · Reservar' },
        { label: 'Flash #12 — Mariposa Nocturna (14cm)', value: 'Reservado · Lisboa' },
      ],
    },
  },
  {
    id: 'estilos-tatuagem',
    label: 'Estilos de tatuagem',
    headline: 'Apresenta a tua linguagem artística com clareza para atrair o cliente certo.',
    description:
      'Define o que fazes — e o que não fazes. Quer trabalhes em Blackwork, Fine Line, Realismo Preto e Cinza, Ornamental ou Ignorant Style, o visitante percebe imediatamente a tua linha.',
    studioImpact: 'Reduz pedidos fora do teu estilo e atrai clientes alinhados com a tua visão.',
    mockData: {
      header: 'Direcção Artística & Especialidades',
      sub: 'Filtro claro de projectos aceites na abertura de agenda',
      rows: [
        { label: 'Especialidade Principal', value: 'Blackwork & Gravura Contemporânea' },
        { label: 'Projectos Prioritários', value: 'Composição Anatómica & Coberturas Seleccionadas' },
        { label: 'Cuidados & Cicatrização', value: 'Protocolo incluído no site' },
      ],
    },
  },
  {
    id: 'informacoes-marcacoes',
    label: 'Informações sobre marcações',
    headline: 'Agenda aberta, regras de sinal, preparação para a sessão e perguntas frequentes.',
    description:
      'Comunica o estado da tua agenda (Aberta, Lista de Espera ou Guest Spots), valores mínimos de saída de agulha e recomendações antes da sessão.',
    studioImpact: 'Elimina 80% das mensagens repetitivas antes da marcação.',
    mockData: {
      header: 'Estado da Agenda & Condições',
      sub: 'Transparência total para o cliente antes do contacto',
      rows: [
        { label: 'Agenda Actual', value: 'Outubro & Novembro · Lisboa' },
        { label: 'Próximo Guest Spot', value: 'Porto · 14 a 18 de Novembro' },
        { label: 'Reserva de Data', value: 'Sinal dedutível no valor da sessão' },
      ],
    },
  },
  {
    id: 'formularios-personalizados',
    label: 'Formulários personalizados',
    headline: 'Briefing completo: ideia, zona do corpo, tamanho em centímetros e orçamento.',
    description:
      'Recebe pedidos organizados com todos os dados necessários para dares orçamento e agendar sem trocas de 20 mensagens.',
    studioImpact: 'Poupas horas todas as semanas na triagem de pedidos.',
    mockData: {
      header: 'Simulação de Pedido Recebido',
      sub: 'Todos os campos essenciais estruturados num único envio',
      rows: [
        { label: 'Zona do Corpo & Dimensão', value: 'Antebraço exterior · 18 cm' },
        { label: 'Conceito & Pele', value: 'Composição botânica em alto contraste' },
        { label: 'Disponibilidade do Cliente', value: 'Quartas ou Sextas à tarde' },
      ],
    },
  },
  {
    id: 'instagram',
    label: 'Instagram',
    headline: 'O complemento perfeito para transformar seguidores casuais em clientes.',
    description:
      'O Instagram gera descoberta; o teu website gera decisão e marcação. Criamos a ponte directa entre o teu perfil e a tua agenda.',
    studioImpact: 'Converte visitas ao perfil em pedidos de orçamento qualificados.',
    mockData: {
      header: 'Fluxo Instagram → Website Próprio',
      sub: 'Sem intermediários ou árvores de links genéricas',
      rows: [
        { label: 'Origem do Tráfego', value: 'Bio do Instagram & Destaques de Agenda' },
        { label: 'Tempo Médio de Exploração', value: '2m 45s no portfólio completo' },
        { label: 'Acção Final', value: 'Contacto directo e marcação de sessão' },
      ],
    },
  },
  {
    id: 'localizacao-estudio',
    label: 'Localização do estúdio',
    headline: 'Morada, indicações de acesso, estacionamento, transportes e estúdio privado.',
    description:
      'Quer trabalhes num estúdio de rua aberto ao público ou num atelier privado por marcação, apresentamos a localização, normas de acompanhantes e contactos.',
    studioImpact: 'Pontualidade e tranquilidade no dia da sessão.',
    mockData: {
      header: 'Coordenadas & Acesso ao Estúdio',
      sub: 'Informação prática para o dia da marcação',
      rows: [
        { label: 'Modalidade de Espaço', value: 'Atelier Privado · Apenas por Marcação' },
        { label: 'Acessos & Transportes', value: 'A 4 min do Metro · Coordenadas directas' },
        { label: 'Política de Estúdio', value: 'Ambiente calmo · 100% focado na sessão' },
      ],
    },
  },
];

export interface ProjectCaseStudy {
  id: string;
  name: string;
  style: string;
  styleCategory: 'Blackwork' | 'Fine Line' | 'Black & Grey' | 'Geométrico';
  location: string;
  image: string;
  imageAlt: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetric: string;
  secondaryMetric: string;
  deliverables: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  livePreviewPages: {
    heroHeadline: string;
    bookingStatus: string;
    featuredWorks: { title: string; placement: string; sessions: string }[];
    flashItems: { code: string; title: string; size: string; status: string }[];
  };
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'rafael-ink',
    name: 'Rafael Ink',
    style: 'Blackwork',
    styleCategory: 'Blackwork',
    location: 'Lisboa',
    image: projectRafael,
    imageAlt: 'Fotografia a preto e branco de tatuagem Blackwork nas costas e ombro realizada por Rafael Ink em Lisboa',
    summary:
      'Plataforma autoral em alto contraste para especialista em Blackwork pesado, gravura obscura e composições anatómicas de grande escala.',
    challenge:
      'O Rafael recebia dezenas de mensagens semanais no Instagram sem medidas nem descrição da zona do corpo, perdendo tempo a filtrar projectos de grande escala.',
    solution:
      'Criámos um website brutalista escuro com arquivo separado entre mangas/costas completas, catálogo de flashes disponíveis e triagem por zona anatómica.',
    impactMetric: '+68% pedidos de projectos de grande escala em 60 dias',
    secondaryMetric: '-5h/semana gastas a responder a mensagens vagas',
    deliverables: ['Website Personalizado', 'Galeria Blackwork 4K', 'Catálogo Flash Reservável', 'Triagem de Orçamento'],
    testimonial: {
      quote:
        'Antes passava o domingo à noite a responder a DMs incompletas. Agora os clientes chegam ao estúdio depois de verem o portfólio no site e enviam o pedido com tamanho, zona e referências certas.',
      author: 'Rafael Costa (Rafael Ink)',
      role: 'Tatuador Residente · Lisboa',
    },
    livePreviewPages: {
      heroHeadline: 'BLACKWORK AUTORAL & COMPOSIÇÃO ANATÓMICA EM LISBOA',
      bookingStatus: 'AGENDA ABERTA · LISBOA (OUT / NOV)',
      featuredWorks: [
        { title: 'Crânio & Flora Abissal', placement: 'Costas Completas', sessions: '4 Sessões · Cicatrizado' },
        { title: 'Serpente em Gravura', placement: 'Manga Completa', sessions: '3 Sessões · Fresco' },
        { title: 'Ícaro Brutalista', placement: 'Torso & Ombro', sessions: '2 Sessões · Cicatrizado' },
      ],
      flashItems: [
        { code: 'FL-01', title: 'Corvo de Duas Cabeças', size: '18 cm', status: 'Disponível' },
        { code: 'FL-02', title: 'Espada Relíquia', size: '22 cm', status: 'Disponível' },
        { code: 'FL-03', title: 'Rosa Negra Botânica', size: '14 cm', status: 'Reservado' },
      ],
    },
  },
  {
    id: 'marta-lines',
    name: 'Marta Lines',
    style: 'Fine Line',
    styleCategory: 'Fine Line',
    location: 'Porto',
    image: projectMarta,
    imageAlt: 'Retrato editorial monocromático de tatuagem Fine Line botânica e delicada por Marta Lines no Porto',
    summary:
      'Website minimalista de inspiração editorial para tatuadora focada em Fine Line botânico, micro-ilustração e traço de agulha única no Porto.',
    challenge:
      'A delicadeza do traço único perdia qualidade na compressão do Instagram e os clientes tinham dúvidas frequentes sobre como o Fine Line cicatriza ao longo dos anos.',
    solution:
      'Desenvolvemos uma galeria com zoom de alta nitidez e uma secção comparativa "Fresco vs. Cicatrizado após 1 Ano", gerando confiança imediata em novos clientes.',
    impactMetric: '+82% taxa de conversão de visitantes em marcações',
    secondaryMetric: 'Agenda de 2 meses preenchida em 72 horas após abertura',
    deliverables: ['Direcção Editorial Minimalista', 'Comparador Fresco / Cicatrizado', 'Guia Aftercare', 'Agenda de Guest Spots'],
    testimonial: {
      quote:
        'O site transmite exactamente a calma e o detalhe do meu atelier no Porto. A secção de tatuagens cicatrizadas acabou com os receios de quem vai fazer a primeira tatuagem.',
      author: 'Marta Sequeira (Marta Lines)',
      role: 'Fundadora & Tatuadora · Porto',
    },
    livePreviewPages: {
      heroHeadline: 'TRAÇO SINGULAR, BOTÂNICA & MICRO-ILUSTRAÇÃO NO PORTO',
      bookingStatus: 'LISTA DE PRIORIDADE ABERTA · PORTO & MADRID',
      featuredWorks: [
        { title: 'Herbário Silvestre', placement: 'Clavícula & Ombro', sessions: '1 Sessão · Cicatrizado 14 meses' },
        { title: 'Linha Contínua Minimal', placement: 'Antebraço Interior', sessions: '1 Sessão · Cicatrizado 8 meses' },
        { title: 'Estudo de Oliveira', placement: 'Costelas', sessions: '1 Sessão · Fresco' },
      ],
      flashItems: [
        { code: 'ML-11', title: 'Ramo de Lavanda Fina', size: '9 cm', status: 'Disponível' },
        { code: 'ML-14', title: 'Andorinha em Linha Única', size: '7 cm', status: 'Disponível' },
        { code: 'ML-18', title: 'Papoula Silvestre', size: '11 cm', status: 'Reservado' },
      ],
    },
  },
  {
    id: 'noir-tattoo-studio',
    name: 'Noir Tattoo Studio',
    style: 'Black & Grey',
    styleCategory: 'Black & Grey',
    location: 'Braga',
    image: projectNoir,
    imageAlt: 'Interior de estúdio minimalista e trabalho Black & Grey do Noir Tattoo Studio em Braga',
    summary:
      'Presença digital completa para estúdio privado em Braga com 4 artistas residentes e agenda rotativa de artistas convidados.',
    challenge:
      'Com quatro residentes de estilos complementares dentro do universo Preto e Cinza, os clientes não sabiam qual o tatuador ideal para o seu projecto.',
    solution:
      'Criámos um website de estúdio com portfólio individual por residente, calendário de artistas convidados (Guest Artists) e encaminhamento inteligente de marcações.',
    impactMetric: '+110% pedidos de sessão distribuídos pelos 4 residentes',
    secondaryMetric: '100% de ocupação nas vagas de Guest Artists em 3 meses',
    deliverables: ['Website Multi-Artista', 'Perfis de Residentes', 'Calendário de Guest Spots', 'Mapa & Acesso ao Estúdio'],
    testimonial: {
      quote:
        'Deixámos de parecer apenas uma página de Instagram e passámos a posicionar o Noir como um estúdio de referência no Norte. Os clientes já escolhem o artista certo diretamente no site.',
      author: 'Diogo & Equipa Noir',
      role: 'Direcção Artística · Noir Tattoo Studio, Braga',
    },
    livePreviewPages: {
      heroHeadline: 'ESTÚDIO PRIVADO DE REALISMO & BLACK AND GREY EM BRAGA',
      bookingStatus: '4 ARTISTAS RESIDENTES · MARCAÇÕES ABERTAS',
      featuredWorks: [
        { title: 'Escultura Clássica em Sombra', placement: 'Manga Completa', sessions: '5 Sessões · Diogo V.' },
        { title: 'Retrato Cinematográfico', placement: 'Antebraço', sessions: '2 Sessões · Sofia M.' },
        { title: 'Composição Surrealista', placement: 'Perna Completa', sessions: '6 Sessões · Tiago R.' },
      ],
      flashItems: [
        { code: 'NR-01', title: 'Sessão Dia Inteiro (7h)', size: 'Peça Grande', status: 'Disponível' },
        { code: 'NR-02', title: 'Meia Sessão (3h30)', size: 'Peça Média', status: 'Disponível' },
        { code: 'NR-03', title: 'Consulta Presencial no Estúdio', size: '30 min', status: 'Gratuito' },
      ],
    },
  },
  {
    id: 'vasco-geometric',
    name: 'Vasco K.',
    style: 'Geométrico & Dotwork',
    styleCategory: 'Geométrico',
    location: 'Coimbra',
    image: projectVasco,
    imageAlt: 'Fotografia a preto e branco de tatuagem geométrica e pontilhismo no braço por Vasco K. em Coimbra',
    summary:
      'Website de precisão matemática para especialista em geometria sagrada, dotwork ornamental e projectos de fecho de manga.',
    challenge:
      'Os projectos de dotwork exigem explicar ao cliente o processo de medição anatómica e o planeamento em várias sessões consecutivas.',
    solution:
      'Construímos uma página interactiva que demonstra o processo de desenho directo na pele (freehand & stencil) e facilita agendamentos de sessões duplas.',
    impactMetric: '+54% valor médio por projecto adjudicado no estúdio',
    secondaryMetric: 'Tempo de resposta a orçamentos reduzido para menos de 24h',
    deliverables: ['Website Personalizado', 'Galeria Macro Dotwork', 'Guia de Sessões Longas', 'Triagem Anatómica'],
    testimonial: {
      quote:
        'Quem procura geometria e pontilhismo repara em cada milímetro. O site que a @inkcode.web criou tem exactamente a mesma precisão que eu coloco nas minhas linhas.',
      author: 'Vasco K.',
      role: 'Tatuador Independente · Coimbra & Lisboa',
    },
    livePreviewPages: {
      heroHeadline: 'GEOMETRIA ORNAMENTAL, DOTWORK & SIMETRIA ANATÓMICA',
      bookingStatus: 'AGENDA COIMBRA & GUEST SPOT LISBOA',
      featuredWorks: [
        { title: 'Mandala & Fluxo Anatómico', placement: 'Manga + Peito', sessions: '5 Sessões · Cicatrizado' },
        { title: 'Padrão Hexagonal em Pontilhismo', placement: 'Antebraço e Mão', sessions: '3 Sessões · Cicatrizado' },
        { title: 'Coluna Ornamental', placement: 'Espinha Dorsal', sessions: '2 Sessões · Fresco' },
      ],
      flashItems: [
        { code: 'VK-01', title: 'Projecto Fecho de Antebraço', size: 'Simetria à Medida', status: 'Disponível' },
        { code: 'VK-02', title: 'Ornamento de Ombro Duplo', size: 'À Medida', status: 'Disponível' },
        { code: 'VK-03', title: 'Geometria de Mão / Dedos', size: 'Sessão Única', status: 'Disponível' },
      ],
    },
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
  durationLabel: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01.',
    title: 'Conversa',
    description: 'Percebemos o teu estilo, trabalho e objectivos.',
    details:
      'Analisamos o teu portfólio actual, o tipo de projectos que queres atrair mais (ex.: peças grandes, flashes autorais, estúdio privado) e como geres as tuas marcações.',
    durationLabel: 'Alinhamento inicial',
  },
  {
    number: '02.',
    title: 'Conceito',
    description: 'Criamos a direcção visual do teu website.',
    details:
      'Definimos a estrutura das páginas, a tipografia, o contraste monocromático e a apresentação das tuas galerias para que o site pareça uma extensão natural do teu traço.',
    durationLabel: 'Direcção visual',
  },
  {
    number: '03.',
    title: 'Desenvolvimento',
    description: 'Transformamos o conceito num website rápido, responsivo e funcional.',
    details:
      'Programamos o website com foco em performance no telemóvel, compressão de imagem de alta nitidez, SEO para pesquisas locais e canais de marcação prontos a usar.',
    durationLabel: 'Construção em 24h',
  },
  {
    number: '04.',
    title: 'Lançamento',
    description: 'Publicamos o site e entregamos tudo pronto para começar a receber clientes.',
    details:
      'Disponibilizamos o domínio e a hospedagem na Vercel, ligamos ao teu Instagram e WhatsApp, e entregamos o teu site online em 24h.',
    durationLabel: 'Publicação oficial',
  },
];

export interface BenefitItem {
  index: string;
  title: string;
  description: string;
}

export const BENEFITS: BenefitItem[] = [
  {
    index: '01.',
    title: 'Mais profissionalismo',
    description:
      'Eleva a percepção do teu trabalho e justifica o valor das tuas sessões com uma imagem sólida e autoral.',
  },
  {
    index: '02.',
    title: 'Melhor apresentação do portfólio',
    description:
      'As tuas melhores tatuagens organizadas por estilo, escala e cicatrização, sem ficarem enterradas no feed.',
  },
  {
    index: '03.',
    title: 'Maior confiança por parte dos clientes',
    description:
      'Informações transparentes sobre higiene, estúdio, processo de reserva e cuidados pós-tatuagem.',
  },
  {
    index: '04.',
    title: 'Mais facilidade no contacto',
    description:
      'Pedidos de orçamento com zona do corpo, tamanho em centímetros e ideia já filtrados antes de responderes.',
  },
  {
    index: '05.',
    title: 'Presença digital própria',
    description:
      'Um espaço 100% teu na internet, imune a alterações de algoritmos ou instabilidades nas redes sociais.',
  },
  {
    index: '06.',
    title: 'Experiência optimizada para telemóvel',
    description:
      'Desenhado para a grande maioria de clientes que pesquisam, exploram portfólios e marcam sessões pelo smartphone.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  extraNote: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Preciso de saber programar?',
    answer: 'Não. Tratamos de todo o processo técnico.',
    extraNote:
      'Da estrutura e design até à publicação online e configuração de segurança — recebes o teu website chave-na-mão.',
  },
  {
    question: 'Posso escolher o design?',
    answer: 'Sim. Cada website é desenvolvido de acordo com o teu estilo, identidade e objectivos.',
    extraNote:
      'Não usamos templates repetidos. O layout é desenhado em função da tua estética (Blackwork, Fine Line, Realismo, Tradicional, Geométrico, etc.).',
  },
  {
    question: 'O site funciona no telemóvel?',
    answer: 'Sim. Todos os websites são pensados para funcionar em smartphones, tablets e computadores.',
    extraNote:
      'Testamos todas as galerias e secções em ecrãs iOS e Android para garantir rapidez mesmo em ligações móveis.',
  },
  {
    question: 'Posso adicionar novas tatuagens ao portfólio?',
    answer: 'Sim. A solução pode ser preparada para permitir actualizações futuras.',
    extraNote:
      'Podes adicionar novas fotografias, actualizar flashes disponíveis ou alterar o estado da tua agenda facilmente.',
  },
  {
    question: 'Vocês tratam do domínio?',
    answer: 'Disponibilizamos junto ao site o domínio e a hospedagem na Vercel.',
    extraNote:
      'Não tens de te preocupar com servidores nem configurações técnicas — entregamos o teu site já com o domínio configurado e hospedagem rápida na Vercel incluídos.',
  },
  {
    question: 'Quanto tempo demora?',
    answer: 'A @inkcode.web cria e entrega o teu site pronto em 24h.',
    extraNote:
      'Após o alinhamento do teu estilo e selecção das fotografias do portfólio, o teu website fica publicado e pronto a receber clientes em 24 horas.',
  },
];
