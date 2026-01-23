import { proxy } from './proxy';
import { NextRequest, NextResponse } from 'next/server';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/server', () => ({
  NextResponse: {
    redirect: vi.fn(),
    next: vi.fn(),
  },
}));

describe('proxy', () => {
  it('should redirect to login if accessing dashboard without token', () => {
    const req = {
      nextUrl: { pathname: '/dashboard' },
      cookies: { get: vi.fn().mockReturnValue(undefined) },
      url: 'http://localhost:3000',
    } as unknown as NextRequest;

    proxy(req);
    expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/login', 'http://localhost:3000'));
  });

  it('should allow access if token is present', () => {
    const req = {
      nextUrl: { pathname: '/dashboard' },
      cookies: { get: vi.fn().mockReturnValue({ value: 'valid-token' }) },
      url: 'http://localhost:3000',
    } as unknown as NextRequest;

    proxy(req);
    expect(NextResponse.next).toHaveBeenCalled();
  });
});
