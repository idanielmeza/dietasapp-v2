export default (state,action)=>{

    switch(action.type){

        case 'LOGIN':
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                ...action.payload
            }

            case 'LOGIN_ERROR':
                localStorage.removeItem('token');
                return{
                    ...state,
                    cargando: false
                }

            case 'LOGOUT':
                localStorage.removeItem('token');
                return{
                    token: null,
                    autenticado: null,
                    cargando: true,
                    displayName: null,
                    email: null,
                    picture: null,
                    error: null,
                    comida: [],
                    comidaActual: [],

                }

        default: return state;

    }

}