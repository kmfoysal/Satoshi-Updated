import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useData = () => {
    
    return useContext(AuthContext);
        
};

export default useData;