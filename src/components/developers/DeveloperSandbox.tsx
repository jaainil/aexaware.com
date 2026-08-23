import React, { useState } from 'react';
import { Key, Copy, Check, Play, RefreshCw, Terminal, Code, Cpu, Shield, Sparkles } from 'lucide-react';

interface Endpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST';
  path: string;
  description: string;
  mockResponse: Record<string, any> | string;
  requestBody?: Record<string, any>;
}

const endpoints: Endpoint[] = [
  {
    id: 'openapi',
    name: 'OpenAPI Specification',
    method: 'GET',
    path: '/openapi.json',
    description: 'Fetch self-describing OpenAPI 3.1.0 JSON specification',
    mockResponse: {
      openapi: "3.1.0",
      info: {
        title: "Aexaware Infotech Public API",
        version: "1.0.0",
        description: "Official public API specification for Aexaware Infotech."
      },
      servers: [{ url: "https://aexaware.com" }],
      paths: {
        "/openapi.json": { get: { summary: "Fetch OpenAPI JSON" } },
        "/llms.txt": { get: { summary: "Fetch LLM Context" } }
      }
    }
  },
  {
    id: 'mcp',
    name: 'MCP Server Card',
    method: 'GET',
    path: '/.well-known/mcp/server-card.json',
    description: 'Model Context Protocol server registry and registered tool definitions',
    mockResponse: {
      schema_version: "2024-11-05",
      name: "Aexaware Infotech MCP Server",
      tools: [
        { name: "search_blog", description: "Search technical blog articles" },
        { name: "list_services", description: "List all 19 engineering capabilities" },
        { name: "get_contact_info", description: "Get official office contact details" },
        { name: "list_portfolio", description: "Query case studies and project metrics" }
      ]
    }
  },
  {
    id: 'llms',
    name: 'LLM Agent Context (llms.txt)',
    method: 'GET',
    path: '/llms.txt',
    description: 'Token-efficient structured markdown overview for AI models',
    mockResponse: `# Aexaware Infotech
Full-service software development company based in Vadodara, Gujarat, India.
We build scalable web apps, mobile apps, AI/ML agents, and cloud infrastructure.

## Services (19 Specialized Services)
- Web Development: React, Next.js, Node.js, Python, PostgreSQL
- AI Agent Development: Autonomous LLM agents, MCP servers, RAG pipelines
- Mobile Development: React Native, Flutter cross-platform apps
- Cloud & DevOps: AWS, GCP, Docker, Kubernetes, Terraform IaC`
  },
  {
    id: 'inquiry_sandbox',
    name: 'Submit Sandbox Inquiry',
    method: 'POST',
    path: '/api/inquiry/sandbox',
    description: 'Simulate submitting a project inquiry payload in test mode',
    requestBody: {
      name: "Alex Johnson",
      email: "alex@example.com",
      service: "AI Agent Development",
      budget: "$5,000 - $15,000",
      description: "Looking to build a custom multi-agent RAG workflow with MCP server integration."
    },
    mockResponse: {
      status: "success",
      environment: "sandbox",
      inquiry_id: "inq_sbx_984128f7a",
      timestamp: new Date().toISOString(),
      message: "Sandbox project inquiry received successfully.",
      resolution_hint: "In production, email confirmation is dispatched within 5 minutes."
    }
  }
];

