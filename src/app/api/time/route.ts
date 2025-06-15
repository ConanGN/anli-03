import { NextRequest, NextResponse } from "next/server";
// 3. 3. 使用动态函数 Cookies和Headers
import { cookies ,headers} from "next/headers";


//4. 通过配置选项 手动指定动态模式，退出缓存。
export const dynamic = 'force-dynamic'

//5. 设定缓存的时效，可以使用 revalidate 段落配置选项： 60s内缓存有效，超过60s访问，会触发缓存更新
export const revalidate = 60  


export async function GET(request: NextRequest) {
    // 1. 1. 将request对象和GET方法一起使用。因为前端传入的query是动态变化的，会触发缓存退出。
    const sParams = request.nextUrl.searchParams.get("time")
    console.log("请求时间戳 get api/time");

    const cookieStore = cookies()
    const token = cookieStore.get('token')

    const headersList = headers()
    const referer = headersList.get('referer')

    return NextResponse.json({
        time: new Date().toLocaleTimeString(),
        message: "请求成功",
        sParams: sParams,
        status: 200,
        token: token,
        referer: referer    
    });
}

// 2. 使用其他的http方法。同一个文件又用了POST方法 退出缓存
export async function POST(){}