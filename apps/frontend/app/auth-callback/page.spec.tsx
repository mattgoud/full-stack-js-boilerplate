/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import AuthCallbackPage from './page';
import { useAuth } from '@/components/auth-provider';
import { useSearchParams } from 'next/navigation';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('@/components/auth-provider', () => ({
  useAuth: vi.fn(),
  AuthProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

describe('AuthCallbackPage', () => {
  const mockLogin = vi.fn();

  beforeEach(() => {
    vi.mocked(useAuth).mockReturnValue({
      login: mockLogin,
      token: null,
      logout: vi.fn(),
      isAuthenticated: false,
    });
  });

  it('should call login with token from search params', () => {
    vi.mocked(useSearchParams).mockReturnValue(new URLSearchParams('token=test-token') as any);
    render(<AuthCallbackPage />);
    expect(mockLogin).toHaveBeenCalledWith('test-token');
  });

  it('should show authenticating message', () => {
    vi.mocked(useSearchParams).mockReturnValue(new URLSearchParams('token=test-token') as any);
    render(<AuthCallbackPage />);
    expect(screen.getByText(/Authenticating/i)).toBeInTheDocument();
  });
});