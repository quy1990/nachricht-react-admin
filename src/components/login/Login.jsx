import React, {useState} from 'react';
import './Login.css'
import {useHistory} from "react-router-dom";


async function loginUser(credentials) {
    return fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


function setAuth(token) {
    localStorage.setItem('access_token', token.access_token);
}


const Login = () => {
    const [email, setEmail] = useState('abc@skdjsk.com');
    const [token, setToken] = useState(localStorage.getItem('access_token'));
    const [password, setPassword] = useState('123admin');
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setAuth(token);
        setToken(token)
    }

    return (
        <div className="body">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required=""/>
                        <input type="email" name="email" placeholder="Email" required=""/>
                        <input type="password" name="pswd" placeholder="Password" required=""/>
                        <button>Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form onSubmit={handleSubmit}>>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required=""
                               onChange={e => setEmail(e.target.value)}/>
                        <input type="password" name="pswd" placeholder="Password" required=""
                               onChange={e => setPassword(e.target.value)}/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
