import { defineDocs, defineConfig, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from "zod"
export const docs = defineDocs({
  dir: 'contents',
  docs: {
    schema: frontmatterSchema.extend({
      doctype: z.string().optional()
    })
  }
});

export default defineConfig();