# Aexaware Infotech Webhooks & Event Notifications Documentation

Welcome to the **Aexaware Infotech Webhooks** reference. This documentation describes how AI agents, client systems, and third-party integrations subscribe to real-time events published by Aexaware Infotech (https://aexaware.com).

---

## Overview

Aexaware Infotech webhooks deliver asynchronous HTTP POST payloads whenever key lifecycle events occur on our platform, such as project inquiry submissions, consultation booking events, automated build pipelines, and agent task status updates.

- **Payload Format**: JSON (`application/json`)
- **Delivery Protocol**: HTTPS POST
- **Retry Policy**: Exponential backoff with up to 5 attempts over 24 hours
- **Signature Header**: `X-Aexaware-Signature` (HMAC-SHA256)

---

## Supported Webhook Event Types

| Event Name | Description | Trigger |
| :--- | :--- | :--- |
| `inquiry.received` | A new project inquiry or contact request was submitted | Contact form or `/start-project` submission |
| `consultation.scheduled` | A client booked a free technical consultation | Cal.com consultation confirmed |
| `project.milestone_updated` | A project milestone or deliverable reached a new phase | Client portal milestone update |
| `deployment.completed` | A web application or mobile build was deployed | CI/CD pipeline completion |
| `agent.task_executed` | An autonomous agent completed a registered tool execution | WebMCP or MCP server action |

---

## Webhook Signature Verification

All webhook requests from Aexaware Infotech include the `X-Aexaware-Signature` header containing a SHA-256 HMAC hash computed using your webhook signing secret.

### Verification Example (Node.js / TypeScript)

```typescript
import crypto from "node:crypto";

export function verifyAexawareWebhook(
  rawBody: string,
  signatureHeader: string,
  secret: string
): boolean {
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody, "utf8")
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(signatureHeader, "utf8"),
    Buffer.from(`sha256=${expectedSignature}`, "utf8")
  );
}
```

---

## Sample Payload: `inquiry.received`

```json
{
  "id": "evt_aex_9948271034",
  "event": "inquiry.received",
  "created_at": "2026-08-23T14:00:00Z",
  "data": {
    "inquiry_id": "inq_7741029",
    "name": "Sarah Connor",
    "email": "sarah@cyberdyne.example",
    "service_category": "ai-agent-development",
    "estimated_budget": "$10,000 - $25,000",
    "description": "Looking to build a multi-agent RAG workflow for enterprise document analysis."
  }
}
```

---

## Developer & Agent Links

- **Aexaware Developer Hub**: [https://aexaware.com/docs](https://aexaware.com/docs)
- **Aexaware OpenAPI Spec**: [https://aexaware.com/openapi.json](https://aexaware.com/openapi.json)
- **Aexaware Authentication Guide**: [https://aexaware.com/auth.md](https://aexaware.com/auth.md)
- **Aexaware MCP Server Card**: [https://aexaware.com/.well-known/mcp/server-card.json](https://aexaware.com/.well-known/mcp/server-card.json)
- **Aexaware API Catalog**: [https://aexaware.com/.well-known/api-catalog](https://aexaware.com/.well-known/api-catalog)
- **Contact Support**: [info@aexaware.com](mailto:info@aexaware.com)
