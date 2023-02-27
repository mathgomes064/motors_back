import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        name: string;
        email: string;
        cpf: string;
        isAdvertiser: boolean;
        id: string;
      };
    }
  }
}