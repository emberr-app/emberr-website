# Emberr website

The landing page for [Emberr](https://github.com/emberr-app/Emberr) at https://emberr.app.

Built with [Astro](https://astro.build) as a fully static site. The download cards are the only React island; everything else is plain HTML and CSS.

## Commands

Run these from this folder:

| Command           | What it does                                  |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Installs dependencies                         |
| `npm run dev`     | Starts the dev server at `localhost:4321`     |
| `npm run build`   | Builds the site into `dist/`                  |
| `npm run preview` | Serves the built site locally to check it     |

## Layout

```text
public/                 files served as they are (favicon, robots.txt, llms.txt)
src/
  assets/               icon, screenshot and Inter, Lora and JetBrains Mono fonts, processed by Astro
  components/           page sections, header, footer, buttons, download cards
  documents/            privacy-policy.md, a copy of the app's PRIVACY.md
  layouts/Layout.astro  shared <head>: SEO and Open Graph tags, font, colors
  pages/                index.astro (/) and privacy.astro (/privacy)
  styles/global.css     colors and base styles
```

## Keeping things in step

- **Privacy policy:** `src/documents/privacy-policy.md` is a copy of [PRIVACY.md](https://github.com/emberr-app/Emberr/blob/main/PRIVACY.md). When the policy changes, copy it again. The only difference is that the `SECURITY.md` link points to GitHub.
- **Page text:** `public/llms.txt` and the JSON-LD data in `src/pages/index.astro` describe the same things as the page. Update them when the features, privacy points or downloads change.
- **Download links** use `releases/latest/download/<file name>`, so release file names must stay the same.
- **Colors** match the app's default Emberr theme.

## Hosting

Deployed on Cloudflare Pages from the `main` branch.

## License

GNU AGPL-3.0, like the app.
