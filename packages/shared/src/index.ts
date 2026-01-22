// Example of shared interface
export interface User {
  id: string;
  email: string;
  createdAt: Date;
}

// Example of shared constant
export const API_CONFIG = {
  USER_ROLES: ['admin', 'user', 'guest'] as const,
};

export * from './user.dto';