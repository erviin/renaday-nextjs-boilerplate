"use client"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { motion } from 'framer-motion';

interface FeatureCardProps {
    title: string
    description: string
    icon: React.ReactNode
    link: string,
    delay: number
}

export function FeatureCard({ title, description, icon, link, delay = 0.3 }: FeatureCardProps) {
    return (

        <Link
            href={link}
            className="group relative "
        >
            <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay }}
                className='overflow-hidden rounded-xl bg-gradient-to-br from-green-900 to-emerald-800/80 p-6 backdrop-blur-sm transition-all hover:from-green-800 hover:to-emerald-700/70'
            >
                <div className="relative z-10">
                    <div className="mb-4 inline-block rounded-full bg-white p-2 text-green-500">
                        {icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-white/70">{description}</p>
                    <div className="mt-4 flex items-center text-white">
                        <span className="text-sm">Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

