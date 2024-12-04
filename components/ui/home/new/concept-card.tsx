"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ReactNode } from "react"


export default function ConceptCard({ title, description, icon, children, delay }: { title: string, description: string, icon: ReactNode, children: ReactNode, delay: number }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: delay }}>
            <Card className="flex flex-col h-full hover:scale-110 transition-transform duration-100 bg-white/80 hover:bg-white backdrop-blur-sm text-black">
                <CardHeader>
                    <div className="flex items-center justify-center mb-4 text-green-500 ">
                        {icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
                    <CardDescription className="text-center text-black">{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    {children}
                </CardContent>
            </Card></motion.div>
    )
}