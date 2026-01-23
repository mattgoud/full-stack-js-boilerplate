import { render, screen } from '@testing-library/react';
import { GithubSignInButton } from './github-auth-button';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('GithubSignInButton', () => {
  it('should render a button with "Sign in with GitHub"', () => {
    render(<GithubSignInButton />);
    expect(screen.getByRole('link')).toHaveTextContent(/Sign in with GitHub/i);
  });

  it('should have a link to the backend github auth endpoint', () => {
    render(<GithubSignInButton />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', expect.stringContaining('/auth/github'));
  });
});
