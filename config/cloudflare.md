# Cloudflare Configuration

## Zone Details
- **Zone ID**: 7f7d3bbce3476ded64a3552bfdb7b838
- **Domain**: mapkings.co.uk
- **Status**: Active
- **Nameservers**: guy.ns.cloudflare.com, kiki.ns.cloudflare.com

## DNS Records
- A: mapkings.co.uk → 217.160.0.186 (proxied)
- CNAME: www → mapkings.co.uk (proxied)
- MX: mailserver.livemail.co.uk (priority 10)
- TXT: GSC verification, Bing verification, SPF

## API Token
Saved in vault: ~/.vault/cloudflare.env

## Optimization Settings (Applied)
- Auto Minify: CSS, HTML, JS enabled
- Brotli: enabled
- Always Use HTTPS: enabled
- Auto HTTPS Rewrites: enabled
- Browser Cache TTL: 1 month (2592000)
- Rocket Loader: enabled
- Cache Level: aggressive
- WP-Optimize: deactivated (Cloudflare handles caching)

## DNS Records
- A: mapkings.co.uk → 217.160.0.186 (proxied)
- CNAME: www → mapkings.co.uk (proxied)
- MX: mailserver.livemail.co.uk (priority 10)
- TXT: GSC verification, Bing verification, SPF

## Email Routing
- remapkings@mapkings.co.uk → mapkingperformance@gmail.com
- catch-all *@mapkings.co.uk → mapkingperformance@gmail.com
- Rule ID: 748600bb0d9e4152bcb4db0771687aba
