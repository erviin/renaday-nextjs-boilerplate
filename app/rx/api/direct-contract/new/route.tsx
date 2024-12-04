import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    try {
        const { projectName, projectDesc, roleName, email, rateType, rate } = await request.json()

        // Validate input
        if (!projectName || !roleName || !email || !rateType || !rate) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Convert amount to a number
        const amountNumber = parseInt(rate, 10)

        if (isNaN(amountNumber)) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
        }

        const session = await getServerSession();
        if (!session?.user) {
            return NextResponse.json({ error: 'Session invalid' }, { status: 403 })
        }

        console.log("API", session)
        let employerEmail = session?.user?.email ?? ''
        let employeeEmail = email
        const me = await prisma.user.findFirst({
            where: {
                email: session?.user?.email ?? ''
            }
        })
        let employee = await prisma.user.findFirst({
            where: {
                email: employeeEmail
            }
        })
        let employer = me;
        if (roleName === "PROFESIONAL") {
            employerEmail = email
            employeeEmail = session?.user?.email
            employer = employee
            employee = me
        }

        // Insert data into the database
        const contract = await prisma.directContract.create({
            data: {
                projectName,
                projectDescription: projectDesc,
                ownerRole: roleName,
                ownerEmail: session.user?.email ?? '',
                ownerEmailId: me?.id ?? '',
                employeeEmailId: employee?.id ?? null,
                employerEmailId: employer?.id ?? null,
                employerEmail,
                employeeEmail, rateType, rate: amountNumber,
            },
        })

        return NextResponse.json({ success: true, contract })
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