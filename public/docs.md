# Aexaware Infotech Developer Documentation & API Reference

Welcome to the **Aexaware Infotech Developer Documentation Hub** (https://aexaware.com). This guide details all public APIs, OpenAPI specifications, authentication mechanisms, webhooks, Model Context Protocol (MCP) integrations, and machine-readable metadata feeds.

---

## Quick Navigation

| Resource Name | Purpose | Formats & URLs |
| :--- | :--- | :--- |
| **OpenAPI Specification** | Complete machine-readable API surface & schema definitions | [`/openapi.json`](https://aexaware.com/openapi.json), [`/openapi.yaml`](https://aexaware.com/openapi.yaml) |
| **Authentication Guide** | Agent registration, OAuth metadata, and key issuance | [`/auth.md`](https://aexaware.com/auth.md), [`/docs/auth`](https://aexaware.com/docs/auth) |
| **Webhooks Guide** | Event schemas, HMAC-SHA256 signatures, and retry policies | [`/webhooks.md`](https://aexaware.com/webhooks.md), [`/docs/webhooks`](https://aexaware.com/docs/webhooks) |
| **MCP Server Reference** | Model Context Protocol tools, resources, and server card | [`/.well-known/mcp/server-card.json`](https://aexaware.com/.well-known/mcp/server-card.json), [`/mcp.md`](https://aexaware.com/mcp.md) |
| **RFC 9727 API Catalog** | Machine-readable Linkset discovery for APIs and docs | [`/.well-known/api-catalog`](https://aexaware.com/.well-known/api-catalog) |
| **Agent Skills Registry** | Autonomous agent capabilities and prompt catalog | [`/.well-known/agent-skills/index.json`](https://aexaware.com/.well-known/agent-skills/index.json) |
| **LLMs Site Overview** | High-level context & service directory for LLMs | [`/llms.txt`](https://aexaware.com/llms.txt), [`/llms-full.txt`](https://aexaware.com/llms-full.txt) |
| **XML Sitemap** | Full index of all site URLs and service pages | [`/sitemap-index.xml`](https://aexaware.com/sitemap-index.xml) |

---

## 1. Aexaware OpenAPI Specification

Aexaware Infotech provides an OpenAPI 3.1.0 specification detailing our public API endpoints, schemas, parameters, and responses:
* **JSON**: `https://aexaware.com/openapi.json` (or `https://aexaware.com/api/openapi.json`)
* **YAML**: `https://aexaware.com/openapi.yaml` (or `https://aexaware.com/api/openapi.yaml`)

---

## 2. Aexaware Authentication & Agent Permissions

* Public resources and documentation are completely open and require no credentials.
* Privileged APIs and agent integrations authenticate via standard Bearer tokens (`Authorization: Bearer <token>`) or `X-API-Key`.
* See full details at [https://aexaware.com/auth.md](https://aexaware.com/auth.md).

---

## 3. Aexaware Webhooks & Event Notifications

* Subscribe to real-time events such as `inquiry.received`, `consultation.scheduled`, and `deployment.completed`.
* Requests are signed with `X-Aexaware-Signature` (HMAC-SHA256).
* See full integration guide at [https://aexaware.com/webhooks.md](https://aexaware.com/webhooks.md).

---

## 4. Aexaware Model Context Protocol (MCP) Server

* The Aexaware MCP server exposes interactive tools (`search_blog`, `list_services`, `get_contact_info`, `list_portfolio`) directly to LLM agents.
* Server Card: `https://aexaware.com/.well-known/mcp/server-card.json`.
* See full specification at [https://aexaware.com/mcp.md](https://aexaware.com/mcp.md).

---

## Contact & Developer Inquiries

- **Email**: [info@aexaware.com](mailto:info@aexaware.com)
- **Website**: [https://aexaware.com](https://aexaware.com)
- **Location**: Vadodara, Gujarat, India
