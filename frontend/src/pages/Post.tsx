import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Post = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return <div>
        <Appbar />
        <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full">
                <input onChange={(e)=>{
                    setTitle(e.target.value);

                }} type="email" id="helper-text" className="focus:outline-none w-full border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" placeholder="Blog Title" />

                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                    <div className="bg-white rounded-t-lg ">
                        <label className="sr-only">Blog Post</label>
                        <textarea onChange={(e)=> {
                            setContent(e.target.value);
                        }}
                        id="comment" rows={8} className="w-full p-4 text-sm text-gray-900 bg-white border-0 focus:outline-none" placeholder="Write Your Blog..." required ></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t ">
                        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-900 rounded-lg  hover:bg-gray-800"
                        onClick={()=>{
                            axios.post(`${BACKEND_URL}/api/v1/blog`,{
                                title,
                                content
                            },{
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            });
                            navigate(`/blogs`);
                        }}>
                            Post comment
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}

