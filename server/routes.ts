import type { Express } from "express";
import { createServer } from "http";

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Static data for demonstration
  app.get("/api/stats", (_req, res) => {
    res.json({
      servers: "1,000+",
      users: "100,000+",
      commands: "50+",
      uptime: "99.9%"
    });
  });

  return httpServer;
}
