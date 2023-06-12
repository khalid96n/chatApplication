import { ChatEngine } from "react-chat-engine";

import LoginForm from './Components/LoginForm'
import ChatFeed from './Components/ChatFeed';
import './App.css';
const projectID = '4f169b4e-8ad3-4e6e-8bc0-e32a4839ea76';

const App= ()=>{

    if(!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />
    );
};


export default App;
