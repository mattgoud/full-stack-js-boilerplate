// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"ai-guide.mdx": () => import("../content/docs/ai-guide.mdx?collection=docs"), "backend.mdx": () => import("../content/docs/backend.mdx?collection=docs"), "frontend.mdx": () => import("../content/docs/frontend.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "workflows.mdx": () => import("../content/docs/workflows.mdx?collection=docs"), }),
};
export default browserCollections;