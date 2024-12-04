"use client"
import { CheckCircle, Circle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../card"
import { motion } from "framer-motion"
import { Badge } from "../../badge"

export default function RoadMap() {
    const roadmap = [
        {
            "phase": "Phase 1",
            "title": "Preparation and Web2 Prep",
            "description": "Solidifying the concept, tokenomics, and ecosystem strategy while building initial community awareness.",
            "milestones": [
                { "text": "Define the platform architecture and key features", "completed": true },
                { "text": "Landing page", "completed": true },
                { "text": "Web2 key features release", "completed": false },
                { "text": "Finalize tokenomics and allocation strategy", "completed": false },
                { "text": "Whitepaper v1 release", "completed": false },
                { "text": "Community building via Twitter, Discord, and Telegram", "completed": false },
                { "text": "Feature DAO voting release", "completed": false },
                { "text": "Smart contract designs for token and job posting system", "completed": false },
                { "text": "Whitepaper v2 release", "completed": false },
            ],
            "date": "Q1 2025"
        },
        {
            "phase": "Phase 2",
            "title": "Web3 Initial Development & Presale",
            "description": "Launching the token presale and developing the platform's minimum viable product (MVP).",
            "milestones": [
                { "text": "Token smart contract deployment and audit", "completed": false },
                { "text": "Run token presale (private and public stages)", "completed": false },
                { "text": "Develop job posting and token reward smart contracts", "completed": false },
                { "text": "Launch MVP for job posting and rewards interface", "completed": false },
                { "text": "Distribute initial airdrops to early adopters", "completed": false }
            ],
            "date": "Q2-Q3 2025"
        },
        {
            "phase": "Phase 3",
            "title": "Platform Beta & Ecosystem Launch",
            "description": "Beta testing with key users, expanding community engagement, and launching the job posting system.",
            "milestones": [
                { "text": "Launch beta version of the platform with limited features", "completed": false },
                { "text": "Implement tokenized mentoring and skill tracking features", "completed": false },
                { "text": "Expand community through incentivized airdrop campaigns", "completed": false },
                { "text": "Refine UX/UI and smart contract functionality based on feedback", "completed": false },
                { "text": "Onboard early partner companies for job postings", "completed": false }
            ],
            "date": "Q4 2025 - Q1 2026"
        },
        {
            "phase": "Phase 4",
            "title": "Full Launch & Scaling",
            "description": "Rolling out the full platform, introducing advanced features, and driving user adoption globally.",
            "milestones": [
                { "text": "Launch complete platform with advanced job posting tools", "completed": false },
                { "text": "Introduce staking and governance functionality", "completed": false },
                { "text": "Form strategic partnerships with companies and training organizations", "completed": false },
                { "text": "Execute a global marketing campaign to onboard users", "completed": false },
                { "text": "Provide robust analytics and reports for employers and mentors", "completed": false }
            ],
            "date": "Q2-Q4 2026"
        },
        {
            "phase": "Phase 5",
            "title": "Ecosystem Expansion",
            "description": "Scaling the platform globally, building advanced features, and fostering community-driven innovation.",
            "milestones": [
                { "text": "Expand partnerships with multinational companies and platforms", "completed": false },
                { "text": "Localize platform features for key regions", "completed": false },
                { "text": "Integrate AI-powered matching and analytics tools", "completed": false },
                { "text": "Launch bounty programs for developers to create integrations", "completed": false },
                { "text": "Enable community governance for roadmap prioritization", "completed": false }
            ],
            "date": "2027 and Beyond"
        }
    ]
    return (
        <section className="py-16  min-h-96">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}>
                    <div className="mb-12 space-y-2">
                        <h1 className="text-5xl font-bold  font-[family-name:var(--font-geist-mono)]">PROJECT ROADMAP</h1>
                        <span className="text-xl">We are focus to build The Utility, bring blockchain to the next step</span>

                    </div>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {roadmap.map((phase, index) => {
                        return (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}>
                                <Card key={index} className="bg-white hover:bg-white/80 hover:scale-110 transition-transform duration-200 shadow-lg h-full">
                                    <CardHeader>
                                        <Badge className="w-fit mb-2">{phase.date}</Badge>
                                        <CardTitle className="text-2xl font-bold ">{phase.phase}: {phase.title}</CardTitle>
                                        <CardDescription className="text-gray-500">{phase.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {phase.milestones.map((milestone, mIndex) => (

                                                <li key={mIndex} className="flex items-start space-x-2">
                                                    {milestone.completed ? (
                                                        <CheckCircle className="text-green-500 h-5 w-5" />
                                                    ) : (
                                                        <Circle className="text-gray-500 h-5 w-5" />
                                                    )}
                                                    <span className={milestone.completed ? "text-gray-500" : ""}>
                                                        {milestone.text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}