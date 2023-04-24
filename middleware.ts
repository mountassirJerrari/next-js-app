import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAuth } from './lib/auth';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
    const token = req.cookies.get('user-token')?.value;
    let verifiedToken = token && await verifyAuth(token).catch(err => console.log(err) )
    if ((req.nextUrl.pathname.startsWith('/login') ||req.nextUrl.pathname.startsWith('/register')) && !verifiedToken) {
        return
    }
    if ((req.nextUrl.pathname.startsWith('/login') ||req.nextUrl.pathname.startsWith('/register')) && verifiedToken  ) {
         return NextResponse.redirect(new URL('/',req.url))
    }
    if (!verifiedToken) {
        return NextResponse.redirect(new URL('/login',req.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', "/login", "/register"],
}