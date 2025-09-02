// source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "contents",
  docs: {
    schema: frontmatterSchema.extend({
      doctype: z.string().optional()
    })
  }
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  docs
};
