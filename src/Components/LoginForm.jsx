import { useState } from "react"
import axios from "axios";

const projectID = '4f169b4e-8ad3-4e6e-8bc0-e32a4839ea76';
const LoginForm = ()=>{
  const [username,setusername] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const authObject = {'Project-ID':projectID,'User-Name':username,'User-Secret':password};

    try {
           await axios.get('https://api.chatengine.io/chats',{headers:authObject});

           localStorage.setItem('username',username);
           localStorage.setItem('password',password);

           window.location.reload();
	   setError('');

    } catch (err) {
        setError('opp, incorrect userid or password')
    }

  }

  return(
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} className="input" placeholder="username" required/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" required/>
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                
            </form>
<h1>{error}</h1>
        </div>
    </div>
  )

}


export default LoginForm;
