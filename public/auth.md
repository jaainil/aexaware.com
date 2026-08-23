# Aexaware Infotech Authentication & Agent Permissions Documentation

Auth.md metadata and Agent Registration guide for **Aexaware Infotech** (https://aexaware.com).

## Agent Audience & Access Policy

All public content on https://aexaware.com is accessible to AI agents, crawlers, and LLM applications without authentication.

For automated agents requiring identified or privileged integration, programmatic provisioning, and dedicated agent-to-agent interactions, Aexaware Infotech supports standardized agent registration.

## Free Developer Tier & Trial (Zero Friction)

Aexaware Infotech provides an open, self-serve developer tier with zero barrier to entry:
- **No Credit Card Required**: Free tier available to all agents and developers instantly.
- **No Sales Gate**: Autonomous agents do not need to fill out human sales forms.
- **Monthly Quota**: 10,000 requests / month in Sandbox mode.
- **Rate Limit**: 120 requests / minute.
- **Full Capabilities**: Complete access to OpenAPI 3.1.0 specifications, MCP tool registry, and structured LLM context.

## Self-Serve Programmatic Key Provisioning (For AI Agents)

Autonomous agents can generate an active trial API key programmatically:

```bash
curl -X POST https://aexaware.com/api/keys/provision \
  -H "Content-Type: application/json" \
  -d '{"agent_name": "MyAutonomousAgent", "client_email": "agent@example.com"}'
```

**Response**:
```json
{
  "status": "success",
  "api_key": "aex_free_8f93e1b742a0d9e2",
  "tier": "developer_free_trial",
  "monthly_quota": 10000,
  "rate_limit": "120 req/min",
  "sandbox_mode": true
}
```

## Interactive Sandbox Environment

Test endpoints and simulate inquiry submissions in real-time:
- **Web UI Sandbox**: https://aexaware.com/developers#sandbox
- **Mock Endpoint**: `POST https://aexaware.com/api/inquiry/sandbox`

## Agent Registration Discovery

- **Programmatic Provisioning Endpoint**: `https://aexaware.com/api/keys/provision`
- **Developer Portal**: `https://aexaware.com/developers`
- **Inquiries & Manual Key Issuance**: `info@aexaware.com`
- **Supported Identity Types**:
  - `anonymous`: Open access for non-identified agents.
  - `identity_assertion`: Cryptographically verified agent identities (e.g. ID-JAG, verified email).
- **Supported Credential Types**:
  - `bearer_token`: OAuth 2.0 Bearer tokens in Authorization headers (`Authorization: Bearer <token>`).
  - `api_key`: API tokens passed via `X-API-Key` or Bearer authentication (`Authorization: Bearer aex_free_...`).
- **Assertion Types Supported**:
  - `urn:ietf:params:oauth:token-type:id-jag`
  - `verified_email`
- **Claim & Revocation Endpoints**:
  - `claim_uri`: `https://aexaware.com/contact`
  - `revocation_uri`: `https://aexaware.com/contact`

## OAuth Metadata Documents

- **Protected Resource Metadata (PRM)**: `https://aexaware.com/.well-known/oauth-protected-resource`
- **Authorization Server Metadata**: `https://aexaware.com/.well-known/oauth-authorization-server`
- **Web Bot Auth Key Directory (JWKS)**: `https://aexaware.com/.well-known/http-message-signatures-directory`

## Developer Resources & Machine-Readable Endpoints

- **Aexaware Developer Portal**: https://aexaware.com/docs
- **Aexaware OpenAPI Spec**: https://aexaware.com/openapi.json
- **Aexaware Webhooks Guide**: https://aexaware.com/webhooks.md
- **Aexaware MCP Server Card**: https://aexaware.com/.well-known/mcp/server-card.json
- **Aexaware API Catalog**: https://aexaware.com/.well-known/api-catalog
- **Aexaware Agent Skills Registry**: https://aexaware.com/.well-known/agent-skills/index.json
- **LLMs.txt**: https://aexaware.com/llms.txt
- **Full LLMs.txt**: https://aexaware.com/llms-full.txt
- **Sitemap**: https://aexaware.com/sitemap-index.xml
- **RSS Feed**: https://aexaware.com/rss.xml

## Terms & Privacy

- **Privacy Policy**: https://aexaware.com/privacy-policy
- **Terms of Service**: https://aexaware.com/terms

