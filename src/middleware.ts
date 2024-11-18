import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login"];

export default async function middleware(req:NextRequest) {
    const session = await getSession();

    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }

    if (isPublicRoute && session?.userId) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
    }

    return NextResponse.next();
};