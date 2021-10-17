import pug from 'pug';
import cssBingo from 'css-bingo';
import { readFileSync, writeFileSync} from 'fs';

const html = pug.renderFile('./bin/build.pug', { pretty: true });
const css = readFileSync('./node_modules/tailwindcss/dist/tailwind.css', 'utf8');

const minCss = cssBingo(css, html);
const htmlWithMinCSs =  html.replace('</head>', `<style>${minCss}</style></head>`);

writeFileSync('./bin/build.html', htmlWithMinCSs, 'utf8');
writeFileSync('./css/windy.css', minCss, 'utf8');

