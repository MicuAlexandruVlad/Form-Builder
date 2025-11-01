"use client"

import { useState } from "react"
import AuthInput from "./components/AuthInput"
import Logo from "@/components/logo/Logo"
import { useRouter } from "next/navigation"


const Login = () => {
    const router = useRouter()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {

    }

    const handleGuest = () => {
        router.push('/form-builder')
    }
    
    return (
        <div className="bg-transparent min-w-fit flex flex-col items-center justify-center gap-8">
            <div className="flex flex-row gap-4 items-center">
                <Logo />
                <h1 className="text-2xl font-bold">Dynamic Form Builder</h1>
            </div>
            <div className="rounded-xl bg-[#1f2937] p-6 gap-4 flex flex-col">
                <h1 className="text-xl font-medium">Log in to your account</h1>
                <div />
                <AuthInput
                    value={ email }
                    onChange={ setEmail }
                    label="Email / Username"
                    placeholder="Enter your email or username"
                    type="email"
                />
                <AuthInput
                    value={ password }
                    onChange={ setPassword }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                />
                <div />
                <div className="flex flex-col items-center gap-4">
                    <button
                        className="rounded-xl font-bold outline-0 bg-[#2aacd5] p-2 w-full cursor-pointer hover:bg-[#2599bd] transition-colors"
                        onClick={ handleLogin }
                    >
                        Login
                    </button>
                    <button
                        className="rounded-xl font-bold outline-0 border border-[#2aacd5] text-[#2aacd5] p-2 w-full cursor-pointer hover:bg-[#259abd1f] transition-colors"
                        onClick={ handleGuest }
                    >
                        Continue as Guest
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
