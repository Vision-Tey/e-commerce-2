import React, { useState } from 'react'
import './Login.css'
import { auth } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useStateValue } from '../Context/StateProvider';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = useState('');
    const [{}, dispatch] = useStateValue();


    const login = async (event) => {
        event.preventDefault();
    
        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch({
                type: 'SET_USER',
                user: userCredential.user.displayName
            })
            navigate('/'); 
            })
           
        } catch (error) {
            setError(error.message);
        }
    }
    
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Login</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="account-login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <form className="card login-form">
                                <div className="card-body">
                                    <div className="title">
                                        <h3>Login Now</h3>
                                        <p>You can provide your email and password to sign in</p>
                                    </div>
                                   
                                    <div className="form-group input-group">
                                        <label htmlFor="reg-fn">Email</label>
                                        <input value={email} onChange={event => setEmail(event.target.value)} className="form-control" type="email" id="reg-email" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <label htmlFor="reg-fn">Password</label>
                                        <input value={password} onChange={event => setPassword(event.target.value)} className="form-control" type="password" id="reg-pass" required />
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between bottom-content">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1" />
                                            <label className="form-check-label">Remember me</label>
                                        </div>
                                        <a className="lost-pass" href="/">Forgot password?</a>
                                    </div>
                                    <div className="button">
                                        <button className="btn" type="submit" onClick={login}>Login</button>
                                    </div>
                                    <p className="outer-link">Don't have an account? <a href="/register">Register here </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login
