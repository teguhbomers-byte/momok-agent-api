export default function handler(req, res) {
  const agent = req.query.agent || "1";

  const response = {
    name: "momok-agent-server",
    version: "1.1.0",
    protocolVersion: "2025-06-18",
    description: "AI-powered Web3 analytics and arbitrage monitoring",
    transport: "streamable-http",
    methods: ["POST"],
    capabilities: {
      tools: true,
      prompts: true,
      resources: true
    },
    tools: [
      "scan_arbitrage",
      "simulate_flashloan",
      "optimize_route",
      "detect_honeypot",
      "analyze_contract",
      "market_analysis"
    ],
    prompts: [
      "find_arbitrage_opportunity",
      "risk_analysis"
    ],
    status: "healthy"
  };

  res.status(200).json(response);
}
