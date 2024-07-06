import React from 'react'
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useStateValue } from '../Context/StateProvider';
import LoginAdmin from './LoginAdmin'

function CreateCategory() {
    const [name, setName] = React.useState('');
    const [{ admin }] = useStateValue();
    const [details, setDetails] = React.useState('');
    const [error, setError] = React.useState('');

    const user = auth.currentUser

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (name === '') {
            setError('Please enter a Category name');
            return;
        }

        if (details === '') {
            setError('Please enter a description');
            return;
        }

        try {
            await addDoc(collection(db, 'categories'), {
                timestamp: serverTimestamp(),
                name: name,
                description: details,
                username: user ? user.email : 'Unknown' // Use the authenticated user's email
            });

            // Reset form fields and error
            setName('');
            setDetails('');
            setError('');
        } catch (error) {
            setError('Error adding category: ' + error.message);
        }
    };
    return (
        <>
            {admin ? (
                <>
                    <div className="breadcrumbs admin-breads">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="breadcrumbs-content">
                                        <h1 className="page-title">Create Category</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="breadcrumb-nav">
                                        <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
                                        <li>Create Category</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="account-login section">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">

                                    <div className="col-lg-12 col-md-6 col-12 row-admd-cat">
                                        <div className="cart-list-head-right row-add">
                                            <Link to="/admin/categories"><i className="lni lni-list icon-list-prod"></i>Available Categories</Link>
                                        </div>
                                    </div>
                                    <div className="register-form create-prod">
                                        {
                                            error !== '' ? (
                                                <div className="alert alert-danger">
                                                    {error}
                                                </div>
                                            ) : ('')
                                        }
                                        <form className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="reg-fn">Category Name</label>
                                                    <input value={name} onChange={event => setName(event.target.value)} className="form-control" type="text" id="reg-fn" required="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="reg-pass-detail">Description</label>
                                                    <textarea value={details} onChange={event => setDetails(event.target.value)} className="form-control" type="text" id="reg-pass-detail" required>
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="button">
                                                <button className="btn" type="submit" onClick={handleSubmit} >Create Category</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <LoginAdmin />
            )}
        </>
    )
}

export default CreateCategory
