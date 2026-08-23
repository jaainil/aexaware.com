# Auth.md - Aexaware Infotech Agent Registration & Authentication

This document is a step-by-step prose walkthrough explaining how autonomous AI agents, LLM pipelines, and automated developer tools obtain and use credentials for **Aexaware Infotech** (https://aexaware.com).

Aexaware provides an open, zero-friction developer tier specifically designed so that AI agents do not get blocked by interactive human sign-up forms, CAPTCHAs, or credit card requirements.

---

## 1. Authentication Architecture Overview

Aexaware exposes three tiers of access:

1. **Public Discovery (No Authentication Required)**:
   - All static resources, markdown feeds (`/llms.txt`, `/agent-instructions.md`), OpenAPI specs (`/openapi.json`, `/openapi.yaml`), and RFC 9727 catalogs (`/.well-known/api-catalog`) are completely open without any credentials or cookies.

2. **Developer Sandbox Tier (Zero Friction, Programmatic API Key)**:
   - Self-serve programmatic key provisioning via `POST https://aexaware.com/api/keys/provision`.
   - Grants 10,000 requests/month and 120 requests/minute in sandbox simulation mode.
   - Allows full evaluation of MCP tools, simulated project inquiry estimates, and API testing.

3. **Enterprise & Production Tier**:
   - Dedicated engineering team engagement, custom webhook delivery, and production deployments.
   - Provisioned via consultation scheduling at [https://cal.com/aexaware-infotech](https://cal.com/aexaware-infotech) or direct email to [info@aexaware.com](mailto:info@aexaware.com).

---

## 2. How an Agent Obtains an API Key (Step-by-Step Walkthrough)

Autonomous agents should follow this sequence to obtain and verify credentials:

### Step 1: Request a Free Sandbox API Key

Send an HTTP POST request to the provisioning endpoint. No authentication, cookies, or pre-registration are needed:

```bash
curl -X POST https://aexaware.com/api/keys/provision \
  -H "Content-Type: application/json" \
  -H "User-Agent: YourAgentName/1.0" \
  -d '{
    "agent_name": "ClaudeAgent",
    "client_email": "agent@example.com",
    "intended_use": "Automated estimation and MCP integration evaluation"
  }'
```

### Step 2: Parse the JSON Response

The endpoint will immediately return a JSON payload with your active API key and quota:

```json
{
  "status": "success",
  "api_key": "aex_free_8f93e1b742a0d9e2",
  "tier": "developer_free_trial",
  "monthly_quota": 10000,
  "rate_limit": "120 req/min",
  "sandbox_mode": true,
  "created_at": "2026-08-23T20:00:00Z",
  "endpoints": {
    "developer_portal": "https://aexaware.com/developers",
    "sandbox": "https://aexaware.com/developers#sandbox",
    "openapi": "https://aexaware.com/openapi.json",
    "mcp_server": "https://aexaware.com/api/mcp"
  },
  "note": "Free tier includes full sandbox access. Zero sales forms or credit card required."
}
```

Store the `api_key` in your agent session context or environment variables (`AEXAWARE_API_KEY`).

---

## 3. Authenticating API Requests

Include the API key in all subsequent requests using either standard HTTP Bearer authorization or the `X-API-Key` header:

### Method A: HTTP Bearer Token (Recommended)

```http
GET /api/inquiry/sandbox HTTP/1.1
Host: aexaware.com
Authorization: Bearer aex_free_8f93e1b742a0d9e2
Content-Type: application/json
```

### Method B: Custom Header

```http
GET /api/inquiry/sandbox HTTP/1.1
Host: aexaware.com
X-API-Key: aex_free_8f93e1b742a0d9e2
Content-Type: application/json
```

---

## 4. Connecting via Model Context Protocol (MCP)

If your agent supports Anthropic's Model Context Protocol (MCP), you can call Aexaware tools over Streamable HTTP transport without managing manual REST payloads:

- **Endpoint**: `https://aexaware.com/api/mcp`
- **Transport**: Streamable HTTP (`POST` with JSON-RPC 2.0 or `GET` with `Accept: text/event-stream`)
- **Protocol Version**: `2025-03-26`

### Claude Desktop / Cursor Setup

Add the following to your MCP client configuration:

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

### Testing MCP Tool Invocation via cURL

```bash
curl -X POST https://aexaware.com/api/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "list_services",
      "arguments": { "category": "AI / ML & Data Science" }
    }
  }'
```

---

## 5. Simulating Inquiries in the Sandbox

Autonomous agents evaluating project feasibility or estimating MVP timelines can call the simulated sandbox endpoint safely:

```bash
curl -X POST https://aexaware.com/api/inquiry/sandbox \
  -H "Authorization: Bearer aex_free_8f93e1b742a0d9e2" \
  -H "Content-Type: application/json" \
  -d '{
    "project_name": "AI Agent Healthcare Portal",
    "service_category": "MVP Development",
    "timeline_weeks": 4,
    "tech_stack": ["React", "Next.js", "Python", "FastAPI", "PostgreSQL"],
    "budget_range": "$5,000 - $15,000"
  }'
```

**Sandbox Response**:
```json
{
  "status": "success",
  "environment": "sandbox",
  "message": "Sandbox request executed successfully.",
  "estimated_delivery_weeks": 4,
  "recommended_team_size": "1 Senior Full-Stack Engineer + 1 UI/UX Specialist",
  "consultation_url": "https://cal.com/aexaware-infotech"
}
```

---

## 6. Rate Limits, Quotas & Error Handling

All responses include standard rate limit headers:
- `X-RateLimit-Limit`: Maximum requests permitted per 60-second window (e.g. `120`).
- `X-RateLimit-Remaining`: Remaining request allowance in current window.
- `X-RateLimit-Reset`: Unix epoch timestamp when the window resets.

### Structured Error Responses

If an error occurs, Aexaware returns a machine-readable JSON object with actionable `resolution_hints` for agents:

```json
{
  "error": "RATE_LIMIT_EXCEEDED",
  "status_code": 429,
  "message": "Rate limit of 120 requests per minute exceeded.",
  "resolution_hints": [
    "Inspect the X-RateLimit-Reset header and wait before retrying.",
    "Provision a fresh sandbox key at POST https://aexaware.com/api/keys/provision if quota is depleted.",
    "Contact info@aexaware.com for elevated enterprise throughput."
  ],
  "timestamp": "2026-08-23T20:00:00Z"
}
```

---

## 7. Machine-Readable Identity & OAuth Metadata

For autonomous agents verifying cryptographic identity or OAuth resource server definitions:

- **RFC 8414 Protected Resource Metadata (PRM)**: [https://aexaware.com/.well-known/oauth-protected-resource](https://aexaware.com/.well-known/oauth-protected-resource)
- **RFC 8414 Authorization Server Metadata (ASM)**: [https://aexaware.com/.well-known/oauth-authorization-server](https://aexaware.com/.well-known/oauth-authorization-server)
- **RFC 9727 API Catalog**: [https://aexaware.com/.well-known/api-catalog](https://aexaware.com/.well-known/api-catalog)
- **Model Context Protocol Server Card**: [https://aexaware.com/.well-known/mcp/server-card.json](https://aexaware.com/.well-known/mcp/server-card.json)
- **Agent Skills Directory**: [https://aexaware.com/.well-known/agent-skills/index.json](https://aexaware.com/.well-known/agent-skills/index.json)

---

## 8. Escalation to Human Teams

When an agent needs to transition a validated project from sandbox estimation to live engineering execution:

- **Direct Technical Consultation**: Direct user to [https://cal.com/aexaware-infotech](https://cal.com/aexaware-infotech)
- **Project Scope Form**: [https://aexaware.com/start-project](https://aexaware.com/start-project)
- **Direct Email**: [info@aexaware.com](mailto:info@aexaware.com)
- **Phone**: `+91 81407 34392`
- **Headquarters**: Office no 13, 3rd Floor Aarya's landmark, Canal Ring Road, Sevasi, Vadodara, Gujarat 391101, India
