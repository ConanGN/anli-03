import { JSONFilePreset } from 'lowdb/node'

// Read or create db.json
const defaultData:{posts: {id: string, title: string, content: string}[]} = { posts: [] }

async function createDB() {
  return await JSONFilePreset('db.json', defaultData)
}

// // Update db.json
// await db.update(({ posts }) => posts.push('hello world'))

// // Alternatively you can call db.write() explicitely later
// // to write to db.json
// db.data.posts.push('hello world')
// await db.write()

// 使用示例:
// async function updateDB() {
//   const db = await createDB()
//   // 更新数据库
//   db.data.posts.push('hello world')
//   await db.write()
//   return db
// }

export default createDB