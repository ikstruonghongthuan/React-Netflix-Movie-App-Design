import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './login.scss'

const Login = () => {
    let history = useHistory();

    const { login } = useAuth()

    const emailRef = useRef();
    const passwordRef = useRef();
    const handleLogin = async () => {
        console.log('Fail to sign in')
        try {
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            console.log('Fail to sign in')
        }
    }

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                </div>
            </div>
            <div className="container">
                <div className="form">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" ref={emailRef} />
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    <button className="loginButton" onClick={handleLogin}>Sign In</button>
                    <span>
                        New to Netflix? <a href='/Register'>Sign up now.</a>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Login
