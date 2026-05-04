'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function signupPage(){
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    async function handleSubmit(){
        try {
            const res = await fetch("http://localhost:4000/api/signup",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username, name, email, password
            })
            });
            const data = await res.json();
            if(data.success){
                setError(data.message);
                router.push("/auth/signin");
            }else{
                setError(data.message);
            }
        } catch (error) {
            console.log("Error is : ",error);
        }
    }

    return (
        <div className="bg-white h-screen place-items-center place-content-center">
            <div>
                <div></div>
                <div className="border-2 shadow-2xl rounded-2xl p-7 flex flex-col gap-3 w-80">
                    <div  className="place-items-center place-content-center">
                        <header className="text-black font-bold">Welcome Back</header>
                        <p className="text-xs text-black">Sign up to create your account</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-black" htmlFor="">Username</label>
                        <input className="border-2 rounded" type="text" name="" id="" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                    </div>
                    <div  className="flex flex-col gap-1gap-1">
                        <label className="text-xs text-black" htmlFor="">Name</label>
                        <input className="border-2 rounded" type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-black" htmlFor="">Email</label>
                        <input className="border-2 rounded" type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@gmail.com"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-black" htmlFor="">Password</label>
                        <input className="border-2 rounded" type="password" name="" id=""  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="****"/>
                    </div>
                    <div>
                        <p className="text-xs text-blue-700">Forgot Password</p>
                    </div>
                    <div className="text-xs text-red-600">
                        {
                            error ?? (
                                <p >{error}</p>
                            )
                        }
                    </div>
                    <div className="place-items-center">
                        <button onClick={handleSubmit} className="bg-blue-600 text-white w-full rounded">SignUp</button>
                    </div>
                    <div className="place-items-center">
                        <p className="text-xs text-black">OR</p>
                    </div>
                    <div className="place-items-center border">
                        <button className="w-full rounded text-black">Login with Google</button>
                    </div>
                    <div className="text-xs flex justify-center place-items-center gap-2">
                        <p className="text-black">Don't have an account?</p>
                        <p className="text-blue-700">Sign Up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}