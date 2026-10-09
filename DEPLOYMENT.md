# Domain setup: lanetforlaengesiden.dk

Repository: https://github.com/Dunkstormen/lanetforlaengesiden

Site: https://lanetforlaengesiden.dk/

The `.github/workflows/pages.yml` workflow deployed successfully. GitHub Pages uses GitHub Actions and has `lanetforlaengesiden.dk` configured as its custom domain. Future pushes to `main` automatically redeploy the website.

Cloudflare website DNS records were updated in Benjamins Account on 10 October 2026. The four root A records and the www CNAME below are proxied through Cloudflare. The pre-existing wildcard record remains unchanged.

The connected GitHub account is `Dunkstormen`. If this account owns the selected repository, configure these website records:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | Dunkstormen.github.io |

The previous website A record was `212.237.249.17`. Some DNS caches still return that old address during propagation. Resolver 1.1.1.1 already returns Cloudflare nameservers (`audrey.ns.cloudflare.com` and `yoxall.ns.cloudflare.com`) and Cloudflare proxy addresses.

Verified deployment success and the packing checklist in the public GitHub Pages site before configuring its domain. HTTPS requests using the current Cloudflare IP with normal certificate validation return the correct LANet HTML (HTTP 200), and www redirects to the apex domain (HTTP 301). The local browser still reaches the old server through cached DNS and reports a certificate mismatch. Do not bypass that warning; wait for DNS propagation.

Cloudflare's Always Use HTTPS redirect is enabled, and its Universal SSL certificate is active. GitHub's own custom-domain certificate check is still pending. Cloudflare already serves a valid edge certificate. Enable GitHub Enforce HTTPS when its certificate is available.

Source: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
