import React, { useState, useEffect} from 'react';
import Sidebar from '../components/layout/Sidebar';
import "./styles/dashboard.css";
import DefaultUser from "../assets/default-profile.png";
import api from '../utils/axiosConfig.js';

// import { useAuth } from '../context/AuthContext.jsx';

//import section
import Profile from '../components/layout/DashboardSection/Profile.jsx';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // const {user} = useAuth();

    //state use to change section
    const [activeSection, setActiveSection] = useState('profil');

    //fonction to render section in user profile
    const renderSection = () =>{
        switch (activeSection){
            case 'profil':
                return(
                    <div className='dashboard-card' >
                        <Profile user={user} DefaultUser={DefaultUser} />
                    </div>
                );
            case 'books':
                return(
                    <div className='dashboard-card' >
                        <h3>annonces</h3>
                    </div>
                );
            case 'favorites':
                return(
                    <div className='dashboard-card' >
                        <h3>favorites</h3>
                    </div>
                );
            case 'messages':
                return(
                    <div className='dashboard-card' >
                        <h3>messages</h3>
                    </div>
                );
            default:
                return <div>selectionner une section</div>
        }
    };

    useEffect(() => {
        const fetchUserProfile =async () => {
            try {
                const response = await api.get('/user/profile');
                console.log(response);
                if(response.status === 200){
                    setUser(response.data);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération du profil : ", error);
                setError("Impossible de charger les informations du profil.");
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [] );

    if(loading){
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: '100vh'}} >
            Chargement du profile ...
        </div>
    }

    if(error){
        return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }} >
            {error}
        </div>
    }

    return (
        <div className="dashboard-layout">
            <Sidebar currentSection={activeSection} changeSection={setActiveSection} />
                <main className="dashboard-content">
                    {renderSection()}
                </main>
        </div>
    );
}

export default UserProfile;