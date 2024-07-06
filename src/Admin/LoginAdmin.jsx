import React from 'react'
import '../Pages/Login.css'
import { auth } from '../firebase'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { useStateValue } from '../Context/StateProvider';

function LoginAdmin() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [{}, dispatch] = useStateValue();

    const login = (event) => {
        event.preventDefault(); // stops the refresh of the page

        // Firebase login logic
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Dispatch an action to update the admin state
                dispatch({
                    type: 'SET_ADMIN',
                    admin: userCredential.user.displayName
                });
                // Navigate to admin page
                navigate('/admin');
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        <>
            <div className="account-login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <form className="card login-form">
                                <div className="card-body">
                                    <div className="title">
                                        <h3>Login Now</h3>
                                        <p>You can login using your registered email address.</p>
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
                                        <Link className="lost-pass" href="/admin/login">Forgot password?</Link>
                                    </div>
                                    <div className="button">
                                        <button className="btn" type="submit" onClick={login}>Login</button>
                                    </div>
                                    <p className="outer-link">Don't have an account? <Link to="/admin/register">Register here </Link>
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

export default LoginAdmin
