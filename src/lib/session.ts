import {getIronSession, SessionOptions} from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
    userId: string;
}

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_KEY!,
    cookieName: "app-session",
    cookieOptions: {
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
    }
}

export const getSession = async () => {
    let session = await getIronSession<SessionData>(await cookies(), sessionOptions)
    return session;
}

export async function deleteSession() {
    const session = getSession();
    (await session).destroy();
}
 