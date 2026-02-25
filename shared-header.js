/**
 * Eplug Project — Shared Header + Design System Foundation
 * Drop <div id="eplug-header"></div> at top of <body>
 * and <script src="[path]/shared-header.js"></script> before </body>
 */
(function () {
  'use strict';

  // ── Path detection ──────────────────────────────────────────────────────────
  function getBase() {
    const parts = window.location.pathname.replace(/\/+$/, '').split('/');
    let repoIdx = parts.findIndex(p => p === 'Eplug_web');
    if (repoIdx === -1) repoIdx = 0;
    const afterRepo = parts.slice(repoIdx + 1).filter(Boolean);
    const depth = afterRepo.length > 0 && afterRepo[afterRepo.length - 1].includes('.')
      ? afterRepo.length - 1 : afterRepo.length;
    return depth === 0 ? './' : '../'.repeat(depth);
  }

  const base = getBase();
  const logoSrc = base + 'concept_v2/src/assets/images/eplug-logo-on-dark.svg';
  const hubHref = base + 'index.html';

  // ── Active link ─────────────────────────────────────────────────────────────
  function isActive(href) {
    if (href.startsWith('http')) return false;
    const resolved = new URL(href, window.location.href).pathname;
    const current = window.location.pathname;
    const norm = p => p.replace(/\/index\.html$/, '/').replace(/\/$/, '');
    return norm(current) === norm(resolved);
  }

  const navLinks = [
    { label: 'Hub', href: hubHref },
    { label: 'Sitemap', href: base + 'UX/sitemap.html' },
    { label: 'Wireframes', href: base + 'UX/wireframes/index.html' },
    { label: 'Design', href: 'https://www.figma.com/design/NsarAMa9SQMVyRCQDvgqg3/Eplug-Web', external: true },
  ];

  // ── Global Design System CSS ────────────────────────────────────────────────
  // Applied to every page that loads this script
  const systemCss = `
    :root {
      --bg-deep:        #0a0613;
      --bg-card:        rgba(255, 255, 255, 0.03);
      --bg-card-hover:  rgba(255, 255, 255, 0.055);
      --border-subtle:  rgba(255, 255, 255, 0.06);
      --border-hover:   rgba(168, 130, 255, 0.28);
      --text-primary:   #f0ecf7;
      --text-secondary: rgba(240, 236, 247, 0.55);
      --text-tertiary:  rgba(240, 236, 247, 0.35);
      --accent-purple:  #a882ff;
      --glow-purple:    rgba(168, 130, 255, 0.08);
      --radius-sm:      8px;
      --radius-md:      12px;
      --radius-lg:      16px;
    }

    html {
      font-size: 16px;
      scroll-behavior: smooth;
      /* Always show scrollbar to prevent layout shift when navigating */
      overflow-y: scroll;
    }

    body {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg-deep);
      color: var(--text-primary);
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }

    /* Ambient glow — same on all pages */
    body::before {
      content: '';
      position: fixed;
      top: -200px;
      left: 50%;
      transform: translateX(-50%);
      width: 900px;
      height: 700px;
      background: radial-gradient(ellipse, rgba(168, 130, 255, 0.09) 0%, rgba(124, 92, 224, 0.04) 40%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    body::after {
      content: '';
      position: fixed;
      bottom: -300px;
      right: -100px;
      width: 600px;
      height: 600px;
      background: radial-gradient(ellipse, rgba(224, 108, 176, 0.05) 0%, transparent 60%);
      pointer-events: none;
      z-index: 0;
    }

    /* Grain overlay */
    .eplug-grain {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 999;
      opacity: 0.022;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 128px;
    }

    /* Unified scrollbar */
    ::-webkit-scrollbar       { width: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(168,130,255,0.2); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(168,130,255,0.35); }

    /* ── Unified Page Layout ── */
    .eplug-page {
      position: relative;
      z-index: 1;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 48px;
      width: 100%;
    }

    /* ── Unified Page Header block ── */
    .eplug-section-head {
      padding: 48px 0 40px;
    }

    .eplug-tag {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-family: 'Montserrat', sans-serif;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      color: var(--accent-purple);
      background: rgba(168, 130, 255, 0.08);
      border: 1px solid rgba(168, 130, 255, 0.15);
      padding: 5px 13px;
      border-radius: 100px;
      margin-bottom: 18px;
    }

    .eplug-tag::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--accent-purple);
      box-shadow: 0 0 8px var(--accent-purple);
      flex-shrink: 0;
    }

    .eplug-heading {
      font-family: 'Montserrat', sans-serif;
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 1.15;
      color: var(--text-primary);
      margin-bottom: 10px;
    }

    .eplug-subheading {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: var(--text-secondary);
      line-height: 1.6;
      letter-spacing: 0.1px;
    }

    /* ── Unified Tile / Card ── */
    .eplug-tile {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 20px 24px;
      text-decoration: none;
      display: block;
      color: inherit;
      position: relative;
      overflow: hidden;
      transition: border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease, transform 0.18s ease;
    }

    .eplug-tile:hover {
      border-color: var(--border-hover);
      background: var(--bg-card-hover);
      box-shadow: 0 8px 32px rgba(168, 130, 255, 0.07);
      transform: translateY(-2px);
    }

    .eplug-tile::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(168, 130, 255, 0.4), transparent);
      transition: left 0.4s ease;
    }

    .eplug-tile:hover::before { left: 100%; }

    .eplug-tile-num {
      font-size: 11px;
      font-weight: 700;
      color: var(--text-tertiary);
      font-variant-numeric: tabular-nums;
      position: absolute;
      top: 16px;
      right: 16px;
    }

    .eplug-tile-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      color: var(--accent-purple);
      margin-bottom: 8px;
      opacity: 0.8;
    }

    .eplug-tile-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.3;
      letter-spacing: -0.1px;
      margin-bottom: 8px;
    }

    .eplug-tile-desc {
      font-size: 13px;
      line-height: 1.6;
      color: var(--text-secondary);
    }

    .eplug-tile-meta {
      margin-top: 14px;
      font-size: 11px;
      color: var(--text-tertiary);
      font-weight: 500;
    }

    .eplug-tile-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 14px;
    }

    .eplug-tile-tag {
      font-size: 10px;
      font-weight: 500;
      padding: 3px 9px;
      border-radius: 100px;
      background: rgba(255,255,255,0.04);
      color: var(--text-tertiary);
      border: 1px solid rgba(255,255,255,0.05);
    }

    .eplug-tile-bar {
      margin-top: 14px;
      height: 2px;
      background: rgba(255,255,255,0.05);
      border-radius: 2px;
      overflow: hidden;
    }

    .eplug-tile-bar-fill {
      height: 100%;
      border-radius: 2px;
      background: linear-gradient(90deg, rgba(168,130,255,0.6), rgba(168,130,255,0.3));
    }

    .eplug-tile-path {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      color: var(--text-tertiary);
      font-family: 'SF Mono', 'Cascadia Code', monospace;
    }

    .eplug-tile-arrow {
      opacity: 0;
      transform: translateX(-4px);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .eplug-tile:hover .eplug-tile-arrow { opacity: 0.6; transform: translateX(0); }

    /* Grid helpers */
    .eplug-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .eplug-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    /* Section group header (UX & Architecture, Isolated Components…) */
    .eplug-group-head {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      padding-top: 32px;
    }

    .eplug-group-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text-tertiary);
    }

    .eplug-group-count {
      font-size: 10px;
      font-weight: 500;
      color: var(--text-tertiary);
      opacity: 0.6;
    }

    .eplug-group-badge {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 4px;
    }

    .eplug-group-badge.done   { background: rgba(92,224,140,0.1); color: #5ce08c; border: 1px solid rgba(92,224,140,0.15); }
    .eplug-group-badge.active { background: rgba(168,130,255,0.1); color: #a882ff; border: 1px solid rgba(168,130,255,0.15); }
    .eplug-group-badge.soon   { background: rgba(240,236,247,0.05); color: var(--text-tertiary); border: 1px solid var(--border-subtle); }

    /* Progress bar on tile */
    .eplug-tile-progress { display: flex; align-items: center; gap: 8px; margin-top: 14px; }
    .eplug-tile-progress-bar { flex: 1; height: 2px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden; }
    .eplug-tile-progress-fill { height: 100%; border-radius: 2px; background: #5ce08c; }
    .eplug-tile-progress-fill.active { background: linear-gradient(90deg, #a882ff, #5c8ce0); }
    .eplug-tile-progress-pct { font-size: 11px; font-weight: 700; color: var(--text-tertiary); }
  `;

  // ── Header CSS ───────────────────────────────────────────────────────────────
  const headerCss = `
    #eplug-header, #eplug-header * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', -apple-system, sans-serif !important;
      line-height: 1;
    }

    #eplug-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
      background: rgba(10, 6, 19, 0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    #eplug-header .eh-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }

    #eplug-header .eh-logo a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    #eplug-header .eh-logo img {
      height: 48px !important;
      width: auto !important;
      display: block !important;
    }

    #eplug-header .eh-nav {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 0;
    }
    #eplug-header .eh-nav a {
      display: inline-block;
      font-size: 12px !important;
      font-weight: 600 !important;
      color: rgba(240, 236, 247, 0.32) !important;
      text-decoration: none !important;
      padding: 0 18px !important;
      height: 72px;
      line-height: 72px !important;
      letter-spacing: 0.4px !important;
      transition: color 0.15s ease !important;
      white-space: nowrap !important;
    }
    #eplug-header .eh-nav a:hover  { color: rgba(240, 236, 247, 0.68) !important; }
    #eplug-header .eh-nav a.eh-active { color: #ffffff !important; }

    #eplug-header .eh-sep {
      width: 1px;
      height: 12px;
      background: rgba(255,255,255,0.07);
      flex-shrink: 0;
      align-self: center;
    }

    #eplug-header .eh-right {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    #eplug-header .eh-stats {
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex-shrink: 0;
    }
    #eplug-header .eh-stat {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 13px;
    }
    #eplug-header .eh-stat-label {
      font-size: 9px !important;
      font-weight: 600 !important;
      color: rgba(240, 236, 247, 0.35) !important;
      letter-spacing: 0.06em !important;
      width: 40px;
      flex-shrink: 0;
    }
    #eplug-header .eh-stat-bar {
      width: 72px;
      height: 2px;
      background: rgba(255,255,255,0.07);
      border-radius: 2px;
      overflow: hidden;
      flex-shrink: 0;
    }
    #eplug-header .eh-stat-fill { height: 100%; border-radius: 2px; }
    #eplug-header .eh-stat-fill.ux     { background: #5ce08c; width: 85%; }
    #eplug-header .eh-stat-fill.design { background: #5c8ce0; width: 20%; }
    #eplug-header .eh-stat-fill.deploy { background: rgba(255,255,255,0.12); width: 0%; }
    #eplug-header .eh-stat-pct {
      font-size: 9px !important;
      font-weight: 600 !important;
      color: rgba(240, 236, 247, 0.32) !important;
      width: 26px;
      text-align: right;
      flex-shrink: 0;
    }
  `;

  // ── HTML ────────────────────────────────────────────────────────────────────
  function buildNav() {
    return navLinks.map((link, i) => {
      const active = isActive(link.href) ? ' eh-active' : '';
      const ext = link.external ? ' target="_blank" rel="noopener"' : '';
      const sep = i < navLinks.length - 1 ? '<div class="eh-sep"></div>' : '';
      return `<a class="eh-nav-link${active}" href="${link.href}"${ext}>${link.label}</a>${sep}`;
    }).join('');
  }

  const html = `
    <div class="eh-inner">
      <div class="eh-logo">
        <a href="${hubHref}"><img src="${logoSrc}" alt="EPLUG" /></a>
      </div>
      <nav class="eh-nav">${buildNav()}</nav>
      <div class="eh-right">
        <div class="eh-stats">
          <div class="eh-stat">
            <span class="eh-stat-label">UX</span>
            <div class="eh-stat-bar"><div class="eh-stat-fill ux"></div></div>
            <span class="eh-stat-pct">85%</span>
          </div>
          <div class="eh-stat">
            <span class="eh-stat-label">Design</span>
            <div class="eh-stat-bar"><div class="eh-stat-fill design"></div></div>
            <span class="eh-stat-pct">20%</span>
          </div>
          <div class="eh-stat">
            <span class="eh-stat-label">Deploy</span>
            <div class="eh-stat-bar"><div class="eh-stat-fill deploy"></div></div>
            <span class="eh-stat-pct">0%</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // ── Inject ──────────────────────────────────────────────────────────────────
  const target = document.getElementById('eplug-header');
  if (!target) {
    console.warn('[shared-header] No <div id="eplug-header"> found.');
    return;
  }

  // Grain overlay (if not already present)
  if (!document.querySelector('.eplug-grain')) {
    const grain = document.createElement('div');
    grain.className = 'eplug-grain';
    document.body.insertBefore(grain, document.body.firstChild);
  }

  // System styles
  const sStyle = document.createElement('style');
  sStyle.textContent = systemCss;
  document.head.appendChild(sStyle);

  // Header styles
  const hStyle = document.createElement('style');
  hStyle.textContent = headerCss;
  document.head.appendChild(hStyle);

  // Header HTML
  target.innerHTML = html;
})();
