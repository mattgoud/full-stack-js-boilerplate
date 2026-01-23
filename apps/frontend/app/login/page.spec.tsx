import { render, screen } from '@testing-library/react';
import LoginPage from './page';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock the GithubSignInButton component
vi.mock('@/components/auth/github-auth-button', () => ({
  GithubSignInButton: () => <button data-testid="github-button">Mock Github Button</button>,
}));

describe('LoginPage', () => {
  it('should render the login page with the title and description', () => {
    render(<LoginPage />);
    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in to your account/i)).toBeInTheDocument();
  });

  it('should render the GithubSignInButton', () => {
    render(<LoginPage />);
    expect(screen.getByTestId('github-button')).toBeInTheDocument();
  });
});
