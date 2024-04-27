
import { NextResponse } from "next/server";

export function middleware(request){

    const loginPath = ["/login", "/api/login"]

    if(loginPath.some((v) => v === request.nextUrl.pathname)) {
        return NextResponse.next()
    } else {
        const accessToken = request.cookies.get("accessToken");
        if(accessToken) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

}


export const config = {
    matcher: ["/login", "/api/:function*", "/", "/books/:function*", "/api/books/uploads"]
}