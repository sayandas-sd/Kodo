

export const Skeleton = ()=>{

    return  <div role="status" className="animate-pulse">
        <div className=" p-8 border-b border-slate-200 pb-6 max-w-screen-sm w-screen cursor-pointer">
            <div className="flex">
                <div className="flex justify-center">
                    <div className="h-6 w-6 bg-gray-200 rounded-full  w-30 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-gray-700 pl-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-gray-500 pl-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>

            <div className="text-xl font-bold pt-2">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-serif text-gray-700">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-gray-500 text-sm pt-6">
            <div className="h-2 bg-gray-200 rounded-full max-w-[100px] mb-2.5"></div>
            </div>
        </div>            
    </div>
}

export const SingleSkeleton = () => {
    return <div>
        
    </div>
}

