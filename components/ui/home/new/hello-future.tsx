
"use client"
import { Award, Coins, Fingerprint } from "lucide-react";
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../card";

export default function Hellofuture() {
    const features = [
        {
            icon: Fingerprint,
            title: "Decentralized Identity (DID)",
            subtitle: "Representing work experience as a verifiable credential tied to a person's decentralized identity.",
            description: "DIDs allow individuals to own and control their digital identities without relying on centralized authorities. In the context of work experience:",
            points: [
                "Employees can create verifiable credentials for their work history",
                "Employers can easily verify past experiences without lengthy background checks",
                "Privacy is enhanced as individuals control what information they share"
            ]
        },
        {
            icon: Award,
            title: "Reputation Systems",
            subtitle: "Tokenizing achievements or skills for use in decentralized applications like freelance platforms or DAOs.",
            description: "Blockchain-based reputation systems create transparent and tamper-proof records of achievements and skills:",
            points: [
                "Skills and achievements can be represented as non-fungible tokens (NFTs)",
                "Decentralized platforms can use these tokens to match talent with opportunities",
                "Reputation becomes portable across different platforms and organizations"
            ]
        },
        {
            icon: Coins,
            title: "Human Capital Tokens",
            subtitle: "Potentially tokenizing future earnings or potential tied to a person's expertise.",
            description: "Human Capital Tokens represent an individual's future earning potential or expertise:",
            points: [
                "Individuals can potentially monetize their future earnings",
                "Investors can support promising talent in exchange for a share of future income",
                "Creates new funding models for education and skill development"
            ]
        }
    ]
    return (<div className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>
            <div className="mb-12 space-y-2">
                <span className="text-xl">When you get the job done</span>
                <h1 className="text-5xl font-bold  font-[family-name:var(--font-geist-mono)]">YOU WILL BUILD</h1>
            </div>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    <Card
                        key={index}
                        className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <CardHeader>
                            <div className="mb-4 flex justify-center">
                                <div className="rounded-full bg-primary/10 p-3 text-primary">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <CardTitle className="text-xl text-center mb-2">{feature.title}</CardTitle>
                            <CardDescription className="text-center text-sm text-gray-600">
                                {feature.subtitle}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-gray-600">
                                {feature.description}
                            </p>
                            <ul className="space-y-3">
                                {feature.points.map((point, pointIndex) => (
                                    <li
                                        key={pointIndex}
                                        className="flex items-start gap-2 text-sm"
                                    >
                                        <span className="flex-shrink-0 size-1.5 rounded-full bg-primary mt-2" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    </div>)
}