import { bold, cyan, green, yellow, magenta, gray, dim, red,
         header, section, table, line, success, info, warn, error } from './colors.js';
import { SERVICES, PORTFOLIO, BLOG_POSTS, CONTACT, MCP_CONFIG, API_BASE, CLI_VERSION } from './data.js';

// ─── Help ─────────────────────────────────────────────────────────────────────

export function cmdHelp() {
  header();
  console.log(`  ${bold('Usage:')}  ${cyan('aexaware')} ${yellow('<command>')} ${dim('[options]')}\n`);
  console.log(`  ${bold('Commands:')}`);
  const cmds = [
    ['services',         '--category <name>',   'List all 19 Aexaware engineering services'],
    ['portfolio',        '--industry <keyword>', 'Browse portfolio case studies'],
    ['blog search',      '<query>',             'Search 21 technical blog articles'],
    ['contact',          '',                    'Get contact details and booking links'],
    ['keys',             '',                    'Provision a free sandbox API key instantly'],
    ['mcp',              '',                    'Show MCP server config for Claude / Cursor'],
    ['sandbox',          '',                    'Run a test request against the sandbox'],
    ['version',          '',                    'Show CLI version'],
    ['help',             '',                    'Show this help message'],
  ];
  for (const [cmd, opt, desc] of cmds) {
    const c = cyan(cmd.padEnd(16));
    const o = dim(opt.padEnd(24));
    console.log(`    ${c}  ${o}  ${desc}`);
  }

  console.log(`\n  ${bold('Examples:')}`);
  console.log(`    ${dim('$')} ${cyan('aexaware')} services --category "AI / ML"`);
  console.log(`    ${dim('$')} ${cyan('aexaware')} blog search "react native OTA"`);
  console.log(`    ${dim('$')} ${cyan('aexaware')} keys`);
  console.log(`    ${dim('$')} ${cyan('aexaware')} mcp`);

  console.log(`\n  ${bold('Links:')}`);
  console.log(`    ${gray('Developer Portal')}  https://aexaware.com/developers`);
  console.log(`    ${gray('MCP Server')}        https://aexaware.com/api/mcp`);
  console.log(`    ${gray('OpenAPI Spec')}      https://aexaware.com/openapi.json`);
  console.log(`    ${gray('GitHub')}            https://github.com/aexaware`);
  line();
}

// ─── Version ─────────────────────────────────────────────────────────────────

export function cmdVersion() {
  console.log(`@aexaware/cli  ${bold(green(CLI_VERSION))}`);
}

// ─── Services ────────────────────────────────────────────────────────────────

export function cmdServices(args) {
  const catFlag = args.indexOf('--category');
  const filterCat = catFlag >= 0 ? args[catFlag + 1] : null;

  const CATEGORY_ALIASES = {
    'web':         'Web & App',
    'web & app':   'Web & App',
    'ai':          'AI / ML',
    'ai / ml':     'AI / ML',
    'ml':          'AI / ML',
    'cloud':       'Cloud',
    'devops':      'Cloud',
    'design':      'Design',
    'marketing':   'Design',
    'engagement':  'Engagement',
    'team':        'Engagement',
  };

  const normalizedFilter = filterCat
    ? (CATEGORY_ALIASES[filterCat.toLowerCase()] ?? filterCat)
    : null;

  const results = normalizedFilter
    ? SERVICES.filter(s => s.category.toLowerCase().includes(normalizedFilter.toLowerCase()))
    : SERVICES;

  if (results.length === 0) {
    console.log(warn(`No services found for category: ${filterCat}`));
    console.log(dim('  Available: web, ai, cloud, design, engagement'));
    return;
  }

  header('Engineering Services');

  const categories = [...new Set(results.map(s => s.category))];
  for (const cat of categories) {
    const group = results.filter(s => s.category === cat);
    section(cat);
    for (const s of group) {
      console.log(`  ${green('→')} ${bold(s.name)}`);
      console.log(`     ${dim(s.tech)}`);
      console.log(`     ${gray(s.url)}`);
    }
  }

  line();
  console.log(dim(`  ${results.length} service(s) shown  ·  ${cyan('https://aexaware.com/services')}`));
  line();
}

