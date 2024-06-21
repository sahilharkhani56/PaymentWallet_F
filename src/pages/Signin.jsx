import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from 'axios';
export const Signin = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const navigateTo=useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="test@gmail.com" label={"Email"} onChange={(e)=>setUsername(e.target.value)}/>
        <InputBox placeholder="123456" label={"Password"} onChange={(e)=>setPassword(e.target.value)}/>
        <div className="pt-4">
          <Button label={"Sign in"} onClick={async()=>{
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/user/signin`, {
              username,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigateTo("/dashboard")
          }}/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}