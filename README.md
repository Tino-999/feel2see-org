# Feel2see Landing Page

Static, framework-free landing page for `feel2see.org`.

## Files

- `index.html` - single-page hero layout
- `styles.css` - responsive desktop, tablet, and mobile styling
- `script.js` - mobile menu and viewport-height helper
- `_redirects` - Cloudflare Pages SPA fallback

## Cloudflare Pages

1. Connect the GitHub repository `Tino-999/feel2see-org` in Cloudflare Pages.
2. Select the static deployment settings:
   - Build command: leave empty
   - Build output directory: `/` or root
3. After the first deployment, open the Pages project and go to **Custom domains**.
4. Add `feel2see.org` and follow Cloudflare's DNS prompt.
5. If the domain is already managed by Cloudflare, Pages will create the required DNS records automatically. Otherwise, point the domain to Cloudflare nameservers first.

The `_redirects` file keeps all routes serving `index.html`.
