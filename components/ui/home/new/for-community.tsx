"use client"
import { FileCodeIcon as FileContract, Users, Coins, Target, Award } from 'lucide-react'
import { motion } from "framer-motion"

export default function ForCommunity() {
    return (<section className="bg-white/5 py-12 md:py-16 px-4 w-full">
        <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>
                <div className="mb-12 space-y-2 text-black ">
                    <span className="text-xl">Utilizing blockchain</span>
                    <h1 className="text-5xl font-bold  font-[family-name:var(--font-geist-mono)]">EARN EXTRA FROM</h1>
                </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                    className="bg-white/90 hover:bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Mentorship Tokens</h3>
                    <p className="text-sm text-gray-500 mb-4">Earn tokens for guiding freelancers, redeemable for discounts and premium features.</p>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                            <Coins className="mr-2 h-4 w-4 text-green-400" />
                            Redeem for platform benefits
                        </li>
                        <li className="flex items-center">
                            <Target className="mr-2 h-4 w-4 text-green-400" />
                            Measure mentorship influence
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    className="bg-white/90 hover:bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Freelance Teams</h3>
                    <p className="text-sm text-gray-500 mb-4">Form decentralized teams with tokenized roles and payment splits via smart contracts.</p>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-green-400" />
                            Collaborate on larger projects
                        </li>
                        <li className="flex items-center">
                            <FileContract className="mr-2 h-4 w-4 text-green-400" />
                            Transparent payment distribution
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    className="bg-white/90 hover:bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Skill Mining</h3>
                    <p className="text-sm text-gray-500 mb-4">Earn rewards for completing skill-enhancing tasks and certifications.</p>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                            <Award className="mr-2 h-4 w-4 text-green-400" />
                            On-chain skill badges
                        </li>
                        <li className="flex items-center">
                            <Target className="mr-2 h-4 w-4 text-green-400" />
                            Incentivized upskilling
                        </li>
                    </ul>
                </motion.div>
            </div>

        </div>
    </section >);
}