import { useState } from "react";
import axios from 'axios';

export default function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })
    
    const loginUser = (exp) => {
        e.preventDefault();
        axios.get('/')
    }
  return (
    <div>
        <form onSubmit={loginUser}>
            <lable>Email</lable>
            <input type='email' placeholder='Enter email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            
            <label>Password</label>
            <input type='password' placeholder='enter' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
