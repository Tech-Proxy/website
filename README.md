# Tech Proxy website

Source for [www.techproxy.co.uk](https://www.techproxy.co.uk).

## Structure

The site is plain static HTML and CSS in [`site/`](site/). There is no build step and there are no third-party scripts, fonts or cookies.

| Path | Page |
|---|---|
| `site/index.html` | Home |
| `site/services/index.html` | Services |
| `site/about/index.html` | About and company information |
| `site/contact/index.html` | Contact |
| `site/privacy/index.html` | Privacy notice |
| `site/404.html` | Not found |
| `site/staticwebapp.config.json` | Azure Static Web Apps routing and security headers |

The header and footer are repeated in every page, so change them everywhere when you edit them. The footer carries the statutory company details required on company websites: registered name, number, place of registration and registered office.

## Run locally

```bash
npx @azure/static-web-apps-cli start site --swa-config-location site
```

This serves the site on http://localhost:4280 with the same routing rules and headers as Azure.

## Deploy

The site is deployed manually to Azure Static Web Apps. Upload the `site` folder as-is. There is no build step: the app location is `site` and the output location is empty. `staticwebapp.config.json` must stay inside `site`.

With the SWA CLI, putting the deployment token from the Azure portal in the `SWA_CLI_DEPLOYMENT_TOKEN` environment variable:

```bash
npx @azure/static-web-apps-cli deploy ./site --env production
```

The Content-Security-Policy in `staticwebapp.config.json` blocks inline JavaScript and `style=""` attributes (the JSON-LD `application/ld+json` data block is fine). Put styles in `site/assets/css/styles.css` and scripts in `site/assets/js/`.
