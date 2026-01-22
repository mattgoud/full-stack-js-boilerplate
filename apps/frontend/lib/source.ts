import { docs, meta } from '@/.source/server';
import { loader } from 'fumadocs-core/source';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function adapt(files: any[], type: 'page' | 'meta'): any[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return files.map((file: any) => ({
    ...file,
    path: file.info.path,
    type,
    // Ensure data looks like what loader expects
    data: file,
  }));
}

export const source = loader({
  baseUrl: '/dashboard/docs',
  source: {
    files: [...adapt(docs, 'page'), ...adapt(meta, 'meta')],
  },
});