export default function DeveloperSandbox() {
  const [apiKey, setApiKey] = useState<string>('aex_sandbox_live_8f93e1b742a0');
  const [copiedKey, setCopiedKey] = useState<boolean>(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>(endpoints[0]);
  const [responseOutput, setResponseOutput] = useState<string>(
    JSON.stringify(endpoints[0].mockResponse, null, 2)
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(200);
  const [latency, setLatency] = useState<number>(34);
  const [activeTab, setActiveTab] = useState<'curl' | 'js' | 'python'>('curl');

  const generateNewKey = () => {
    const randomHex = Math.random().toString(16).substring(2, 10) + Math.random().toString(16).substring(2, 10);
    const newKey = `aex_sandbox_live_${randomHex}`;
    setApiKey(newKey);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleRunRequest = () => {
    setIsLoading(true);
    const simulatedLatency = Math.floor(Math.random() * 40) + 20;

    setTimeout(() => {
      setStatus(200);
      setLatency(simulatedLatency);
      if (typeof selectedEndpoint.mockResponse === 'string') {
        setResponseOutput(selectedEndpoint.mockResponse);
      } else {
        setResponseOutput(JSON.stringify(selectedEndpoint.mockResponse, null, 2));
      }
      setIsLoading(false);
    }, 250);
  };

  const selectEndpoint = (ep: Endpoint) => {
    setSelectedEndpoint(ep);
    if (typeof ep.mockResponse === 'string') {
      setResponseOutput(ep.mockResponse);
    } else {
      setResponseOutput(JSON.stringify(ep.mockResponse, null, 2));
    }
  };

  const getCurlSnippet = () => {
    if (selectedEndpoint.method === 'POST') {
      return `curl -X POST https://aexaware.com${selectedEndpoint.path} \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(selectedEndpoint.requestBody || {}, null, 2)}'`;
    }
    return `curl -X GET https://aexaware.com${selectedEndpoint.path} \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Accept: ${selectedEndpoint.id === 'llms' ? 'text/plain' : 'application/json'}"`;
  };

  const getJsSnippet = () => {
    if (selectedEndpoint.method === 'POST') {
      return `const response = await fetch("https://aexaware.com${selectedEndpoint.path}", {
  method: "POST",
  headers: {
    "Authorization": "Bearer ${apiKey}",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(${JSON.stringify(selectedEndpoint.requestBody || {}, null, 2)})
});
const data = await response.json();
console.log(data);`;
    }
    return `const response = await fetch("https://aexaware.com${selectedEndpoint.path}", {
  headers: {
    "Authorization": "Bearer ${apiKey}"
  }
});
const data = await response.${selectedEndpoint.id === 'llms' ? 'text()' : 'json()'};
console.log(data);`;
  };

  const getPythonSnippet = () => {
    if (selectedEndpoint.method === 'POST') {
      return `import requests

url = "https://aexaware.com${selectedEndpoint.path}"
headers = {
    "Authorization": "Bearer ${apiKey}",
    "Content-Type": "application/json"
}
payload = ${JSON.stringify(selectedEndpoint.requestBody || {}, null, 4)}

response = requests.post(url, headers=headers, json=payload)
print(response.json())`;
    }
    return `import requests

url = "https://aexaware.com${selectedEndpoint.path}"
headers = {
    "Authorization": "Bearer ${apiKey}"
}

response = requests.get(url, headers=headers)
print(response.${selectedEndpoint.id === 'llms' ? 'text' : 'json()'})`;
  };

  return (
    <div className="space-y-12">
      {/* 1. Sandbox API Key Generator Card */}
      <div className="bg-card/70 backdrop-blur-md border border-border/50 rounded-card-lg p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
              <Key className="w-3.5 h-3.5" />
              Instant Sandbox Credentials
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground">
              Your Ephemeral Sandbox API Key
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Use this pre-generated test key to experiment in the interactive sandbox below or authenticate requests locally against Aexaware endpoints.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center bg-secondary/50 border border-border/60 rounded-xl px-4 py-2.5 font-mono text-xs text-foreground">
              <span className="truncate max-w-[200px] sm:max-w-[260px]">{apiKey}</span>
              <button
                onClick={() => copyToClipboard(apiKey)}
                className="ml-3 p-1.5 rounded-lg hover:bg-background/80 text-muted-foreground hover:text-foreground transition-colors"
                title="Copy API Key"
              >
                {copiedKey ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={generateNewKey}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background hover:bg-secondary text-xs font-semibold text-foreground transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Rotate Key
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Sandbox Runner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Endpoint Selector & Request Inspector */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-card/60 backdrop-blur-xs border border-border/50 rounded-card-lg p-6 space-y-4">
            <h4 className="font-heading font-bold text-lg text-foreground border-b border-border/40 pb-3 flex items-center justify-between">
              <span>1. Choose Endpoint</span>
              <span className="text-xs font-normal text-muted-foreground font-mono">Sandbox Target</span>
            </h4>

            <div className="space-y-2">
              {endpoints.map((ep) => {
                const isSelected = selectedEndpoint.id === ep.id;
                return (
                  <button
                    key={ep.id}
                    onClick={() => selectEndpoint(ep)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-sm'
                        : 'border-border/40 bg-secondary/20 hover:border-border hover:bg-secondary/40'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                            ep.method === 'POST' ? 'bg-amber-500/20 text-amber-500' : 'bg-primary/20 text-primary'
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className="font-heading font-semibold text-sm text-foreground">{ep.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">{ep.path}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Code Snippet Tabs */}
          <div className="bg-card/60 backdrop-blur-xs border border-border/50 rounded-card-lg overflow-hidden">
            <div className="bg-secondary/40 px-4 py-2.5 border-b border-border/50 flex items-center justify-between">
              <div className="flex gap-1.5">
                <button
                  onClick={() => setActiveTab('curl')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'curl' ? 'bg-background text-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  cURL
                </button>
                <button
                  onClick={() => setActiveTab('js')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'js' ? 'bg-background text-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  TypeScript
                </button>
                <button
                  onClick={() => setActiveTab('python')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'python' ? 'bg-background text-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Python
                </button>
              </div>

              <button
                onClick={() => {
                  const snippet =
                    activeTab === 'curl'
                      ? getCurlSnippet()
                      : activeTab === 'js'
                      ? getJsSnippet()
                      : getPythonSnippet();
                  copyToClipboard(snippet);
                }}
                className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                title="Copy Snippet"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-4 bg-secondary/15 font-mono text-xs text-foreground overflow-x-auto max-h-[220px]">
              <pre className="whitespace-pre">
                <code>
                  {activeTab === 'curl'
                    ? getCurlSnippet()
                    : activeTab === 'js'
                    ? getJsSnippet()
                    : getPythonSnippet()}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Right Column: Live Sandbox Execution Console */}
        <div className="lg:col-span-7 bg-card/60 backdrop-blur-xs border border-border/50 rounded-card-lg p-6 flex flex-col justify-between shadow-xl">
          <div>
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-4 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-foreground">
                <span
                  className={`px-2 py-0.5 rounded-md font-bold ${
                    selectedEndpoint.method === 'POST' ? 'bg-amber-500/20 text-amber-500' : 'bg-primary/20 text-primary'
                  }`}
                >
                  {selectedEndpoint.method}
                </span>
                <span className="font-semibold">{selectedEndpoint.path}</span>
              </div>

              <button
                onClick={handleRunRequest}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                {isLoading ? 'Executing...' : 'Run Sandbox Request'}
              </button>
            </div>

            {/* Response Meta Header */}
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3 px-1">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Status: <strong className="text-foreground">{status} OK</strong>
                </span>
                <span>Latency: <strong className="text-foreground">{latency}ms</strong></span>
              </div>
              <span className="text-[11px] text-primary font-sans font-semibold uppercase">Sandbox Live Simulation</span>
            </div>

            {/* Response Console */}
            <div className="bg-secondary/40 border border-border/50 rounded-xl p-4 font-mono text-xs text-foreground overflow-x-auto min-h-[280px] max-h-[380px]">
              <pre className="whitespace-pre">
                <code>{responseOutput}</code>
              </pre>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
            <span>Auth: <code className="text-foreground font-mono">Bearer {apiKey.substring(0, 16)}...</code></span>
            <span>Content-Type: <code className="text-foreground font-mono">application/json</code></span>
          </div>
        </div>
      </div>
    </div>
  );
}
