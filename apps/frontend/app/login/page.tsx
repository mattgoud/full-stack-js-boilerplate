import { GithubSignInButton } from '@/components/auth/github-auth-button';

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Side A: Branding/Visual */}
      <div className="hidden bg-muted lg:block">
        <div className="flex h-full items-center justify-center p-12">
          <div className="max-w-md space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Full-Stack JS Boilerplate</h1>
            <p className="text-lg text-muted-foreground">
              A modern, high-performance monorepo boilerplate for building scalable web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Side B: Login Form */}
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Welcome back</h2>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue.
            </p>
          </div>
          <div className="grid gap-4">
            <GithubSignInButton />
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
