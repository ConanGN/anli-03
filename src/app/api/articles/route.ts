import createDB from "@/db";
import { NextRequest } from "next/server";

// 发起get请求  ==》 地址栏输入 /api/articles 会命中这个函数
export async function GET(request: NextRequest) {
  // 前端传入参数，获取query 根据query进行筛选或者过滤的操作
  const sParams = request.nextUrl.searchParams;
  const pagenum = Number(sParams.get('pagenum') || 1);   // 默认值是1
  const pagesize = Number(sParams.get('pagesize') || 2);   // 默认值是2  每页展示10条
  const query = sParams.get('query') || "";   // 查询字符串


  // 筛选: 模糊筛选title和content的内容
  const db = await createDB();
  const data = db.data.posts;

  // let filteredData = data;
  // if (query) {
  //   filteredData = data.filter((item) => item.title.includes(query) || item.content.includes(query));
  // } else {
  //   filteredData = data;
  // }

  // 使用三元运算符判断是否有查询条件
  let filteredData = query ? data.filter(item => {
    // 解构出id和剩余属性，因为id不需要参与搜索
    const {id, ...rest} = item;
    // 将剩余属性转换为数组，使用some方法检查是否有任何一个属性值包含查询字符串
    // Object.values(rest)获取所有属性值
    // some()方法用于检查数组中是否至少有一个元素满足条件
    // String(value)确保所有值都转换为字符串
    // toLowerCase()将字符串转换为小写，实现不区分大小写的搜索
    return Object.values(rest).some(value => 
      String(value).toLowerCase().includes(query.toLowerCase())
    );
  }) : data;  // 如果没有查询条件，返回原始数据

  const total = filteredData.length;
  const startindex = (pagenum - 1) * pagesize; //开始的位置
  const endindex = Math.min(startindex + pagesize, total); //结束的位置

  const articles = startindex >= total ? [] : filteredData.slice(startindex, endindex); //截取  如果开始位置大于等于总数，则返回空数组截取不到数据


  // 返回 JSON 响应
  return Response.json({ 
    code: 0,
    message: "查询成功",
    data: {
      total,
      limit: articles,
    }
   });
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



