const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ─── Routes ───────────────────────────────────────────────

app.get("/", (req, res) => {
  res.json({
    message: "🚀 API funcionando",
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: `${Math.floor(process.uptime())}s`,
  });
});

// ─── 404 ─────────────────────────────────────────────────

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    path: req.originalUrl,
  });
});

// ─── Error handler ───────────────────────────────────────

app.use((err, req, res, next) => {
  console.error("💥 Error:", err);

  res.status(500).json({
    error: "Error interno del servidor",
  });
});

// ─── Start ────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════╗
║          🚀 SERVER ONLINE            ║
╠══════════════════════════════════════╣
║  Local:  http://localhost:${PORT}      ║
║  Status: 🟢 Ready                    ║
╚══════════════════════════════════════╝
  `);
});

