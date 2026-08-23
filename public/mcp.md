# Aexaware Infotech Model Context Protocol (MCP) Server Documentation

This document describes the **Model Context Protocol (MCP)** server implemented by **Aexaware Infotech** (https://aexaware.com).

---

## What is the Aexaware MCP Server?

The **Aexaware MCP Server** allows LLMs, IDE AI extensions, and autonomous agents (such as Claude Desktop, ChatGPT, Cursor, and custom agent frameworks) to interact directly with Aexaware Infotech resources and tools.

- **MCP Server Card**: `https://aexaware.com/.well-known/mcp/server-card.json`
- **Protocol Version**: `2025-03-26` / `2024-11-05`
- **Transport Modes**: HTTP Server-Sent Events (SSE) & WebMCP browser runtime
- **Root Endpoint**: `https://aexaware.com`

---

## Exposed MCP Tools

The Aexaware MCP Server registers four core operational tools for autonomous agents:

### 1. `search_blog`
* **Description**: Search Aexaware Infotech's technical blog for articles on web development, AI/ML, DevOps, and cloud architecture.
* **Input Schema**:
  ```json
  {
    "type": "object",
    "properties": {
      "query": { "type": "string", "description": "Search term or technical topic" }
    },
    "required": ["query"]
  }
  ```

### 2. `list_services`
* **Description**: Retrieve the full directory of 19 specialized software development services offered by Aexaware Infotech.
* **Input Schema**: `{ "type": "object", "properties": {} }`

### 3. `get_contact_info`
* **Description**: Obtain official contact emails, phone numbers, Vadodara office address, and consultation scheduling URLs.
* **Input Schema**: `{ "type": "object", "properties": {} }`

### 4. `list_portfolio`
* **Description**: Fetch completed client case studies with delivered tech stacks, live production URLs, and turnaround times.
* **Input Schema**: `{ "type": "object", "properties": {} }`

---

## Exposed MCP Resources

Agents can access structured text and machine-readable resources directly:
* `aexaware://resources/llms.txt` -> Site architecture and services overview
* `aexaware://resources/sitemap.xml` -> Full URL index
* `aexaware://resources/openapi.json` -> OpenAPI 3.1.0 specification
* `aexaware://resources/api-catalog` -> RFC 9727 Linkset catalog

---

## How to Connect to Aexaware MCP Server

### Claude Desktop Configuration (`claude_desktop_config.json`)

```json
{
  "mcpServers": {
    "aexaware": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch", "https://aexaware.com/.well-known/mcp/server-card.json"]
    }
  }
}
```

---

## Developer Links

- **Aexaware Developer Portal**: [https://aexaware.com/docs](https://aexaware.com/docs)
- **Aexaware OpenAPI Spec**: [https://aexaware.com/openapi.json](https://aexaware.com/openapi.json)
- **Aexaware Authentication Docs**: [https://aexaware.com/auth.md](https://aexaware.com/auth.md)
- **Aexaware Webhooks Guide**: [https://aexaware.com/webhooks.md](https://aexaware.com/webhooks.md)
- **Aexaware Support**: [info@aexaware.com](mailto:info@aexaware.com)
