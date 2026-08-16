# MapKings.co.uk — Full WordPress Backup

**Backup Date**: August 16, 2026
**Source**: https://mapkings.co.uk/ (via WP REST API)
**Auth**: Application Password (IcebergMedia)

## Contents

- `content/` — All posts, pages, categories, tags (JSON + individual HTML)
- `media/` — All uploaded media files + index

## Content Summary

- **Posts**: 11 blog articles
- **Pages**: 23 pages (home, services, areas, blog posts, benefits, etc.)
- **Media**: 57 files (images, documents)
- **Categories**: 1 (Blog)

## How to Restore

### Option A: WordPress Import
1. Install WordPress + Elementor
2. Use WP REST API to POST content back
3. Upload media via media endpoint

### Option B: Static Site (Astro/Cloudflare Pages)
1. Use the HTML files in `content/` as source
2. Process with a static site generator
3. Deploy to Cloudflare Pages

### Option C: Elementor Template Import
1. The page HTML contains Elementor shortcodes
2. Import via Elementor's template system

## WordPress Details

- **WP Version**: Latest (as of Aug 2026)
- **Theme**: Hello Elementor
- **Plugins**: Elementor, Yoast SEO, Elementskit, MetForm, Webmcp
- **Admin URL**: https://mapkings.co.uk/mapkings-auth (custom login)
- **User**: mapkings (administrator)

## Changes Since Last Backup (Jul 17 → Aug 16)

- 11 blog posts created (Jul 13)
- 23 pages (services, benefits, areas, booking, calculator)
- 57 media uploads
- Yoast SEO configured on all pages
- GBP posting scheduled via GHL
