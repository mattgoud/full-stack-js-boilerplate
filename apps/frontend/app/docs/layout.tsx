import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/lib/source';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Home, Layout as LayoutIcon, Server, Workflow, Bot } from 'lucide-react';
import type * as PageTree from 'fumadocs-core/page-tree';

function transformNodes(nodes: PageTree.Node[]): PageTree.Node[] {
  return nodes.map((node) => {
    if (node.type === 'page') {
      if (node.url === '/docs') return { ...node, icon: <Home className="size-4" /> };
      if (node.url === '/docs/frontend') return { ...node, icon: <LayoutIcon className="size-4" /> };
      if (node.url === '/docs/backend') return { ...node, icon: <Server className="size-4" /> };
      if (node.url === '/docs/workflows') return { ...node, icon: <Workflow className="size-4" /> };
      if (node.url === '/docs/ai-guide') return { ...node, icon: <Bot className="size-4" /> };
    }
    if (node.type === 'folder') {
      return { ...node, children: transformNodes(node.children) };
    }
    return node;
  });
}

export default function Layout({ children }: { children: ReactNode }) {
  const tree: PageTree.Root = {
    ...source.pageTree,
    children: transformNodes(source.pageTree.children),
  };

  return (
    <div className="flex flex-1 flex-col">
      <RootProvider 
        search={{
          enabled: true,
          options: {
            api: '/api/search'
          }
        }}
      >
        <DocsLayout 
          tree={tree} 
          {...baseOptions}
          sidebar={{
            defaultOpenLevel: 0,
          }}
        >
          {children}
        </DocsLayout>
      </RootProvider>
    </div>
  );
}
