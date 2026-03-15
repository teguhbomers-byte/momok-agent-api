export default function handler(req, res) {
  const agentId = req.query.agent || "1";

  res.status(200).json({
    protocolVersion: "2024-11-05",
    serverInfo: {
      name: "MomokAgent MCP Server",
      description: "AI-powered Web3 analytics and arbitrage monitoring",
      version: "1.1.0"
    },
    capabilities: {
      tools: {},
      prompts: {},
      resources: {}
    },
    tools: [
      { name: "scan_arbitrage", description: "Scan arbitrage opportunities across DEXs" },
      { name: "simulate_flashloan", description: "Simulate flashloan execution" },
      { name: "optimize_route", description: "Optimize swap routes across liquidity pools" },
      { name: "detect_honeypot", description: "Detect honeypot tokens" },
      { name: "analyze_contract", description: "Analyze smart contract risks" },
      { name: "market_analysis", description: "Analyze DeFi market trends" }
    ],
    prompts: [
      { name: "find_arbitrage_opportunity", description: "Find profitable arbitrage opportunities" },
      { name: "risk_analysis", description: "Analyze DeFi contract risk level" }
    ],
    resources: [
      { name: "blockchain_data" }
    ]
  });
}
