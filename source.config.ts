import { defineDocs, defineConfig, frontmatterSchema } from 'fumadocs-mdx/config';
import z from 'zod';
import { visit } from 'unist-util-visit';
import type { Element, Root, Text } from 'hast';

export const docs = defineDocs({
  dir: 'contents',
  docs: {
    schema: frontmatterSchema.extend({
      metatitle: z.string()
    })
  },
});


function rehypeAddRawCode() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'pre') {
        // Find the raw text content
        let rawCode = '';
        visit(node, 'text', (textNode: Text) => {
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

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [rehypeAddRawCode],
  }
});