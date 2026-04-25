import { defineConfig, collection, fields } from "@imjp/writenex-astro/config";

export default defineConfig({
  collections: [
    collection({
      name: "authors",
      path: "src/content/authors",
      filePattern: "{slug}.md",
      previewUrl: "/authors/{slug}",
      schema: {
        name: fields.text({ label: "Name", validation: { isRequired: true } }),
        title: fields.text({ label: "Title", defaultValue: "Software Engineer" }),
        bio: fields.text({ label: "Bio", multiline: true }),
        image: fields.image({ label: "Profile Image" }),
        twitter: fields.url({ label: "Twitter URL" }),
        github: fields.url({ label: "GitHub URL" }),
        linkedin: fields.url({ label: "LinkedIn URL" }),
      },
    }),
    collection({
      name: "blog",
      path: "src/content/blog",
      filePattern: "{slug}/index.mdx",
      previewUrl: "/blog/{slug}",
      schema: {
        title: fields.text({ label: "Title", validation: { isRequired: true } }),
        description: fields.text({ label: "Description", multiline: true, validation: { isRequired: true } }),
        author: fields.relationship({ label: "Author", collection: "authors", displayField: "name", validation: { isRequired: true } }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        image: fields.image({ label: "Cover Image" }),
        body: fields.mdx({ label: "Content", validation: { isRequired: true } }),
      },
    }),
    collection({
      name: "portfolio",
      path: "src/content/portfolio",
      filePattern: "{slug}/index.md",
      previewUrl: "/portfolio/{slug}",
      schema: {
        title: fields.text({ label: "Title", validation: { isRequired: true } }),
        client: fields.text({ label: "Client" }),
        category: fields.text({ label: "Category", validation: { isRequired: true } }),
        description: fields.text({ label: "Description", multiline: true, validation: { isRequired: true } }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        technologies: fields.array({
          label: "Technologies",
          itemLabel: "Technology",
          itemField: fields.text({ label: "Technology" })
        }),
        duration: fields.text({ label: "Duration" }),
        year: fields.text({ label: "Year" }),
        website: fields.url({ label: "Website URL" }),
        image: fields.image({ label: "Featured Image", validation: { isRequired: true } }),
        body: fields.mdx({ label: "Content", validation: { isRequired: true } }),
      },
    }),
  ],
});
