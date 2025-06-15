import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname, "pathname路径--中间件")
}
 

export const config = {  matcher: '/about/:path*',}



// 第二种用法
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
//  //如果是/about 请求，重写到/about-2页面 【访问地址不会变/about，但是内容会自动缓存/about-2的内容】
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
// }