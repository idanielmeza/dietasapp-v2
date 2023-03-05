import {useContext,useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import AuthContext from './../context/auth/authContext';

const loginRoute = ({children}) => {


    const {email,autenticado, Login, cargando} = useContext(AuthContext);

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

        autenticado && email ?(
            <Navigate to='/'/>
        ) : (
            children
        ) 

     );
    
}

export default loginRoute;