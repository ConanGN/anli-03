import createDB from "@/db";

// 发起get请求  ==》 地址栏输入 /api/articles 会命中这个函数
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page') || 1);
  const limit = Number(searchParams.get('limit') || 10);

  // 获取 db 实例
  const db = await createDB();
  
  // 计算分页
  const start = (page - 1) * limit;
  const end = start + limit;
  
  // 使用数组的 slice 方法进行分页
  const articles = db.data.posts.slice(start, end);

  // 返回 JSON 响应
  return Response.json({ articles });
}

// 发起POST请求  ==》 地址栏输入 /api/articles 会命中这个函数
export async function POST(request: Request) {
    // 获取 db 实例
    const db = await createDB();

    const body = await request.json();
    console.log(body);

    await db.update(({ posts }) => posts.unshift({
        id: Math.random().toString(36).slice(-8),
        ...body
    }))    


  // TODO: 实现创建文章的逻辑
  return Response.json({ message: "POST 收到了" });
}



