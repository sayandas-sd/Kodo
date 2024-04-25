
import {z} from "zod";

//sign up
export const signupInput = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(7),
})
export type SignupInput = z.infer<typeof signupInput>;

//sign in

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(7),
})

export type SigninInput = z.infer<typeof signinInput>;

//blog

export const createBlog = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateBlog = z.infer<typeof createBlog>;


export const updateBlog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})
export type Updateblog = z.infer<typeof updateBlog>;

