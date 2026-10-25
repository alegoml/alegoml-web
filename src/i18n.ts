export type Lang = 'es' | 'en';

export const site = {
  name: 'Alejandro Gómez',
  url: 'https://alegoml.com',
  email: 'alegoml_@outlook.com',
  x: 'https://x.com/alegoml',
  xHandle: '@alegoml',
  github: 'https://github.com/alegoml',
  linkedin: 'https://www.linkedin.com/in/alegoml/',
  // Pon aquí la ruta del CV cuando lo tengas, p. ej. '/cv.pdf' (archivo en public/cv.pdf)
  cv: '',
};

export const home: Record<Lang, string> = { es: '/', en: '/en/' };

export const other = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

export const ui = {
  es: {
    ogLocale: 'es_ES',
    dateLocale: 'es-ES',
    agent: 'Pregunta a un agente sobre mí',
    agentShort: 'Pregunta a un agente',
    agentHint: 'Abre tu IA con una pregunta sobre mí ya escrita',
    copy: 'Copiar prompt',
    copied: 'Copiado, pégalo en tu IA',
    prompt:
      'Lee https://alegoml.com/llms.txt y cuéntame quién es Alejandro Gómez, qué ha construido y si encajaría como AI engineer en prácticas en una startup.',
    langLabel: 'Idioma',
    themeLabel: 'Cambiar entre tema claro y oscuro',
    projects: 'Proyectos',
    noProjects: 'Todavía no he publicado ninguno.',
    blog: 'Blog',
    noPosts: 'Todavía no he escrito nada.',
    contact: 'Contacto',
    contactText:
      'Estoy abierto a prácticas, a colaborar en proyectos y, en general, a hablar con cualquier persona que quiera contactarme. Si crees que puedo ayudarte en algo, escríbeme.',
    dockTitle: '¿Quieres conocerme?',
    dockText: 'Tengo los DMs de X abiertos.',
    dockButton: 'Escríbeme',
    back: '← Volver al inicio',
    notFound: 'Esta página no existe.',
  },
  en: {
    ogLocale: 'en_US',
    dateLocale: 'en-GB',
    agent: 'Ask an agent about me',
    agentShort: 'Ask an agent',
    agentHint: 'Opens your AI with a question about me already typed',
    copy: 'Copy prompt',
    copied: 'Copied, paste it into your AI',
    prompt:
      'Read https://alegoml.com/llms.txt and tell me who Alejandro Gómez is, what he has built and whether he would fit as an AI engineering intern at a startup.',
    langLabel: 'Language',
    themeLabel: 'Switch between light and dark theme',
    projects: 'Projects',
    noProjects: 'Nothing published yet.',
    blog: 'Blog',
    noPosts: 'Nothing written yet.',
    contact: 'Contact',
    contactText:
      "I'm open to internships, to collaborating on projects and, more generally, to talking with anyone who wants to reach out. If you think I can help you with something, get in touch.",
    dockTitle: 'Want to get to know me?',
    dockText: 'My X DMs are open.',
    dockButton: 'DM me',
    back: '← Back home',
    notFound: "This page doesn't exist.",
  },
} as const;

export const agents = [
  { name: 'ChatGPT', url: (q: string) => `https://chatgpt.com/?q=${encodeURIComponent(q)}` },
  { name: 'Claude', url: (q: string) => `https://claude.ai/new?q=${encodeURIComponent(q)}` },
  { name: 'Perplexity', url: (q: string) => `https://www.perplexity.ai/search?q=${encodeURIComponent(q)}` },
];

// 2026-11-05 -> 2026.11.05
export const formatDate = (d: Date) =>
  `${d.getUTCFullYear()}.${String(d.getUTCMonth() + 1).padStart(2, '0')}.${String(d.getUTCDate()).padStart(2, '0')}`;
