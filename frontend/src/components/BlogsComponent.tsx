import { Link } from "react-router-dom";

interface BlogCard {
    authorName: string;
    title: string;
    content: string;
    publishDate: string;
    blogId: string;
}

export const BlogComponent = ({
    blogId,
    authorName,
    title,
    content,
    publishDate 
}: BlogCard) =>{
    return <Link to={`/blog/${blogId}`} >
        <div className=" p-8 border-b border-slate-200 pb-6 max-w-screen-sm w-screen cursor-pointer" key={blogId}>
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name= {authorName} />
                </div>
                <div className="text-gray-700 pl-2">{authorName}</div>
                <div className="text-gray-500 pl-2">• {publishDate}</div>
            </div>

            <div className="text-xl font-bold pt-2">
                {title}
            </div>
            <div className="text-md font-serif text-gray-700">
                {content.slice(0, 130) + "...."}
            </div>
            <div className="text-gray-500 text-sm pt-6">
                {`${Math.ceil(content.length/100)} min read`}
            </div>
        </div>
    </Link>
}

export function Avatar({name}: { name:string }) {
    
    return  <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>

}