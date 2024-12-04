"use client"
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import useTypingEffect from '@/hooks/typing';
import { Card, CardContent, CardHeader, CardTitle } from '../../card';

export default function HeroSection() {
    const text = useTypingEffect('FUTURE', 150, 75, 2000);

    return (
        <section className=" mx-auto container flex flex-col md:flex-row items-center justify-between py-32 px-2 lg:px-0 lg:pt-32 lg:pb-16">
            <motion.div
                className="md:w-1/2 space-y-6 text-center md:text-left mb-8 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-geist-mono)]">
                    HELLO <span className='text-green-600'>{text}<span className="animate-blink">|</span></span><br />
                    <span className='text-3xl lg:text-6xl'>JOB WITH BLOCKCHAIN</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl">
                    Renaday is a decentralized platform that connects skilled professionals with clients worldwide.
                    Powered by blockchain technology, we offer secure transactions, smart contracts, and innovative
                    features like tokenized work agreements.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button size="lg" className="bg-black text-white">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />

                    </Button>
                    <Button variant="outline" size="lg" className="bg-white">
                        Learn More
                    </Button>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card className="bg-background/80 backdrop-blur-sm border-none shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-lg">Platform Highlights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            "Smart matching for talents and transactions",
                            "Smart contracts for secure work agreements",
                            "Decentralized dispute resolution",
                            "Innovative mentorship and team formation features"
                        ].map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-sm">{highlight}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}