'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function signinPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    async function handleSubmit(){
        try {
            const res = await fetch("http://localhost:4000/api/signin",{
                method: "POST",
                headers: {
                    "Content-Tpye": "applicaton.json"
                },
                body: JSON.stringify({email, password})
            });
            const data = res.json();
            if(data.success){
                setError(data.message);
                router.push("/");
                console.log(data.message);
            }else{
                setError(data.message);
                console.log(data.message);
            }
        } catch (error) {
            console.log("Error is :", error);
        }
    }

    return (
        <div className="bg-white h-screen w-full place-items-center place-content-center">
            <div>
                <div></div>
                <div className="border-2 shadow-2xl rounded-2xl p-7  flex flex-col gap-5 w-80">
                    <div className="flex flex-col place-items-center">
                        <header className="text-black font-bold">Welcome Back</header>
                        <p className="text-xs text-black">Sign in to continue your account</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-black" htmlFor="">Email Address</label>
                        <input className="border rounded" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@gmail.com"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-black" htmlFor="">Password</label>
                        <input className="border rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="****"/>
                    </div>
                    <div>
                        <p className="text-xs text-blue-700">Forgot Password</p>
                    </div>
                    {
                        error ?? (
                            <p className="text-xs text-red">{error}</p>
                        )
                    }
                    <div>
                        <button className="w-full bg-blue-700 rounded" onClick={handleSubmit}>Login</button>
                    </div>
                    <div className="place-items-center">
                        <p className="text-xs text-black">OR</p>
                    </div>
                    <div className="border">
                        <button className="w-full text-black">Login with Google</button>
                    </div>
                    <div className="text-xs flex justify-center gap-2.5">
                        <p className="text-black">Don't have an account</p>
                        <p className="text-blue-700">Sign up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}