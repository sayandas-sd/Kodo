import { SignupInput } from "@sayan_009/common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";




export const Login = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();

    const [postInput, setPostInput] = useState<SignupInput>({
        email: "",
        password: "",
        name: "",
    });
    
    async function sendBackend() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`, postInput);
            const jwt = response.data;
            
            localStorage.setItem("token", jwt);
            navigate("/blog");

        } catch(e) {
            alert("server not connected properly")
        }
    }


    return <div className="h-screen flex justify-center flex-col">
 
        <div className="flex justify-center ">
            <div className="roun p-8 rounded-lg shadow-md">
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
                            email: e.target.value
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
                            password: e.target.value
                        }); 
                    }}/>

                    <button onClick={sendBackend} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
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
