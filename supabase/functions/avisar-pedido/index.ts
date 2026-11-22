import { handleRequest } from './handler.mjs';
Deno.serve((req: Request) => handleRequest(req, Deno.env.toObject()));
