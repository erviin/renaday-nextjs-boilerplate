import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { DirectContractIncludeGet } from '@/lib/prisma';

const prisma = new PrismaClient()
export const dynamic = 'force-dynamic';


export async function GET() {
    try {

        const session = await getServerSession();
        if (!session?.user) {
            return NextResponse.json({ error: 'Session invalid' }, { status: 403 })
        }

        const directContract = await prisma.directContract.findMany({
            where: {
                OR: [
                    {
                        employerEmail: session.user.email ?? '',
                    },
                    {
                        employeeEmail: session.user.email ?? '',
                    }
                ]
            },
            include: DirectContractIncludeGet
        });

        return NextResponse.json({ success: true, data: directContract })
    } catch (error) {
        console.error('Error submitting profile:', error)

        if (error instanceof Error) {
            if (error.message.includes('Unique constraint failed on the fields: (`username`)')) {
                return NextResponse.json({ error: 'Username already exists' }, { status: 409 })
            }
        }

        return NextResponse.json({ error: 'Failed to submit profile' }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}