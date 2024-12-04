import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import { withAuth } from "next-auth/middleware"

export default withAuth(
    function middleware(req) {
        console.log(req.nextauth.token)
    },
    {
        callbacks: {
            authorized: (a) => a.token !== null,
        },
    },
)


export const config = { matcher: ["/rx/:path*"] }

