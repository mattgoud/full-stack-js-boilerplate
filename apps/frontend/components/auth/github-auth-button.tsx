import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

export function GithubSignInButton() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

  return (
    <Button asChild variant="outline" className="w-full">
      <Link href={`${backendUrl}/auth/github`}>
        <Github className="mr-2 h-4 w-4" />
        Sign in with GitHub
      </Link>
    </Button>
  );
}
