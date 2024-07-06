import React, { useState } from 'react'
import './Register.css'
import { auth } from '../firebase'
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useStateValue } from '../Context/StateProvider';

function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [displayName, SetDisplayName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [error, setError] = useState('');
    const [{}, dispatch] = useStateValue();
    // const [photoURL, setPhotoURL] = React.useState('');

    const register = async (event) => {
        event.preventDefault();
    
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setPassword('');
            setConfirmPassword('');
            return;
        }
    
        if (password.length < 8) {
            setError('Password cannot be less than 8 characters');
            setPassword('');
            setConfirmPassword('');
            return;
        }
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: displayName,
                phoneNumber: phoneNumber
            });
            dispatch({
                type: 'SET_USER',
                user: userCredential.user.displayName
            })
            navigate('/');
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
                                <h1 className="page-title">Registration</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                <li>Registration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="account-login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <div className="register-form">
                                <div className="title">
                                    <h3>No Account? Register</h3>
                                    <p>Registration takes less than a minute but gives you full control over your orders.</p>
                                </div>
                                <form className="row">
                                {error && <p className="error">{error}</p>}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="reg-fn">Display Name</label>
                                            <input value={displayName} onChange={event => SetDisplayName(event.target.value)} className="form-control" type="text" id="reg-fn" required="" />
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="reg-ln">Picture</label>
                                            <input value={photoURL} onChange={event => setPhotoURL(event.target.value)} className="form-control" type="file" id="reg-ln" required="" />
                                        </div>
                                    </div> */}
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="reg-phone">Phone Number</label>
                                            <input value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} className="form-control" type="text" id="reg-phone" required="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="reg-email">E-mail Address</label>
                                            <input value={email} onChange={event => setEmail(event.target.value)} className="form-control" type="email" id="reg-email" required />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="reg-pass">Password</label>
                                            <input value={password} onChange={event => setPassword(event.target.value)} className="form-control" type="password" id="reg-pass" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="reg-pass-confirm">Confirm Password</label>
                                            <input value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} className="form-control" type="password" id="reg-pass-confirm" required />
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn" type="submit" onClick={register} >Register</button>
                                    </div>
                                    <p className="outer-link">Already have an account? <a href="/login">Login Now</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register
