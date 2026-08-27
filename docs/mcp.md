---
title: Aexaware Infotech Model Context Protocol (MCP) Server
description: Official Model Context Protocol (MCP) server documentation for Aexaware Infotech. Connect AI assistants and autonomous agents to our tool registry and resources.
url: "https://aexaware.com/docs/mcp"
type: static
generatedAt: "2026-08-27T19:51:12.772Z"
---

[Back to Developer Resources](/docs)Agent Protocol
# Aexaware Infotech MCP Server & AI Tools

The official **Model Context Protocol (MCP)** server enabling AI models (Claude, ChatGPT, Cursor, custom agents) to invoke tools and access structured knowledge directly from **Aexaware Infotech**.
MCP Specification
## server-card.json Document

Official MCP server descriptor card
[Server Card](/.well-known/mcp/server-card.json)[mcp.md](/mcp.md)
## Registered MCP Tools

### `search_blog`

Search Aexaware's technical blog for articles on AI/ML, React, Next.js, and cloud engineering.

### `list_services`

Retrieve all 19 specialized technology services offered by Aexaware Infotech.

### `get_contact_info`

Fetch official contact details, Vadodara office address, and meeting links.

### `list_portfolio`

Query live client case studies, technology stacks, and performance metrics.

## Claude Desktop Setup

Add the following snippet to your `claude_desktop_config.json`:

```
{
  "mcpServers": {
    "aexaware": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch", "https://aexaware.com/.well-known/mcp/server-card.json"]
    }
  }
}
```

## Deploy Autonomous AI Agents
Powered by MCP.

We build customized MCP servers, multi-agent frameworks, and retrieval-augmented generation (RAG) pipelines.
[Schedule Consultation](https://cal.com/aexaware-infotech)[Explore AI Services](/services/ai-ml-integration)