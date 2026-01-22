import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Steps } from 'fumadocs-ui/components/steps';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Callout } from 'fumadocs-ui/components/callout';
import { Layout as LayoutIcon, Server as ServerIcon, Box as BoxIcon, Database as DatabaseIcon } from 'lucide-react';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDX = (page.data as any).body;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <DocsPage toc={(page.data as any).toc} full={(page.data as any).full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX 
          components={{ 
            ...defaultMdxComponents,
            Tab,
            Tabs,
            Steps,
            Card,
            Cards,
            Callout,
            LayoutIcon,
            ServerIcon,
            BoxIcon,
            DatabaseIcon
          }} 
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
