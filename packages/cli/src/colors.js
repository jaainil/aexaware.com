/**
 * Terminal color helpers — zero external dependencies
 */
const c = {
  reset:   '\x1b[0m',
  bold:    '\x1b[1m',
  dim:     '\x1b[2m',
  cyan:    '\x1b[36m',
  green:   '\x1b[32m',
  yellow:  '\x1b[33m',
  magenta: '\x1b[35m',
  blue:    '\x1b[34m',
  white:   '\x1b[37m',
  red:     '\x1b[31m',
  gray:    '\x1b[90m',
};

const NO_COLOR = process.env.NO_COLOR || !process.stdout.isTTY;

export const color = (code, text) => NO_COLOR ? text : `${code}${text}${c.reset}`;

export const bold     = (t) => color(c.bold, t);
export const dim      = (t) => color(c.dim, t);
export const cyan     = (t) => color(c.cyan, t);
export const green    = (t) => color(c.green, t);
export const yellow   = (t) => color(c.yellow, t);
export const magenta  = (t) => color(c.magenta, t);
export const blue     = (t) => color(c.blue, t);
export const red      = (t) => color(c.red, t);
export const gray     = (t) => color(c.gray, t);
export const white    = (t) => color(c.white, t);

export const success  = (t) => `${green('✔')}  ${t}`;
export const info     = (t) => `${cyan('ℹ')}  ${t}`;
export const warn     = (t) => `${yellow('⚠')}  ${t}`;
export const error    = (t) => `${red('✖')}  ${t}`;

export function header(title) {
  const line = '─'.repeat(52);
  console.log(`\n${cyan(bold('Aexaware'))} ${gray('Infotech CLI')}`);
  console.log(gray(line));
  if (title) console.log(`${bold(white(title))}\n`);
}

export function table(rows, cols) {
  const widths = cols.map((col, i) =>
    Math.max(col.length, ...rows.map(r => String(r[i] ?? '').length))
  );
  const divider = widths.map(w => '─'.repeat(w + 2)).join('┼');

  console.log(cyan('  ' + cols.map((c, i) => bold(c.padEnd(widths[i]))).join('  │  ')));
  console.log(gray('  ' + divider));
  for (const row of rows) {
    console.log('  ' + cols.map((_, i) => String(row[i] ?? '').padEnd(widths[i])).join('  │  '));
  }
}

export function section(title) {
  console.log(`\n${bold(cyan('▸'))} ${bold(title)}`);
}

export function line(text = '') {
  console.log(text);
}
