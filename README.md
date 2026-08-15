# Silviu Popa — Portfolio

A single-page portfolio connecting software engineering with independent quantitative research under one theme: **building systems for uncertain environments**.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Production build

```bash
npm run build
```

## Cloudflare deployment

The default build detects its deployment environment. On Cloudflare Pages (`CF_PAGES=1`) it creates the static Vite site only; locally and in Sites it creates the Cloudflare Worker bundle. This prevents Pages from mistaking the Worker configuration for a Pages configuration.

For a GitHub-connected Cloudflare Pages project use:

```text
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
```

The included `wrangler.toml` declares the same `dist` output. `npm run build:pages` can be used to reproduce the Pages build locally. Connect `silviupopa.dev` after the deployment succeeds and DNS ownership is available.

## Owner assets and facts still needed

These items were not supplied and are intentionally not invented or linked in the public interface:

- approved résumé PDF for `public/resume/`;
- FleetOps screenshots;
- Florance screenshots;
- NFT marketplace screenshots;
- F1 Management Application demo and fuller implementation details;
- redacted Alpha Capital evidence asset or official verification URL;
- redacted FundedNext evidence assets or official verification URLs;
- redacted FundingPips image for a local thumbnail (the official verification URL is already used).

The profile photograph was supplied by the owner. The voxel-project visuals were extracted from the owner-provided bachelor thesis, and the public PASCraft, NFTRealm and F1 repository links were matched against the owner’s GitHub account.

Suggested evidence filenames from the brief:

```text
public/performance/alpha-capital-lifetime.png
public/performance/fundednext-5378.png
public/performance/fundednext-4818.png
public/performance/fundingpips-verification.png
```

Before adding any document, remove private account identifiers, phone numbers, residential details and other sensitive information.
