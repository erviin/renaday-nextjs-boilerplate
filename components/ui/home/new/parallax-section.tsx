'use client'

import React, { useEffect, useRef } from 'react'

interface ParallaxSectionProps {
    children: React.ReactNode
    speed?: number
}

export function ParallaxSection({ children, speed = 0.2 }: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current
            if (!element) return

            const rect = element.getBoundingClientRect()
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const offsetTop = rect.top + scrollTop
            const windowHeight = window.innerHeight

            if (rect.top < windowHeight && rect.bottom > 0) {
                const translateY = (scrollTop - offsetTop) * speed
                element.style.transform = `translate3d(0, ${translateY}px, 0)`
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial position

        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed])

    return (
        <div ref={ref} className="relative will-change-transform">
            {children}
        </div>
    )
}