// ─── Portfolio ───────────────────────────────────────────────────────────────

export function cmdPortfolio(args) {
  const indFlag = args.indexOf('--industry');
  const filterInd = indFlag >= 0 ? args[indFlag + 1] : null;

  const results = filterInd
    ? PORTFOLIO.filter(p =>
        p.industry.toLowerCase().includes(filterInd.toLowerCase()) ||
        p.tech.toLowerCase().includes(filterInd.toLowerCase())
      )
    : PORTFOLIO;

  if (results.length === 0) {
    console.log(warn(`No projects found for industry: ${filterInd}`));
    return;
  }

  header('Portfolio Case Studies');

  for (const p of results) {
    console.log(`  ${magenta('◆')} ${bold(p.name)}  ${dim(`(${p.industry})`)}`);
    console.log(`    ${dim('Stack:')}    ${p.tech}`);
    console.log(`    ${dim('Delivery:')} ${green(p.weeks + ' weeks')}`);
    console.log(`    ${dim('Live:')}     ${cyan(p.live)}`);
    line();
  }

  console.log(dim(`  ${results.length} project(s) shown  ·  ${cyan('https://aexaware.com/portfolio')}`));
  line();
}

// ─── Blog Search ─────────────────────────────────────────────────────────────

export function cmdBlog(args) {
  const [subcommand, ...rest] = args;

  if (subcommand !== 'search' || rest.length === 0) {
    console.log(info('Usage:  aexaware blog search <query>'));
    console.log(dim('  Example:  aexaware blog search "docker security"'));
    return;
  }

  const query = rest.join(' ').toLowerCase();
  const results = BLOG_POSTS.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.tags.some(t => t.toLowerCase().includes(query)) ||
    p.slug.toLowerCase().includes(query)
  );

  header(`Blog Search: "${rest.join(' ')}"`);

  if (results.length === 0) {
    console.log(warn(`No articles found matching "${rest.join(' ')}"`));
    console.log(dim(`  Browse all posts at: ${cyan('https://aexaware.com/blog')}`));
    return;
  }

  for (const p of results) {
    console.log(`  ${cyan('▸')} ${bold(p.title)}`);
    console.log(`    ${gray('Tags:')} ${p.tags.join(', ')}`);
    console.log(`    ${gray('URL:')}  ${cyan(`https://aexaware.com/blog/${p.slug}`)}`);
    line();
  }

  console.log(dim(`  ${results.length} article(s) found`));
  line();
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export function cmdContact() {
  header('Contact Aexaware Infotech');

  console.log(`  ${bold('Email')}       ${green(CONTACT.email)}`);
  console.log(`  ${bold('Phone')}       ${CONTACT.phone}`);
  console.log(`  ${bold('Address')}     ${CONTACT.address}`);
  line();
  console.log(`  ${bold('Book a Call')} ${cyan(CONTACT.booking)}`);
  console.log(`  ${bold('Start Project')} ${cyan(CONTACT.project)}`);
  console.log(`  ${bold('Contact Form')} ${cyan(CONTACT.contact)}`);
  line();
  console.log(`  ${dim('LinkedIn')}    ${CONTACT.linkedin}`);
  console.log(`  ${dim('Twitter/X')}   ${CONTACT.twitter}`);
  console.log(`  ${dim('GitHub')}      ${CONTACT.github}`);
  line();
}

// ─── Keys (Provision Sandbox API Key) ────────────────────────────────────────

export async function cmdKeys() {
  header('Provision Free Sandbox API Key');
  console.log(dim('  Calling https://aexaware.com/api/keys/provision …\n'));

  let data;
  try {
    const res = await fetch(`${API_BASE}/api/keys/provision`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ agent_name: `aexaware-cli/${CLI_VERSION}` }),
    });
    data = await res.json();
  } catch (err) {
    // Fallback: generate locally if offline
    const hex = Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
    data = {
      status: 'success',
      api_key: `aex_free_${hex}`,
      tier: 'developer_free_trial',
      monthly_quota: 10000,
      rate_limit: '120 req/min',
      sandbox_mode: true,
    };
    console.log(warn('Could not reach server — generated key locally (sandbox only)'));
  }

  if (data.status !== 'success') {
    console.log(error(`Failed to provision key: ${data.message || 'unknown error'}`));
    return;
  }

  console.log(success(`API Key provisioned\n`));
  console.log(`  ${bold('Key')}          ${green(bold(data.api_key))}`);
  console.log(`  ${bold('Tier')}         ${data.tier}`);
  console.log(`  ${bold('Monthly Quota')} ${data.monthly_quota.toLocaleString()} requests`);
  console.log(`  ${bold('Rate Limit')}   ${data.rate_limit}`);
  console.log(`  ${bold('Sandbox Mode')} ${data.sandbox_mode ? yellow('enabled') : green('disabled')}`);
  line();
  console.log(dim('  Use this key in the Authorization header:'));
  console.log(`  ${cyan(`curl -H "Authorization: Bearer ${data.api_key}" https://aexaware.com/openapi.json`)}`);
  line();
  console.log(dim(`  Developer Portal: ${cyan('https://aexaware.com/developers')}`));
  line();
}

