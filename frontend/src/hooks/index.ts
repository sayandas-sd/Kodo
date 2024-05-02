import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface BlogType {
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "name": string;
    }
}

export const useBLogs = ()=>{

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogType[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.allPost);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        })

    },[])

    return {
        loading,
        blogs
    }

}

export const useBlog = ({ id }: { id: string })=> {
        const [loading, setLoading] = useState(true);
        const [blog, setBlog] = useState<BlogType>();

        useEffect(()=>{
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            .then(response => {
                setBlog(response.data.Post);
                setLoading(false);
            }).catch(error => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            })
        },[id])

        return {
            loading,
            blog
        }
}



