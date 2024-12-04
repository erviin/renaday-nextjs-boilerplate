import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { z } from "zod"
import { DirectContractIncludeGet } from '@/lib/prisma';
const prisma = new PrismaClient()

const onChainSchema = z.object({
    contractId: z.string({
        required_error: 'Contract Id is required',
    }).min(5, "Invalid contract id"),
    transactionHash: z.string({
        required_error: 'transactionHash is required',
    }).min(10, "Invalid transactionHash")
})

export async function POST(request: Request) {
    try {
        const reqBody = onChainSchema.parse(await request.json());

        const session = await getServerSession();
        if (!session?.user) {
            return NextResponse.json({ error: 'Session invalid' }, { status: 403 })
        }

        const directContract = await prisma.directContract.update({
            where: {
                id: reqBody.contractId
            },
            data: {
                isOnChain: true,
                onChainTx: reqBody.transactionHash,
                onChainAt: new Date(),
                onChainDeployerEmail: session.user.email
            },
            include: DirectContractIncludeGet
        })

        return NextResponse.json({ success: true, data: directContract })
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map(err => err.message);

            return NextResponse.json({ errors: errorMessages, error: errorMessages[0] }, { status: 409 });
        }
        if (error instanceof Error) {
            return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
        }

        return NextResponse.json({ error: 'Failed to accept contract' }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}