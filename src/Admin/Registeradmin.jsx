import React from 'react'
import '../Pages/Register.css'
import { auth } from '../firebase'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useStateValue } from '../Context/StateProvider';

function Registeradmin() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [displayName, SetDisplayName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [{}, dispatch] = useStateValue();
    // const [photoURL, setPhotoURL] = React.useState('');

    const register = (event) => {
        event.preventDefault(); // stops the refresh of the page

        // Verify password matches
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            setPassword('');
            setConfirmPassword('');
            return;
        }

        // Verify password length
        if (password.length < 8) {
            alert('Password cannot be less than 8 characters');
            setPassword('');
            setConfirmPassword('');
            return;
        }

        // Create user with Firebase authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Update user profile
                updateProfile(user, {
                    displayName: displayName,
                    phoneNumber: phoneNumber // Note: Firebase Auth doesn't have a phoneNumber field, consider using a custom field in your database
                }).then(() => {
                    dispatch({
                        type: 'SET_ADMIN',
                        admin: userCredential.user.displayName
                    });
                    // Navigate to admin page
                    navigate('/admin');
                }).catch((error) => {
                    alert(error.message);
                });
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
                            <div className="register-form">
                                <div className="title">
                                    <h3>No Account? Register</h3>
                                    <p>Registration takes less than a minute</p>
                                </div>
                                <form className="row">
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
                                    <p className="outer-link">Already have an account? <Link to="/admin/login">Login Now</Link>
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

export default Registeradmin
