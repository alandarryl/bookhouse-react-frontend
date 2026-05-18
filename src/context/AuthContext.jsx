
import React, { createContext, useState, useEffect, useContext } from "react";
import api from '../utils/axiosConfig';

//1. On fabrique l'objet "Context" (le support du journal)
const AuthContext = createContext(null);

//2. Le fournisseur pour que la chambre puissent voir le journal

export function AuthProvider({children}){
    //la variable global qui contient l'utilisateur
    const [user, setUser] = useState(null);
    //un état pour savoir si on est en train de verifier le cookie au demarrage
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoggedIn = async () =>{
            try {
                //on appelle la route backend
                const response = await api.get('/user/profile');
                if(response.status === 200){
                setUser(response.data);
            }
            } catch (error) {
                //si le cookie est mort ou absent, le journal reste vide 
                setUser(null);
            } finally{
                setLoading(false);
            }
        };
        checkLoggedIn();
    }, [] );

    const logout = async () => {
        try {
            await api.post('/user/logout');
        } catch (error) {
            console.error('erreur déconnexion', error);
        } finally {
            setUser(null);
        }
    };

    if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        Chargement...
    </div>;
    }

    return(
        //on diffuse la variable, la function user , setUser
        <AuthContext.Provider value={{ user, setUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )

};


export const useAuth = () => useContext(AuthContext);