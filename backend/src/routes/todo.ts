import { Hono } from "hono";
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlog, updateBlog } from "@sayan_009/common";

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL: string;
        JWT_SECRET: string;
      },
    Variables: {
        userId: string;
    }
}>();

//middleware check auth
blogRouter.use('/*', async(c, next)=>{
    const authHeader = c.req.header("authorization") || "";
  
    if(!authHeader || !authHeader.startsWith('Bearer')) {
      return c.json({msg: "wrong input"})
    }
    const token  = authHeader.split(" ")[1];

    try {
      const decoded = await verify(token, c.env.JWT_SECRET);

      if (decoded) {
        c.set("userId", decoded.id)
        await next(); 
      } else {
        c.status(403);
        return c.json({ msg: "not authorized" });
      }
    } catch (error) {
      c.status(403);
      return c.json({ msg: "You are not valid" });
    }
})


blogRouter.post('/', async (c) => {

	const body = await c.req.json();
    const { success } = createBlog.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        msg:"Inputs not correct"
      })
    }
    const authorId = c.get("userId");

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
    const post = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })
	return c.json({
        id: post.id
    })
})


blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const { success } = updateBlog.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        msg:"Inputs not correct"
      })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
    const post = await prisma.post.update({
        where:{
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content,
        }
    })
	return c.json({
        id: post.id
    })
})

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    const allPost = await prisma.post.findMany({}) 

    return c.json({
        allPost
    })
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  try{
    const post = await prisma.post.findFirst({
        where:{
                id: id
            }
        })
        return c.json({
            post
        })
    } catch (error) {
        c.status(403);
        return c.json({
            msg: "this post fetch error "
        })
    }
})

