import React, { useState } from "react";
import { Button } from "../button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../dialog";
import { DirectContract } from "@prisma/client";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function AcceptDirectContractButton({ item, setItem }: { item: DirectContract, setItem: React.Dispatch<React.SetStateAction<DirectContract>> }) {
    const [acceptLoading, setAcceptLoading] = useState(false)
    const [acceptDialog, setAcceptDialog] = useState(false)

    const acceptInvitation = async () => {
        try {
            setAcceptLoading(true);
            const response = await fetch('/rx/api/direct-contract/actions/accept', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contractId: item.id
                }),
            })

            const jsonResponse = await response.json();

            if (!response.ok) {
                throw new Error(jsonResponse.error)
            }
            setItem(jsonResponse.data);
            setAcceptDialog(false)

            toast({
                title: "Success",
                description: "Direct contract has been accepted",
            })

        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong';

            toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive"
            })
            // Handle error (e.g., show error message to user)
        } finally {
            setAcceptLoading(false)
        }
    }

    return (<Dialog open={acceptDialog} onOpenChange={(s) => { if (s !== acceptDialog && !acceptLoading) setAcceptDialog(s) }}>
        <DialogTrigger asChild>
            <Button className="bg-green-500" onClick={() => setAcceptDialog(true)}>Accept</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogDescription>
                    You are about to accept invitation
                </DialogDescription>
            </DialogHeader>
            <p>You cannot change the contract rate after you accept the invitation, Are you sure to continue?</p>
            <DialogFooter>
                <Button type="button" disabled={acceptLoading} className="bg-green-500" onClick={() => acceptInvitation()}>
                    {acceptLoading ? <Loader2 className="animate-spin" /> : ''}
                    {acceptLoading ? 'Confirming..' : 'Accept now'}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>);
}