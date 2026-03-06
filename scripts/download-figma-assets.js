#!/usr/bin/env node
/**
 * Download Figma assets from Figma MCP localhost server
 * and save them to assets/sections/dc-fast/ with proper naming
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../assets/sections/dc-fast');
fs.mkdirSync(OUT_DIR, { recursive: true });

// Assets from Figma MCP design context (node 173:217)
const ASSETS = [
    // SVGs
    { url: 'http://localhost:3845/assets/ad284672ea6c4819a15751e825f4cc3de181f81e.svg', name: 'icon-steering-wheel.svg' },
    { url: 'http://localhost:3845/assets/292dfe0e3d14f1e70903fc018f0762bb43b88e3b.svg', name: 'icon-brand-uber.svg' },
    { url: 'http://localhost:3845/assets/259f33e12e450d6cd6f9df44bea7ce746749adac.svg', name: 'icon-building-skyscraper.svg' },
    { url: 'http://localhost:3845/assets/30be7090b6259b099a6701b5d48caeab5cb53f5e.svg', name: 'ellipse-decoration.svg' },
    { url: 'http://localhost:3845/assets/d644f2b79aef1661f54cd91ac43ed3ab9c701d2a.svg', name: 'dot-indicator.svg' },
    // PNGs
    { url: 'http://localhost:3845/assets/7aa83ec6586626462b6acc3deb4c95ae706afb86.png', name: 'bg-hero-1444.png' },
    { url: 'http://localhost:3845/assets/b15a9b08b4e5bf26f650391e262d1b263f43dcc8.png', name: 'card-photo-1.png' },
    { url: 'http://localhost:3845/assets/27bd5af538fca9fe195c4e6b9629da26364f9103.png', name: 'card-photo-2.png' },
    { url: 'http://localhost:3845/assets/3aeb99ca25cc6dba1340f5012d492e08c2b7fbe0.png', name: 'card-photo-blur.png' },
];

function download(urlStr, outPath) {
    return new Promise((resolve, reject) => {
        const lib = urlStr.startsWith('https') ? https : http;
        lib.get(urlStr, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode} for ${urlStr}`));
                return;
            }
            const stream = fs.createWriteStream(outPath);
            res.pipe(stream);
            stream.on('finish', () => {
                stream.close();
                const stat = fs.statSync(outPath);
                resolve(stat.size);
            });
            stream.on('error', reject);
        }).on('error', reject);
    });
}

async function main() {
    console.log(`Downloading ${ASSETS.length} assets to ${OUT_DIR}\n`);

    for (const asset of ASSETS) {
        const outPath = path.join(OUT_DIR, asset.name);
        try {
            const size = await download(asset.url, outPath);
            const kb = (size / 1024).toFixed(1);
            console.log(`  ✅ ${asset.name} (${kb} KB)`);
        } catch (e) {
            console.log(`  ❌ ${asset.name}: ${e.message}`);
        }
    }

    console.log('\nDone!');
}

main().catch(console.error);
