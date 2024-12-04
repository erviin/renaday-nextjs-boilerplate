import { Loader2 } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "../../button";
import { Label } from "../../label";
import { Input } from "../../input";
import { Textarea } from "../../textarea";
import { formatCurrencyIDR, RoleTypeEnum } from "@/lib/enum";
import { RateType, RoleType } from "@prisma/client";

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardContent } from "../../card";


export default function HomeNewDirectContract() {
    const [isOpen, setIsopen] = useState(false);
    return (<Card className="bg-zinc-950 border-zinc-800">
        <CardHeader>
            <CardTitle className="text-zinc-100">Direct Contract</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-zinc-400 mb-4">
                Create a direct contract with an individual or a company now
            </p>
            <Dialog open={isOpen}>
                <DialogTrigger asChild>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                        Create Contract
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[650px] bg-zinc-950 border-zinc-800 text-zinc-100">
                    <DrawerNewDirectContract setIsOpen={setIsopen} />
                </DialogContent>
            </Dialog>

        </CardContent>
    </Card>);
}

export const DrawerNewDirectContract = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [selectedRateType, setSelectedRateType] = useState<keyof typeof RateType | null>(null);
    const [selectedRole, setSelectedRole] = useState<keyof typeof RoleType | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [projectName, setProjectName] = useState<string>("");
    const [projectDesc, setProjectDesc] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const { toast } = useToast()

    const handleSelect = (value: keyof typeof RateType) => {
        setSelectedRateType(value);
        console.log("Selected RateType:", value); // Handle the selected value here
    };
    const handleSelectRole = (value: keyof typeof RoleType) => {
        setSelectedRole(value);
        console.log("Selected Roletype:", value); // Handle the selected value here
    };

    const [rate, setRate] = useState("")

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const formattedValue = formatCurrencyIDR(value)
        setRate(formattedValue)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/rx/api/direct-contract/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    projectName,
                    projectDesc,
                    roleName: selectedRole,
                    email,
                    rateType: selectedRateType,
                    rate: rate.replace(/[^\d]/g, ''), // Remove non-digit characters
                }),
            })

            const jsonResponse = await response.json();

            if (!response.ok) {
                throw new Error(jsonResponse.error)
            }
            setIsOpen(false)

            toast({
                title: "Success",
                description: "Direct contract has been sent",
            })
            // Refresh the current route

            // Close the dialog (you might need to implement this functionality)
            // closeDialog()

        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong';

            toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive"
            })
            // Handle error (e.g., show error message to user)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (<form onSubmit={handleSubmit}>
        <DialogHeader>
            <DialogTitle>Direct Contract</DialogTitle>
            <DialogDescription>
                Create a direct contract with an individual or a company now.
            </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="space-y-1">
                <Label htmlFor="name" className="text-right">
                    Project Name
                </Label>
                <Input id="name"
                    value={projectName} onChange={(e) => setProjectName(e.target.value)}
                    className="col-span-3 " />
            </div>
            <div className="space-y-1">
                <Label htmlFor="desc" className="text-right">
                    Project Description
                </Label>
                <Textarea id="desc" value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} className="col-span-3 " />
            </div>
            <div className="space-y-1">
                <Label htmlFor="name" className="text-right">
                    Your Role
                </Label>
                <Select
                    value={selectedRole || undefined}
                    onValueChange={(value) => handleSelectRole(value as keyof typeof RoleTypeEnum)}

                >
                    <SelectTrigger >
                        <SelectValue placeholder="Select Role Type" />
                    </SelectTrigger>
                    <SelectContent >
                        {Object.keys(RoleType).map((key: string) => (
                            <SelectItem key={key} value={key}>
                                {key.charAt(0) + key.replaceAll("_", " ").slice(1).toLowerCase()} {/* Format: "Hourly", "Monthly" */}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-1">
                <Label htmlFor="email" className="text-right">
                    Partner email
                </Label>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="name" className="text-right">
                    Fee type
                </Label>
                <Select
                    value={selectedRateType || undefined}
                    onValueChange={(value) => handleSelect(value as keyof typeof RateType)}
                >
                    <SelectTrigger >
                        <SelectValue placeholder="Select Rate Type" />
                    </SelectTrigger>
                    <SelectContent >
                        {Object.keys(RateType).map((key) => (
                            <SelectItem key={key} value={key}>
                                {key.charAt(0) + key.slice(1).toLowerCase()} {/* Format: "Hourly", "Monthly" */}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-1">
                <Label htmlFor="rate" className="text-right">
                    Fee [ USDC ]
                </Label>
                <Input id="rate" value={rate} onChange={handleAmountChange}
                />
            </div>

        </div>
        <DialogFooter>
            <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? <Loader2 className="animate-spin" />
                    : ''}
                {isSubmitting ? 'Loading' : 'Submit'}
            </Button>
        </DialogFooter>
    </form >);
}