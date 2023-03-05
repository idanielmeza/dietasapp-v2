import {useContext,useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import AuthContext from './../context/auth/authContext';

const PrivateRoute = ({children}) => {

    // const navigate = useNavigate();

    const {email,autenticado,cargando,Login} = useContext(AuthContext);

    useEffect(()=>{
        const check = async()=>{
            if(!autenticado){
                const token = localStorage.getItem('token');
                Login(token);
            }
        }
        
        check();
        
    },[autenticado,email])

    return ( 

        !autenticado && !email && !cargando ?(
            <Navigate to='/auth/signin'/>
        ) : (
            children
        ) 

     );
    
}

export default PrivateRoute;