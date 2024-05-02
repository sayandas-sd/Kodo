import { SpecificBlog } from "../components/SpecificBlog";
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";


export const Blog = ()=>{
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });
    
    if(loading) {
     <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
    }
    return <div>
        <SpecificBlog blog={blog}/>
    </div>
}