// ─── MCP Server Config ────────────────────────────────────────────────────────

export function cmdMcp() {
  header('MCP Server — Streamable HTTP Transport');

  console.log(`  ${bold('Endpoint')}         ${cyan(MCP_CONFIG.endpoint)}`);
  console.log(`  ${bold('Protocol Version')} ${MCP_CONFIG.protocolVersion}`);
  console.log(`  ${bold('Transport')}        ${MCP_CONFIG.transport}`);
  console.log(`  ${bold('Server Card')}      ${gray(MCP_CONFIG.serverCard)}`);
  line();

  section('Available Tools');
  for (const tool of MCP_CONFIG.tools) {
    console.log(`  ${green('→')} ${bold(tool)}`);
  }

  section('Claude Desktop Configuration');
  const config = {
    mcpServers: {
      aexaware: {
        command: 'npx',
        args: ['-y', 'mcp-remote', MCP_CONFIG.endpoint],
      },
    },
  };
  console.log(dim('  Add this to ~/Library/Application Support/Claude/claude_desktop_config.json:'));
  line();
  console.log(yellow(JSON.stringify(config, null, 2).split('\n').map(l => '  ' + l).join('\n')));

  section('Quick Smoke Test');
  console.log(dim('  Test the MCP server directly with curl:'));
  line();
  const curlExample = `curl -X POST ${MCP_CONFIG.endpoint} \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"tools/list","id":1}'`;
  console.log(cyan('  ' + curlExample.split('\n').join('\n  ')));
  line();
}

// ─── Sandbox Test ────────────────────────────────────────────────────────────

export async function cmdSandbox() {
  header('Sandbox Test Request');
  console.log(dim('  POSTing to https://aexaware.com/api/mcp (tools/call → list_services) …\n'));

  let data;
  try {
    const res = await fetch(`${API_BASE}/api/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: { name: 'list_services', arguments: {} },
        id: 1,
      }),
    });
    data = await res.json();
  } catch (err) {
    console.log(warn('Could not reach MCP server. Are you connected to the internet?'));
    console.log(dim(`  Error: ${err.message}`));
    return;
  }

  if (data.error) {
    console.log(error(`MCP Error: ${data.error.message}`));
    return;
  }

  const content = data.result?.content?.[0]?.text;
  if (content) {
    const parsed = JSON.parse(content);
    console.log(success(`MCP server responded — ${bold(parsed.total)} services returned\n`));
    for (const s of parsed.services.slice(0, 5)) {
      console.log(`  ${green('→')} ${s.name}  ${dim(`[${s.category}]`)}`);
    }
    if (parsed.total > 5) {
      console.log(dim(`  … and ${parsed.total - 5} more. Run ${cyan('aexaware services')} for all.`));
    }
  } else {
    console.log(info('Raw MCP response:'));
    console.log(JSON.stringify(data, null, 2));
  }

  line();
  console.log(dim(`  MCP Endpoint: ${cyan('https://aexaware.com/api/mcp')}`));
  line();
}
