"use client"
import { ArrowRight } from 'lucide-react'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";

export default function LetsGo() {
    return (<section className="bg-white/5 py-16">

        <div className="container text-center mx-auto flex flex-col items-center">
            <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-6">The Renaday Advantage</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Transform your company approach to talent management and development
                </p>
            </motion.div>
            <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <Button className="bg-black text-white ">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </motion.div>
        </div>
    </section>)
}