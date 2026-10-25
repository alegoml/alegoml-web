# alegoml.com

Personal website of Alejandro Gómez, built with [Astro](https://astro.build). Spanish at `/`, English at `/en/`.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Bio, subtítulo y descripción para Google | `src/content/about/es.md` y `src/content/about/en.md` |
| Proyectos | `src/content/projects/es/*.md` y `src/content/projects/en/*.md` (ver `_plantilla.md`) |
| Artículos del blog | `src/content/blog/es/*.md` y `src/content/blog/en/*.md` (ver `_plantilla.md`) |
| Email, redes y CV | `src/i18n.ts` (objeto `site`) |
| Textos de botones y secciones | `src/i18n.ts` (objeto `ui`) |
| Colores, letra y diseño | `src/styles/global.css` |

Los archivos que empiezan por `_` no se publican. Con `draft: true` tampoco.

`/llms.txt` se genera solo a partir de la bio en inglés, los proyectos y el blog.

## Publicar

Cada `git push` a `main` despliega la web en Cloudflare Pages.
