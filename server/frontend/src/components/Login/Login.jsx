import React, { useState } from 'react';
import "./Login.css";
import Header from '../Header/Header';

const Login = ({ onClose }) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [open,setOpen] = useState(true)

  let login_url = window.location.origin+"/djangoapp/login";

  const login = async (e) => {
    e.preventDefault();

    const res = await fetch(login_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userName": userName,
            "password": password
        }),
    });
    
    const json = await res.json();
    if (json.status != null && json.status === "Authenticated") {
        sessionStorage.setItem('username', json.userName);
        setOpen(false);        
    }
    else {
      alert("The user could not be authenticated.")
    }
  };

  if (!open) {
    window.location.href = "/";
  };
  

  return (
    <div>
      <Header/>
      <div onClick={onClose}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'>

            <form className="login_panel bg-light" onSubmit={login}>
                <div className="flex w-[250px] align-center justify-left flex-col mb-2">
                  <label className="">Username </label>
                  <input type="text"  name="username" placeholder="Username" className="w-full  p-2 outline-solid outline-1 rounded" onChange={(e) => setUserName(e.target.value)}/>
                </div>
                {/* <div className="form-group">
                      <label for="email">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Your Email">
                </div> */}
                <div className="flex w-[250px] flex-col items-left ">
                  <label>Password</label>
                  <input name="psw" type="password"  placeholder="Password" className="w-full  p-2 outline-solid outline-1 rounded" onChange={(e) => setPassword(e.target.value)}/>            
                </div>
                <div>
                  <input className="action_button btn" type="submit" value="Login"/>
                  <input className="action_button btn" type="button" value="Cancel" onClick={()=>setOpen(false)}/>
                </div>
                <a className="loginlink" href="/register">Register Now</a>
            </form>
        </div>

      </div>
    </div>
  )

};

export default Login;
