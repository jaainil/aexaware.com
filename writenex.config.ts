import { defineConfig, collection, fields } from "@imjp/writenex-astro/config";

export default defineConfig({
  collections: [
    collection({
      name: "blog",
      path: "src/content/blog",
      filePattern: "{slug}/index.mdx",
      previewUrl: "/blog/{slug}",
      schema: {
        title: fields.text({ label: "Title", validation: { isRequired: true } }),
        description: fields.text({ label: "Description", multiline: true, validation: { isRequired: true } }),
        author: fields.text({ label: "Author", validation: { isRequired: true } }),
        authorTitle: fields.text({ label: "Author Title", defaultValue: "Software Engineer" }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        image: fields.image({ label: "Cover Image" }),
        faq: fields.array({
          label: "FAQ",
          itemLabel: "Question",
          itemField: fields.object({
            fields: {
              question: fields.text({ label: "Question" }),
              answer: fields.text({ label: "Answer", multiline: true }),
            }
          })
        }),
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
