---
title: Aexaware Infotech Webhooks & Event Notifications
description: Official Webhooks guide for Aexaware Infotech. Subscribe to real-time events with HMAC-SHA256 signature verification and automated retries.
url: "https://aexaware.com/docs/webhooks"
type: static
generatedAt: "2026-08-27T19:51:12.780Z"
---

[Back to Developer Resources](/docs)Realtime Events
# Aexaware Infotech Webhooks Documentation

Learn how to receive and verify real-time event notifications from **Aexaware Infotech** for project inquiries, consultations, milestones, and deployments.
Raw Markdown Spec
## webhooks.md Document

Event definitions, HMAC signing, and payload schemas
[View webhooks.md](/webhooks.md)
## Supported Event Types
`inquiry.received`
Triggered when a client submits a new project or contact form.
`consultation.scheduled`
Triggered when an initial technical consultation call is booked.
`deployment.completed`
Triggered when an application or cloud deployment completes.
`agent.task_executed`
Triggered when an autonomous AI agent executes a tool action.

## Signature Verification

Every webhook request includes an `X-Aexaware-Signature` header with an HMAC-SHA256 digest of the raw request payload.

```
const signature = crypto.createHmac('sha256', secret).update(rawPayload).digest('hex');
```

## Build Real-Time Reactive Systems
With Aexaware.

We architect resilient webhook brokers, event-driven microservices, and serverless background pipelines.
[Schedule Consultation](https://cal.com/aexaware-infotech)[Explore DevOps](/services/cloud-devops)