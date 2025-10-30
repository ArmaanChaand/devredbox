// source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import z from "zod";
import { visit } from "unist-util-visit";
var docs = defineDocs({
  dir: "contents",
  docs: {
    schema: frontmatterSchema.extend({
      metatitle: z.string()
    })
  }
});
function rehypeAddRawCode() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "pre") {
        let rawCode = "";
        visit(node, "text", (textNode) => {
          rawCode += textNode.value;
        });
        if (!node.properties) {
          node.properties = {};
        }
        node.properties.__raw__ = rawCode;
      }
    });
  };
}
var source_config_default = defineConfig({
  mdxOptions: {
    rehypePlugins: [rehypeAddRawCode]
  }
});
export {
  source_config_default as default,
  docs
};
