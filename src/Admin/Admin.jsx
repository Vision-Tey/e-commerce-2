import React, { useEffect } from 'react'
import { useStateValue } from '../Context/StateProvider';
import './Admin.css'
import Dasboard from './Dasboard'
import LoginAdmin from './LoginAdmin'

function Admin() {
    const [{ admin }] = useStateValue();

    useEffect(() => {
        // This effect runs when the component mounts and whenever the `admin` state changes.
        console.log('Admin state has changed:', admin);

        // Here you could add any side effects needed when `admin` state changes.
        // For example, fetching data, redirecting, etc.
    }, [admin]);

    return (
        <div className="admin-container">
            {admin ? <Dasboard /> : <LoginAdmin />}
        </div>
    )
}

export default Admin
