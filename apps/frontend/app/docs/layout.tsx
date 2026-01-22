import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/lib/source';

import { RootProvider } from 'fumadocs-ui/provider/next';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="fd-theme-fuma flex flex-1 flex-col">
      <RootProvider 
        search={{
          enabled: true,
          options: {
            api: '/api/search'
          }
        }}
      >
        <DocsLayout 
          tree={source.pageTree} 
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
