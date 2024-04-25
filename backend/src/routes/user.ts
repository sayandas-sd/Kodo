import { Hono } from "hono";
import { sign , verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signinInput, signupInput } from "@sayan_009/common";


export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL: string;
        JWT_SECRET: string;
      };
}>();


userRouter.post('/signup', async (c) => {
    const body = await c.req.json();

    const { success } = signupInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        msg:"Inputs not correct"
      })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try{
      const user = await prisma.user.create({
          data: {
            email: body.email,
            password: body.password,
            name: body.name
          },
        })
        const token = await sign({id: user.id}, c.env.JWT_SECRET);
  
      return c.json({token});
      
    } catch(error) {
        c.status(403);
        return c.json({error: "wrong input"});
    }
  })
  
  
userRouter.post('/signin', async (c) => {
  const body = await c.req.json();
  //validation
  const { success } = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        msg:"Inputs not correct"
      })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
  
    try{
      const user = await prisma.user.findUnique({
        where: {
          email: body.email
        }
      })
  
      if (!user) {
        c.status(403);
        return c.json({ msg: "Invalid email" });
      }
  
      const token = await sign({id: user.id}, c.env.JWT_SECRET);
      
      return c.json({token})
  
    } catch(error) {
      c.status(500);
      return c.json({error: "server error"})
  
    } finally {
      await prisma.$disconnect();
    }
  
  })