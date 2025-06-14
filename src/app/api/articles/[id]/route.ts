import createDB from "@/db";
import { NextResponse } from "next/server";

interface IParams {params: {id: string}}

// 发起DELETE的请求 会携带删除的id，这里就变成动态路由 ==》 地址栏输入 /api/articles/1 会命中这个函数
export async function DELETE(request: Request, {params}: IParams) {
    const db = await createDB();
    await db.update(({ posts }) => {
        const index = posts.findIndex((post) => post.id === params.id);
        posts.splice(index, 1);
    })


    console.log(params.id);

    //return Response.json({ message: "DELETE 收到了" });
    return NextResponse.json({ 
        code: 0,
        message: "删除成功"
    });
}






// 修改patch打补丁修改（传什么该什么） 或者 put全量修改  /api/articles/:id
export async function PATCH(request: Request) {}

//  根据id查询  /api/articles/:id
export async function GET(request: Request) {}