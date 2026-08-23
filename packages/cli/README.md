# @aexaware/cli

Official CLI for [Aexaware Infotech](https://aexaware.com) — query services, browse portfolio, search the technical blog, provision sandbox API keys, and connect to the MCP server. Works for both humans and AI agents scripting against the Aexaware API.

## Install

```bash
npm install -g @aexaware/cli
# or
npx @aexaware/cli help
```

## Commands

```
aexaware services [--category <name>]    List all 19 engineering services
aexaware portfolio [--industry <kw>]     Browse portfolio case studies
aexaware blog search <query>             Search 21 technical blog articles
aexaware contact                         Get contact details & booking links
aexaware keys                            Provision a free sandbox API key (no form)
aexaware mcp                             Show MCP server config for Claude / Cursor
aexaware sandbox                         Run a live test against the MCP server
aexaware version                         Show CLI version
aexaware help                            Show this help message
```

## Examples

```bash
# List all AI services
aexaware services --category "AI / ML"

# Search the blog
aexaware blog search "docker security"
aexaware blog search "react native OTA"

# Provision a free API key instantly (no credit card, no form)
aexaware keys

# Get MCP server config to paste into Claude Desktop
aexaware mcp

# Run a live smoke test against the MCP server
aexaware sandbox
```

## MCP Server

Aexaware runs a native [Model Context Protocol](https://modelcontextprotocol.io/) server at `https://aexaware.com/api/mcp` using **Streamable HTTP** transport (spec `2025-03-26`).

### Claude Desktop

```json
{
  "mcpServers": {
    "aexaware": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://aexaware.com/api/mcp"]
    }
  }
}
```

Add to: `~/Library/Application Support/Claude/claude_desktop_config.json`

### Cursor

In Cursor Settings → MCP, add:

```json
{
  "name": "aexaware",
  "transport": "streamable-http",
  "url": "https://aexaware.com/api/mcp"
}
```

### Available MCP Tools

| Tool | Description |
|---|---|
| `list_services` | All 19 services with tech stack & category filter |
| `list_portfolio` | Portfolio case studies with delivery metrics |
| `search_blog` | Keyword search across 21 technical articles |
| `get_contact_info` | Verified email, phone, booking & project links |
| `provision_api_key` | Free sandbox API key — no registration |
| `get_openapi_spec` | OpenAPI 3.1.0 spec URLs and API surface |

## API & Developer Resources

| Resource | URL |
|---|---|
| Developer Portal | https://aexaware.com/developers |
| MCP Server | https://aexaware.com/api/mcp |
| OpenAPI JSON | https://aexaware.com/openapi.json |
| OpenAPI YAML | https://aexaware.com/openapi.yaml |
| Agent Instructions | https://aexaware.com/agent-instructions.md |
| Auth Guide | https://aexaware.com/auth.md |
| Webhooks Guide | https://aexaware.com/webhooks.md |
| llms.txt | https://aexaware.com/llms.txt |
| RFC 9727 API Catalog | https://aexaware.com/.well-known/api-catalog |

## Requirements

- Node.js ≥ 18
- Zero external dependencies

## Support

- Email: info@aexaware.com
- Website: https://aexaware.com/contact
- Book a free call: https://cal.com/aexaware-infotech

## License

MIT © [Aexaware Infotech](https://aexaware.com)
