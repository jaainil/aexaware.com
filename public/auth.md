# auth.md

Auth.md metadata and Agent Registration guide for **Aexaware Infotech** (https://aexaware.com).

## Agent Audience & Access Policy

All public content on https://aexaware.com is accessible to AI agents, crawlers, and LLM applications without authentication.

For automated agents requiring identified or privileged integration, programmatic provisioning, and dedicated agent-to-agent interactions, Aexaware Infotech supports standardized agent registration.

## Agent Registration Discovery

- **Registration & Provisioning Endpoint**: `https://aexaware.com/contact`
- **Inquiries & Manual Key Issuance**: `hello@aexaware.com`
- **Supported Identity Types**:
  - `anonymous`: Open access for non-identified agents.
  - `identity_assertion`: Cryptographically verified agent identities (e.g. ID-JAG, verified email).
- **Supported Credential Types**:
  - `bearer_token`: OAuth 2.0 Bearer tokens in Authorization headers (`Authorization: Bearer <token>`).
  - `api_key`: API tokens passed via `X-API-Key` or Bearer authentication.
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

## Machine-Readable Resources

- **LLMs.txt**: https://aexaware.com/llms.txt
- **Full LLMs.txt**: https://aexaware.com/llms-full.txt
- **API Catalog**: https://aexaware.com/.well-known/api-catalog
- **MCP Server Card**: https://aexaware.com/.well-known/mcp/server-card.json
- **Agent Skills**: https://aexaware.com/.well-known/agent-skills/index.json
- **Sitemap**: https://aexaware.com/sitemap-index.xml
- **RSS Feed**: https://aexaware.com/rss.xml

## Terms & Privacy

- **Privacy Policy**: https://aexaware.com/privacy-policy
- **Terms of Service**: https://aexaware.com/terms
