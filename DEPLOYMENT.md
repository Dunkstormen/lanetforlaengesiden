# Domain setup: lanetforlaengesiden.dk

Deployment workflow is prepared in `.github/workflows/pages.yml`. Deployment is not live yet: a target GitHub repository must be selected and Pages enabled with GitHub Actions as the publishing source.

Once the repository exists, set its Pages custom domain to `lanetforlaengesiden.dk` before changing DNS.

The connected GitHub account is `Dunkstormen`. If this account owns the selected repository, configure these website records:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | Dunkstormen.github.io |

The domain's A record currently resolves to `212.237.249.17` (checked 9 October 2026). Replace that website A record with the four records above when the GitHub Pages domain is configured. Preserve email-related MX/TXT records and unrelated subdomains. If an existing AAAA record points to another website host, adjust it too.

After DNS checks pass and the certificate is provisioned, enable Enforce HTTPS. Verify both the apex and www domains load the site, and confirm assets and the packing checklist work.

Source: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
