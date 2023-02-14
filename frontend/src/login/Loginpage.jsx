import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
const Loginpage = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
    async function submit(e) {
      e.preventDefault();
      try {
        await axios
          .post("/api/ir/login", {
            email,
            password,
          })
          .then((res) => {
            if (res.data==="succerfully") {
              history("/home",{state:{emailid:email,passwordid:password}});
              alert("login succesfully")
            } else if(res.data ==="notexist"){
              alert("please enter correct login or email");
            }
          });
      } catch (error) {
        alert("error was found")
      }
    }

  
  return (
    <div className="box">
      <form className="form">
        <h1>Login Page</h1>
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={submit}>login</button>
      </form>
    </div>
  );
};

export default Loginpage;
