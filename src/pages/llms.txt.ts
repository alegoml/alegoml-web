import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { site } from '../i18n';
import { getPosts, getProjects, postUrl } from '../lib/content';

// Resumen en texto plano para agentes de IA: https://llmstxt.org
export const GET: APIRoute = async () => {
  const about = await getEntry('about', 'en');
  const projects = await getProjects('en');
  const posts = await getPosts('en');

  // Quita los enlaces markdown y la cursiva de la bio
  const bio = (about?.body ?? '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .trim();

  const lines: string[] = [
    `# ${site.name}`,
    '',
    `> ${about?.data.description ?? ''}`,
    '',
    '## About',
    '',
    bio,
    '',
    '## Links',
    '',
    `- Website (Spanish): ${site.url}/`,
    `- Website (English): ${site.url}/en/`,
    `- X: ${site.x}`,
    `- GitHub: ${site.github}`,
    `- LinkedIn: ${site.linkedin}`,
    `- Email: ${site.email}`,
  ];
  if (site.cv) lines.push(`- CV: ${new URL(site.cv, site.url).href}`);

  lines.push('', '## Projects', '');
  if (projects.length === 0) {
    lines.push('No projects published yet.');
  } else {
    for (const p of projects) {
      const meta = [p.data.kind, p.data.year, p.data.status].filter(Boolean).join(', ');
      lines.push(`### ${p.data.title} (${meta})`, '', (p.body ?? '').trim());
      if (p.data.tech.length) lines.push('', `Tech: ${p.data.tech.join(', ')}`);
      for (const l of p.data.links) lines.push(`- ${l.label}: ${l.url}`);
      lines.push('');
    }
  }

  lines.push('', '## Writing', '');
  if (posts.length === 0) {
    lines.push('No posts published yet.');
  } else {
    for (const post of posts) {
      const desc = post.data.description ? `: ${post.data.description}` : '';
      lines.push(`- [${post.data.title}](${site.url}${postUrl('en', post.id)})${desc}`);
    }
  }

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
