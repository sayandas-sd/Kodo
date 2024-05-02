import { BlogType } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogsComponent"


export const SpecificBlog = ({ blog }: { blog: BlogType }) => {

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-lg pt-12">
                    <div className="col-span-4 ">
                        <div className="text-slate-600 text-lg">
                            Author
                        </div> 
                        <div className="flex">
                                <div className="flex flex-col justify-center pr-2">
                                    <Avatar name={blog.author.name || "Unknown"}/>
                                </div> 
                            <div>
                                <div className="text-lg font-semibold">
                                    {blog.author.name || "Unknown"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    random blog post content summary jdwbsdj  djbsjd
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="col-span-8 pl-8">
                    <div className="text-4xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-600 pt-2">
                        post on 2nd december
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
            </div>
        </div>
    </div>    
}
