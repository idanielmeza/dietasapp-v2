import { useReducer, useEffect } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { api } from "../../api/dietasapp";
import { loginWithFacebook, loginWithGoogle, logoutFireBase} from "../../firebase/app";


const AuthState = ({ children }) => {

    const initialState = {
        token: localStorage.getItem("token") || null,
        autenticado: null,
        cargando: true,
        displayName: null,
        email: null,
        picture: null,
        error: null,
        personal: {
            edad: 0,
            estatura: 0,
            peso: 0,
            genero: 'm',
            actividad: 1,
            objetivo: 1,
        },
        comida: [],
        comidaActual: [],
    }

    const [state,dispatch] = useReducer(authReducer,initialState);

    const Login = async(tokenLogin,providerId='',slug='')=>{
        try {
            const {data} = await api.get(`/auth${slug}`,{
                headers: {
                    'token': tokenLogin,
                    'provider': providerId
                }
            });
    
            const {ok,usuario, token} = data;
    
            if(ok){
                dispatch({
                    type: 'LOGIN',
                    payload:{
                        displayName: usuario.nombre,
                        autenticado: true,
                        cargando: true,
                        email: usuario.email,
                        picture: usuario.picture,
                        personal: usuario.personal,
                        error: null,
                        comida: usuario.comida,
                        token
                    }
                })
            }
            console.log(data);
            if(!ok){
                dispatch({
                    type: 'LOGIN_ERROR'
                })
            }

        } catch (error) {
            dispatch({
                type: 'LOGIN_ERROR'
            })
            console.log(error);
        }
        
    }

    const LoginPopup = async (prov) => {
        const provider = prov == 'facebook' ? loginWithFacebook : loginWithGoogle;
        try {
          const {providerId, user} = await provider();
          
            await Login(user.accessToken,providerId, '/social');
            logoutFireBase();
          
        } catch (error) {
            console.log(error);
            if(error.code === 'auth/account-exists-with-different-credential'){
                const newProvider = app !== 'facebook' ? loginWithFacebook : loginWithGoogle;
                LoginPopup(newProvider);
            }
            if(error.code === 'auth/popup-blocked'){
                console.log('Por favor, habilite popups para continuar');
          }
        }
    }

    const Logout = ()=>{
        dispatch({
            type: 'LOGOUT'
        })
    }

    const actualizarComidaApi = async () => {
        try{
            await api.put('user/comida',{
                comida: state.comida
            })
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            Login(token);
        }
    },[])

    return(
        
        <AuthContext.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            displayName: state.displayName,
            email: state.email,
            picture: state.picture,
            cargando: state.cargando,
            personal: state.personal,
            comida: state.comida,
            comidaActual: state.comidaActual,
            LoginPopup,
            Logout,
            Login,
        }}>
            {children}
        </AuthContext.Provider>

    )

}

export default AuthState;