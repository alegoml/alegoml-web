import { getCollection } from 'astro:content';
import type { Lang } from '../i18n';

// Los ids son "es/nombre" o "en/nombre"
export const langOf = (id: string) => id.split('/')[0] as Lang;
export const slugOf = (id: string) => id.split('/').slice(1).join('/');

export async function getProjects(lang: Lang) {
  const all = await getCollection('projects', (e) => langOf(e.id) === lang && !e.data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year.localeCompare(a.data.year));
}

export async function getPosts(lang: Lang) {
  const all = await getCollection('blog', (e) => langOf(e.id) === lang && !e.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postUrl = (lang: Lang, id: string) =>
  `${lang === 'es' ? '/blog/' : '/en/blog/'}${slugOf(id)}/`;
