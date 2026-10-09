# LANet for længe siden

A simple Danish LAN event page, inspired by nostalgic dinosaur adventure cartoons. Built with HTML, CSS, and JavaScript; no build step or dependencies.

Run `node server.cjs` in this folder and open http://127.0.0.1:5173. You can also open `index.html` directly.

The event runs 9–11 October 2026 at Nordfyns Efterskole. Event details are editable in `index.html`. The “Pak din PC” button opens a packing checklist saved locally in the visitor's browser. No registration backend is connected.

Typography: Google Fonts (Fraunces and DM Sans), with system fallbacks. Artwork: original AI-generated illustration saved in `assets/prehistoric-valley.png`. Design reference: `design/concept.png`.

The Oplevelsen section covers shared gaming, friendly competition and social time. Praktisk info contains the confirmed date and venue, equipment guidance and a second entry point to the packing checklist. Both section links are available on mobile. The expanded section design reference is `design/sections-concept.png`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the website on pushes to the default branch (`main` or `master`). In the GitHub repository, set **Settings → Pages → Source → GitHub Actions**. Only public website files are uploaded; the local server, README, and design references are excluded from the deployed site.

To connect an owned domain, add it in **Settings → Pages → Custom domain** first, then configure the DNS records at your domain provider. For an apex domain, GitHub's A-record targets are `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. For `www` or another subdomain, use a CNAME pointing to the repository owner's `<owner>.github.io` hostname, without the repository name. Enable **Enforce HTTPS** once GitHub provisions the certificate.

The custom domain is configured in repository settings; this Actions deployment does not require a CNAME file. For domains containing non-ASCII characters, enter the Punycode form in GitHub.

Official instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
