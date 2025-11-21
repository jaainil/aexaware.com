/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType } from "react";
  export const frontmatter: Record<string, unknown>;
  const component: ComponentType;
  export default component;
}
