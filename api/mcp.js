export default function handler(req, res) {
  res.status(200).json({
    protocolVersion: "2024-11-05",
    serverInfo: {
      name: "MomokAgent MCP Server",
      description: "Web3 analytics and arbitrage monitoring agent",
      version: "1.0.0"
    },
    tools: [
      {
        name: "scan_arbitrage",
        description: "Scan arbitrage opportunities across DEX",
        inputSchema: { type: "object", properties: {} }
      },
      {
        name: "optimize_route",
        description: "Find optimal swap routes",
        inputSchema: { type: "object", properties: {} }
      },
      {
        name: "execute_flash_loan",
        description: "Simulate flash loan execution",
        inputSchema: { type: "object", properties: {} }
      }
    ],
    prompts: [
      {
        name: "find_arb_opportunity",
        description: "Find profitable arbitrage opportunities",
        arguments: []
      },
      {
        name: "simulate_tx",
        description: "Simulate blockchain transaction success rate",
        arguments: []
      }
    ],
    resources: []
  });
}
