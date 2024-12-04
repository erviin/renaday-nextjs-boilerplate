"use client"
import { FileCodeIcon as FileContract, Shield, Users, Coins, Target, Award } from 'lucide-react'

import { motion } from "framer-motion"

export default function ForCompanies() {
    return (
        <section className="container py-12 px-4 md:py-16 mx-auto my-16">
            <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>
                <div className="mb-12 space-y-2">
                    <h1 className="text-5xl font-bold  font-[family-name:var(--font-geist-mono)]">COMPANY BUILD</h1>
                    <span className="text-xl">The Dream Team, The True Human Capital</span>

                </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    className="bg-white/90 hover:bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Retain Talent</h3>
                    <ul className="text-sm space-y-3">
                        <li className="flex items-start">
                            <Users className="mr-2 h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>Support employee side hustles with structured Renaday opportunities</span>
                        </li>
                        <li className="flex items-start">
                            <Target className="mr-2 h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>Create a mentoring ecosystem with token rewards</span>
                        </li>
                        <li className="flex items-start">
                            <Coins className="mr-2 h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>Encourage long-term commitment with vesting token benefits</span>
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    className="bg-white/90 hover:bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Transparency Matters</h3>
                    <ul className="text-sm space-y-3">
                        <li className="flex items-start">
                            <FileContract className="mr-2 h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>Clear ROI for development efforts with tokenized proof</span>
                        </li>
                        <li className="flex items-start">
                            <Shield className="mr-2 h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>Build trust between employers and employees</span>
                        </li>
                        <li className="flex items-start">
                            <Award className="mr-2 h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>Fair value exchange with portable, verifiable credentials</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>);
}