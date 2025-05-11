import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Replace `any` with your user type if available
      workspaceName?: string;
      params: Record<string, string>; // or { [key: string]: string }
    }
  }
}

export {}; // Required to treat this as a module
