import pug from 'pug';
import cssBingo from 'css-bingo';
import http from 'http';
import { readFileSync } from 'fs';

const server = http.createServer((req, res) => {
  try {
    const html = pug.renderFile('./bin/build.pug', { pretty: true });
    const css = readFileSync('./node_modules/tailwindcss/dist/tailwind.css', 'utf8');

    const minCss = cssBingo(css, html);
    const htmlWithMinCss = html.replace('</head>', `<style>${minCss}</style></head>`);

    res.setHeader('Content-Type', 'text/html');
    res.write(htmlWithMinCss);
    res.end();
  } catch (err) {
    res.write(err.message);
    res.write(err.stack);
    res.end();
  }
});

server.listen(8181);

console.info('http://localhost:8181');
