// source.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config/zod-3";
var docs = defineDocs({
  dir: "contents"
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  docs
};
