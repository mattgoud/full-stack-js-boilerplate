import { source } from '@/lib/source';
import { create, insert, search } from '@orama/orama';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json([]);
  }

  const db = await create({
    schema: {
      title: 'string',
      content: 'string',
      url: 'string',
      section: 'string',
    },
  });

  const pages = source.getPages();

  for (const page of pages) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = page.data as any;
    
    // Index the page itself (description/title)
    await insert(db, {
      title: data.title,
      content: data.description || '',
      url: page.url,
      section: '',
    });

    // Index content sections
    if (data.structuredData?.contents) {
      for (const content of data.structuredData.contents) {
        const heading = data.structuredData.headings?.find(
          (h: { id: string; content: string }) => h.id === content.heading
        );

        await insert(db, {
          title: data.title,
          content: content.content,
          url: page.url + (content.heading ? `#${content.heading}` : ''),
          section: heading?.content || '',
        });
      }
    }
  }

  const searchResults = await search(db, {
    term: query,
    properties: '*',
    limit: 10,
    tolerance: 1,
  });

  const results = searchResults.hits.map((hit) => {
    const isSection = !!hit.document.section;
    
    return {
      id: hit.id,
      url: hit.document.url,
      type: isSection ? 'text' : 'page',
      // 'content' is the primary text shown in the search result item
      content: hit.document.content,
      // 'breadcrumbs' are shown above or beside the result for context
      breadcrumbs: isSection 
        ? [hit.document.title, hit.document.section] 
        : [hit.document.title],
    };
  });

  return NextResponse.json(results);
}
