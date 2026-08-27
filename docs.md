---
title: Aexaware Infotech Developer Documentation & API Reference
description: Official developer documentation for Aexaware Infotech. Access our OpenAPI specification, authentication guide, webhooks documentation, and MCP server endpoints.
url: "https://aexaware.com/docs"
type: static
generatedAt: "2026-08-27T19:51:12.787Z"
---

Developer Portal & API Reference
# Aexaware Infotech Developer Documentation

The complete guide to Aexaware Infotech's public APIs, OpenAPI 3.1.0 specifications, security authentication, webhooks, and Model Context Protocol (MCP) server endpoints.
OpenAPI 3.1
## [Aexaware OpenAPI Specification](/docs/openapi)

Machine-readable OpenAPI 3.1.0 specification defining our public API endpoints, schemas, parameters, and responses.
[View JSON Spec](/openapi.json)[View YAML Spec](/openapi.yaml)[Documentation](/docs/openapi)OAuth & Auth.md
## [Aexaware Authentication & Agent Permissions](/docs/auth)

Authorization flows, OAuth 2.0 metadata, Bearer token integration, and identity assertion verification for AI agents.
[Read auth.md](/auth.md)[OAuth Server Card](/.well-known/oauth-authorization-server)[Documentation](/docs/auth)Webhooks
## [Aexaware Webhooks & Event Notifications](/docs/webhooks)

Subscribe to real-time events with HMAC-SHA256 signature verification and exponential backoff retry handling.
[Read webhooks.md](/webhooks.md)[Documentation](/docs/webhooks)MCP Server
## [Aexaware Model Context Protocol (MCP) Server](/docs/mcp)

Connect Claude, ChatGPT, Cursor, and custom agent workflows directly to Aexaware Infotech tools and resources.
[MCP Server Card](/.well-known/mcp/server-card.json)[Read mcp.md](/mcp.md)[Documentation](/docs/mcp)
## Aexaware API Authentication

Security models, open discovery, and agent authorization
 Public & Open Discovery
All OpenAPI specifications, LLMs.txt summaries, service catalogs, sitemaps, and RSS feeds on **https://aexaware.com** are completely public and accessible without authentication.
 Authenticated Integrations
For dedicated partner endpoints and verified agent requests, credentials can be supplied using standard Bearer tokens or API keys:
`Authorization: Bearer <YOUR_API_TOKEN>`
`X-API-Key: <YOUR_API_KEY>`
For full agent registration specifications and OAuth metadata, review [auth.md](/auth.md) or the [Authentication Guide](/docs/auth).

## Aexaware API Endpoints Directory

Public endpoints, content feeds, and machine-readable resources

| Method | Endpoint Path | Content Type | Description |
| --- | --- | --- | --- |
| GET | [/openapi.json](/openapi.json) | application/vnd.oai.openapi+json | Returns the OpenAPI 3.1.0 specification in JSON format. |
| GET | [/openapi.yaml](/openapi.yaml) | application/yaml | Returns the OpenAPI 3.1.0 specification in YAML format. |
| GET | [/llms.txt](/llms.txt) | text/plain; charset=utf-8 | Structured markdown summary of Aexaware Infotech services and architecture for LLMs. |
| GET | [/llms-full.txt](/llms-full.txt) | text/plain; charset=utf-8 | Comprehensive markdown documentation of all services, portfolio projects, and blogs. |
| GET | [/.well-known/api-catalog](/.well-known/api-catalog) | application/linkset+json | RFC 9727 API Catalog Linkset index defining service documentation and descriptor URLs. |
| GET | [/.well-known/mcp/server-card.json](/.well-known/mcp/server-card.json) | application/json | Model Context Protocol (MCP) server descriptor card and registered tool definitions. |
| GET | [/.well-known/agent-skills/index.json](/.well-known/agent-skills/index.json) | application/json | Directory of capabilities, tools, and skills available for AI agent workflows. |
| GET | [/auth.md](/auth.md) | text/markdown; charset=utf-8 | Standardized agent authorization policy and credential discovery metadata. |
| GET | [/webhooks.md](/webhooks.md) | text/markdown; charset=utf-8 | Webhook event definitions, payload schemas, and HMAC-SHA256 signature instructions. |
| GET | [/sitemap-index.xml](/sitemap-index.xml) | application/xml | Primary XML sitemap index listing all crawlable pages and service routes. |
| GET | [/rss.xml](/rss.xml) | application/rss+xml | RSS 2.0 XML feed of published technical blogs and software engineering articles. |

## Example API Requests & Code Snippets

Copy-and-paste examples in cURL, JavaScript / TypeScript, and Python
1. cURL RequestsTerminal / CLI
// Fetch OpenAPI specification in JSON:
`curl -sL https://aexaware.com/openapi.json | jq .`
// Fetch token-efficient markdown context for LLMs:
`curl -sL https://aexaware.com/llms.txt`
// Request page in Markdown format via Accept header:
`curl -sL -H "Accept: text/markdown" https://aexaware.com/services/web-development`
// Fetch Model Context Protocol (MCP) server card:
`curl -sL https://aexaware.com/.well-known/mcp/server-card.json | jq .`2. JavaScript / TypeScript FetchNode.js / Browser
```
// Fetch Aexaware OpenAPI 3.1.0 Specification
async function getAexawareApiSpec() {
  const response = await fetch("https://aexaware.com/openapi.json", {
    headers: {
      "Accept": "application/vnd.oai.openapi+json, application/json",
      "User-Agent": "MyAgent/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed with status ${response.status}`);
  }

  const spec = await response.json();
  console.log("Aexaware API Title:", spec.info.title);
  return spec;
}

getAexawareApiSpec().then(console.log);
```
3. Python (requests)Python 3
```
import requests

def fetch_aexaware_services():
    url = "https://aexaware.com/llms.txt"
    headers = {
        "User-Agent": "AexawareAgent/1.0"
    }
    response = requests.get(url, headers=headers)
    response.raise_for_status()

    print("Aexaware Context:")
    print(response.text[:500])

if __name__ == "__main__":
    fetch_aexaware_services()
```

## Aexaware Machine-Readable Standards

We implement open standards enabling autonomous agents and LLM crawlers to inspect our capabilities programmatically.

### RFC 9727 API Catalog

Machine-readable Linkset directory.
[View Catalog →](/.well-known/api-catalog)
### MCP Server Card

Model Context Protocol endpoint registry.
[View Server Card →](/.well-known/mcp/server-card.json)
### LLMs.txt Overview

Structured markdown context for LLMs.
[Read llms.txt →](/llms.txt)
### Agent Skills

Autonomous agent tooling registry.
[View Skills →](/.well-known/agent-skills/index.json)
## Ready to Build with Aexaware?
Let's Connect.

Need a custom API, AI agent integration, or enterprise cloud solution? Book a free consultation with our engineering team.
[Schedule Consultation](https://cal.com/aexaware-infotech)[Contact Engineers](/contact)