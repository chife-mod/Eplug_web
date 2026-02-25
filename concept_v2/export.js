const https = require('https');
const fs = require('fs');
const path = require('path');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'figd_PLACEHOLDER';
const FILE_KEY = process.argv[2];
const NODE_ID = process.argv[3].replace(/-/g, ':');
const NAME = process.argv[4];
const OUT_DIR = 'src/assets/images';

function get(url, hdrs) {
  return new Promise((ok, fail) => {
    https.get(url, { headers: hdrs }, res => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => res.statusCode === 200 ? ok(d) : fail(new Error('HTTP ' + res.statusCode)));
    }).on('error', fail);
  });
}

function download(url, out) {
  return new Promise((ok, fail) => {
    https.get(url, res => {
      if (res.statusCode !== 200) { fail(new Error('HTTP ' + res.statusCode)); return; }
      const s = fs.createWriteStream(out); res.pipe(s);
      s.on('finish', () => { s.close(); ok(); }); s.on('error', fail);
    }).on('error', fail);
  });
}

async function exp(fmt, scale, suffix) {
  const params = new URLSearchParams({ ids: NODE_ID, format: fmt, scale: String(scale) });
  const raw = await get('https://api.figma.com/v1/images/' + FILE_KEY + '?' + params, { 'X-Figma-Token': FIGMA_TOKEN });
  const href = JSON.parse(raw).images?.[NODE_ID];
  if (!href) throw new Error('No URL for ' + fmt);
  const out = path.join(OUT_DIR, NAME + suffix);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  if (fmt === 'svg') { fs.writeFileSync(out, await get(href, {}), 'utf8'); }
  else { await download(href, out); }
  console.log('  ' + out + ' (' + fmt + (scale > 1 ? ' @' + scale + 'x' : '') + ')');
}

(async () => {
  console.log('Exporting ' + NAME + ' from ' + FILE_KEY + ' node ' + NODE_ID + '...');
  await exp('svg', 1, '.svg');
  console.log('Done!');
})().catch(e => { console.error('Error:', e.message); process.exit(1); });
