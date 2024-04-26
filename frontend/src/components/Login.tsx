import { SignupInput } from "@sayan_009/common";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom"


export const Login = ({type}: {type: "signup" | "signin"})=>{
    const [postInput, setPostInput] = useState<SignupInput>({
        email: "",
        password: "",
        name: "",
    });
    
    return <div className="h-screen flex justify-center flex-col">
 
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                    Create an account
                    </div>
                    <div className="text-slate-500 ">
                        {type === "signin"? "Don't have account" : "Already have an account?"}
                    <Link className="underline pl-2" to = {type === "signin" ? "/signup" : "/signin"}>
                        {type === "signin" ? "Sign up":"Sign in"}
                    </Link>
                    </div>
                </div>
                <div className="pt-8">

                    <LabelInput label = "Username" placeholder="sayan@gmail.com" onChange={(e)=>{
                            setPostInput({
                            ...postInput,
                            name: e.target.value
                        });
                    }}/>
                
                   {type === "signup" && (
                    <div>
                    <LabelInput label = "Name" placeholder="Sayan Das" onChange={(e)=>{
                        setPostInput({
                            ...postInput,
                            name: e.target.value
                        });
                    }}/>
                    </div>    
                   )}
                    <LabelInput label = "Password" type={"password"} placeholder="password" onChange={(e)=>{
                            setPostInput({
                            ...postInput,
                            name: e.target.value
                        }); 
                    }}/>

                    <button type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        {type === "signup" ? "Sign up" : "Sign in"}</button>

                </div>
            </div>
        </div>
    </div>
}

interface LabelType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
};

function LabelInput({label, placeholder, onChange, type}: LabelType) {
    return <div>
        <div>
            <label className="block mb-2 text-sm text-gray-900 dark:text-bl font-semibold pt-4">{label}</label>
            <input onChange = {onChange} type={type || "text"} id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}
