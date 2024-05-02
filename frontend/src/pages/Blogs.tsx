import { Appbar } from "../components/Appbar"
import { BlogComponent } from "../components/BlogsComponent"
import { Skeleton } from "../components/Skeleton";
import { useBLogs } from "../hooks"

export const Blogs = () => {

    const {loading, blogs} = useBLogs();

    if(loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                </div>      
            </div>
        </div>    
    }

    return <div>
        <Appbar />
    <div className="flex justify-center">
        <div className="max-w-xl">
            {blogs?.map(blog => <BlogComponent 
                blogId={blog.id}
                key = {blog.id}
                authorName = {blog.author.name || "Unknown"}
                title = {blog.title}
                content={blog.content}
                publishDate={"Dec 2, 2024"}
            />)}
            
        </div>
    </div>
</div>
}