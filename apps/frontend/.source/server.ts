// @ts-nocheck
import * as __fd_glob_4 from "../content/docs/workflows.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/frontend.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/backend.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/ai-guide.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "content/docs", {"ai-guide.mdx": __fd_glob_0, "backend.mdx": __fd_glob_1, "frontend.mdx": __fd_glob_2, "index.mdx": __fd_glob_3, "workflows.mdx": __fd_glob_4, });

export const meta = await create.meta("meta", "content/docs", {});