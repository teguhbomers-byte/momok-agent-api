export default function handler(req, res) {

const agentId = req.query.agent || "1"

res.status(200).json({

name: `MomokAgent ${agentId}`,

description: "AI agent for blockchain analytics and arbitrage monitoring",

url: `https://momok-agent-api.vercel.app/api/a2a?agent=${agentId}`,

skills: [

"analytical_skills/blockchain_analysis",
"analytical_skills/defi_monitoring",
"analytical_skills/arbitrage_detection",
"coding_skills/smart_contract_analysis",
"data_skills/market_analysis"

]

})
}
