import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { LayoutDashboard } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Full Stack JS Boilerplate',
  },
  links: [
    {
      icon: <LayoutDashboard />,
      text: 'Dashboard',
      url: '/dashboard',
      active: 'nested-url',
    }
  ],
};
