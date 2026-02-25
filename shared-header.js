/**
 * Eplug Project — Shared Header
 * Inject this script into any page to get the unified header.
 * Place <script src="[relative-path]/shared-header.js"></script> just before </body>
 * and add <div id="eplug-header"></div> at the top of <body>.
 */
(function () {
    // ── Detect depth to build correct relative paths ──────────────────────────
    // e.g. root → ""  |  UX/ → "../"  |  UX/wireframes/ → "../../"
    function getBase() {
        const path = window.location.pathname;
        // Count slashes after the repo root (works for both file:// and GH Pages)
        // Find the repo root segment "Eplug_web" or treat file root as base
        const parts = path.replace(/\/+$/, '').split('/');
        // Find root index — either file:// root opens index.html directly,
        // or on GH Pages the repo is at /Eplug_web/
        let repoIdx = parts.findIndex(p => p === 'Eplug_web');
        if (repoIdx === -1) repoIdx = 0; // file:// protocol scenario

        // segments after repo root (minus the filename itself)
        const afterRepo = parts.slice(repoIdx + 1).filter(Boolean);
        // If last segment has a dot, it's a file — don't count it as a directory
        const depth = afterRepo.length > 0 && afterRepo[afterRepo.length - 1].includes('.')
            ? afterRepo.length - 1
            : afterRepo.length;

        return depth === 0 ? './' : '../'.repeat(depth);
    }

    const base = getBase();
    const logoSrc = base + 'concept_v2/src/assets/images/eplug-logo-on-dark.svg';
    const hubHref = base + 'index.html';
    const uxHref = base + 'UX/index.html';
    const figmaHref = 'https://www.figma.com/design/NsarAMa9SQMVyRCQDvgqg3/Eplug-Web';

    // ── Active link detection ─────────────────────────────────────────────────
    function isActive(href) {
        if (href.startsWith('http')) return false;
        const resolved = new URL(href, window.location.href).pathname;
        const current = window.location.pathname;
        // exact match or prefix for UX section
        return current === resolved || current.startsWith(resolved.replace('index.html', ''));
    }

    const navLinks = [
        { label: 'Hub', href: hubHref },
        { label: 'UX Hub', href: uxHref },
        { label: 'Figma', href: figmaHref, external: true },
    ];

    // ── CSS ───────────────────────────────────────────────────────────────────
    const css = `
    #eplug-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(13, 21, 32, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    #eplug-header .eh-inner {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 96px;
      position: relative;
    }
    #eplug-header .eh-logo img {
      height: 64px;
      width: auto;
      display: block;
    }
    #eplug-header .eh-nav {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
    }
    #eplug-header .eh-nav a {
      font-family: 'Montserrat', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: rgba(240, 236, 247, 0.55);
      text-decoration: none;
      padding: 16px 20px;
      letter-spacing: 0.2px;
      transition: color 0.2s ease;
      white-space: nowrap;
    }
    #eplug-header .eh-nav a:hover { color: #fff; }
    #eplug-header .eh-nav a.eh-active { color: #fff; font-weight: 600; }
    #eplug-header .eh-sep {
      width: 1px;
      height: 16px;
      background: rgba(255,255,255,0.08);
      flex-shrink: 0;
    }
    #eplug-header .eh-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    #eplug-header .eh-date {
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      color: rgba(240, 236, 247, 0.4);
      letter-spacing: 0.03em;
    }
  `;

    // ── Build HTML ────────────────────────────────────────────────────────────
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
        <a href="${hubHref}">
          <img src="${logoSrc}" alt="EPLUG" />
        </a>
      </div>
      <nav class="eh-nav">${buildNav()}</nav>
      <div class="eh-right">
        <span class="eh-date" id="eplug-header-date"></span>
      </div>
    </div>
  `;

    // ── Inject ────────────────────────────────────────────────────────────────
    const target = document.getElementById('eplug-header');
    if (!target) {
        console.warn('[shared-header] No <div id="eplug-header"> found.');
        return;
    }

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Inject HTML
    target.innerHTML = html;

    // Set date
    const dateEl = document.getElementById('eplug-header-date');
    if (dateEl) {
        const d = new Date();
        dateEl.textContent = d.toLocaleDateString('en-US', {
            weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
        });
    }
})();
