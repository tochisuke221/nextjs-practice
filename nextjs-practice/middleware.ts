import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const allCookies = request.cookies.getAll();
    console.log(allCookies)

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('sample-request-header', 'sample');

    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })

    response.cookies.set('sample-cookie', 'sample');
    response.headers.set('sample-response-header', 'sample');
    return response;
}
