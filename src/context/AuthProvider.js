import React, { createContext } from 'react';
import useSatoshi from '../hooks/useSatoshi';

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const allContext = useSatoshi();

    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {props.children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;