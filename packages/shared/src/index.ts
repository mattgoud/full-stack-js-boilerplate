// Example of shared interface
export interface User {
  id: string;
  email: string;
  username: string;
  name?: string | null;
  githubId?: string | null;
  avatarUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Example of shared constant
export const API_CONFIG = {
  USER_ROLES: ['admin', 'user', 'guest'] as const,
};

export * from './user.dto';
