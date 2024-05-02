import { Link } from "react-router-dom"
import { Avatar } from "./BlogsComponent"


export const Appbar = ()=>{
    return <div className="border-b flex justify-between px-10 py-3">
        <Link to={"/blogs"}>
            kodos
        </Link>
       
        <div>
            <Link to={"/publish-blog"}>
               <button type="button" className="mr-8 text-white bg-gray-900 hover:bg-gray-800  font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 cursor-pointer">Write Blog</button>
            </Link>
            <Avatar name = {"Sayan"}/>
        </div>
        
    </div>
}