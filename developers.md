---
title: Aexaware Infotech Developer Portal - API Keys, Documentation & Sandbox
description: Official developer portal for Aexaware Infotech. Access sandbox API keys, quickstart guides, interactive API playground, and MCP server tools.
url: "https://aexaware.com/developers"
type: static
generatedAt: "2026-08-27T19:51:12.765Z"
---

Developer Portal & Sandbox
# Build & Integrate with Aexaware

The central hub for engineers, architects, and autonomous AI agents. Test endpoints live in the interactive sandbox, generate sandbox API keys, and follow step-by-step quickstarts.
[Launch Interactive Sandbox](#sandbox)[Explore Quickstarts](#quickstarts)
## Interactive API Sandbox

Generate temporary test keys and simulate live requests
Instant Sandbox Credentials
### Your Ephemeral Sandbox API Key

Test key for the sandbox below and for local requests against aexaware.com endpoints.
aex_sandbox_live_8f93e1b742a0
#### 1. Choose EndpointSandbox Target

```
curl -X GET https://aexaware.com/openapi.json \
  -H "Authorization: Bearer aex_sandbox_live_8f93e1b742a0" \
  -H "Accept: application/json"
```
GET/openapi.jsonStatus: **200 OK**Latency: **34ms**Sandbox Live Simulation
```
{
  "openapi": "3.1.0",
  "info": {
    "title": "Aexaware Infotech Public API",
    "version": "1.0.0",
    "description": "Official public API specification for Aexaware Infotech."
  },
  "servers": [
    {
      "url": "https://aexaware.com"
    }
  ],
  "paths": {
    "/openapi.json": {
      "get": {
        "summary": "Fetch OpenAPI JSON"
      }
    },
    "/llms.txt": {
      "get": {
        "summary": "Fetch LLM Context"
      }
    }
  }
}
```
Auth: `Bearer aex_sandbox_live...`Content-Type: `application/json`
## Developer Quickstart Guides

Integrate Aexaware APIs and agent resources in minutes
01bash
### cURL Quickstart

Inspect the machine-readable OpenAPI spec or LLM context in under 30 seconds.

```
curl -sL https://aexaware.com/openapi.json | jq .
```
02typescript
### TypeScript / Node.js

Fetch structured endpoints using standard fetch with typed payloads.

```
const res = await fetch("https://aexaware.com/openapi.json");
const spec = await res.json();
console.log(spec.info.title);
```
03python
### Python Integration

Ingest token-efficient markdown context directly into LangChain or LlamaIndex.

```
import requests
ctx = requests.get("https://aexaware.com/llms.txt").text
print(ctx[:200])
```
04json
### MCP Agent Tooling

Connect Claude Desktop, ChatGPT, or Cursor to Aexaware tools in 60 seconds.

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

## API Keys & Authentication Standards

Key provisioning, environment separation, and rate limits

### 1. Public Open Discovery

OpenAPI specifications, LLMs.txt context, RSS feeds, and Linkset catalogs do not require API keys or registration.
`Rate Limit: 120 req / min`
### 2. Sandbox Testing Keys

Ephemeral keys prefixed with `aex_sandbox_...` allow developers to simulate write actions and inquiry submissions.
`Rate Limit: 60 req / min`
### 3. Production Partner Keys

Issued directly to enterprise clients and integration partners with dedicated SLA and custom quotas.
`Custom Enterprise Quotas`
## Technical Documentation Guides

Deep-dive guides on OpenAPI, authentication, webhooks, and MCP
[OpenAPI 3.1
### OpenAPI Specification

Machine-readable OpenAPI 3.1.0 JSON & YAML definitions.
Read Guide](/docs/openapi)[OAuth 2.0
### Authentication & Permissions

Bearer tokens, OAuth 2.0 metadata, and security guidelines.
Read Guide](/docs/auth)[Webhooks
### Webhooks & Realtime Events

Event schemas, retries, and HMAC-SHA256 signature verification.
Read Guide](/docs/webhooks)[MCP Server
### Model Context Protocol (MCP)

Claude Desktop configuration and registered agent tool registry.
Read Guide](/docs/mcp)
## Ready to Build Custom Integrations?
Talk to Our Engineers.

We collaborate with technical teams to architect high-throughput APIs, custom MCP servers, and cloud infrastructure.
[Schedule Technical Consultation](https://cal.com/aexaware-infotech)[Explore All Services](/services)