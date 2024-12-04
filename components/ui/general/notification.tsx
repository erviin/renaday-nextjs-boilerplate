import React from 'react'
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function Notification() {
    const notifications = [
        { id: 1, title: "New message", description: "You have a new message from John Doe", time: "5 min ago" },
        { id: 2, title: "Payment received", description: "You received a payment of $50", time: "1 hour ago" },
        { id: 3, title: "New follower", description: "Jane Smith started following you", time: "2 hours ago" },
    ]

    return (<DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
                <Bell className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle notifications</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={cn(
            "w-80", "p-0",
            "before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
            "before:w-2 before:h-2 before:rotate-45 before:bg-white before:border-l before:border-t before:border-gray-200"
        )}>
            {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="cursor-pointer p-0 border-b">
                    <div className="w-full p-4 m-0 border-none shadow-none rounded-none">
                        <h3 className="font-semibold">{notification.title}</h3>
                        <p className="text-sm text-gray-500">{notification.description}</p>
                    </div>
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>);
}