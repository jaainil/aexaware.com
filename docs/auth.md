---
title: Aexaware Infotech Authentication & API Security Documentation
description: Official authentication and permissions guide for Aexaware Infotech. Understand Bearer tokens, OAuth 2.0 metadata, and identity assertions for AI agents.
url: "https://aexaware.com/docs/auth"
type: static
generatedAt: "2026-08-27T19:51:12.768Z"
---

[Back to Developer Resources](/docs)Security & Access
# Aexaware Infotech Authentication & Permissions

Detailed security policies, identity assertion specifications, and OAuth 2.0 metadata endpoints for **Aexaware Infotech** integrations and autonomous AI agents.
Raw Markdown Spec
## auth.md Document

Standardized agent registration & discovery document
[View auth.md](/auth.md)
## 1. Public Access & Agent Permissions

All public resources, service listings, blogs, and documentation on **https://aexaware.com** are completely open for web crawlers and LLM search agents without authentication.

## 2. Privileged Agent Credentials

For authenticated API access, dedicated integrations, and programmatic inquiries, pass credentials via standard HTTP headers:
`Authorization: Bearer <aexaware_token>`
`X-API-Key: <aexaware_api_key>`
## 3. OAuth 2.0 & Key Metadata Endpoints

### Protected Resource Metadata
[/.well-known/oauth-protected-resource](/.well-known/oauth-protected-resource)
### Authorization Server Metadata
[/.well-known/oauth-authorization-server](/.well-known/oauth-authorization-server)
## Need Secure Enterprise Integrations?
Talk to Us.

We build zero-trust architectures, OAuth2 SSO systems, and encrypted data pipelines.
[Schedule Consultation](https://cal.com/aexaware-infotech)[Contact Security Team](/contact)