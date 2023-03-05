import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faOilCan, faBreadSlice, faEgg, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import AuthState from '../../context/auth/authContext';

const HomePage = () => {

    const icon = (i) =>  <FontAwesomeIcon icon={i} />

    const {picture,displayName, comida} = useContext(AuthState);

    if(!displayName){
      return null;
    }

    const nombre = displayName.split(" ")[0];
    const apellido = displayName.split(" ")[1];
    const numComida = comida.length ||  0;

    return (
      <div className='bg-white p-4 rounded-xl shadow-md mt-5 w-11/12 mx-auto h-fit relative'>
          <div className='flex items-center justify-around md:justify-start'>
            <h3 className='text-center font-bold text-2xl text-azul md:mx-2'>{nombre} {apellido}</h3>
            <img src={picture} alt='profile' className='rounded-full w-20 h-20'/>
          </div>

          <div className='flex border-t-2 mt-2 p-2 justify-center'>
            <p className='text-azul md:mx-2 mt-2 p-1'>Comidas: <span className='text-sm font-bold'>{numComida}</span></p>
          </div>
          
          <div className='flex border-t-2 mt-2 p-2 justify-between'>
            <p className='text-azul md:mx-2 mt-2 flex flex-col items-center'>Objetivo: <span className='text-sm font-bold'> {numComida} kcal</span></p>
            <p className='text-azul md:mx-2 mt-2 flex flex-col items-center'>Cosumidas: <span className='text-sm font-bold'> {numComida} kcal</span></p>
            <p className='text-azul md:mx-2 mt-2 flex flex-col items-center'>Restantes: <span className='text-sm font-bold'> {numComida} kcal</span></p>
          </div>
          <div className='flex border-t-2 mt-2 p-2 justify-between'>
            <p className='text-azul md:mx-2 mt-2 flex flex-col items-center p-2'>{icon(faEgg)} <span className='text-sm font-bold'> {numComida} gr</span></p>
            <p className='text-azul md:mx-2 mt-2 flex flex-col items-center p-2'>{icon(faBreadSlice)} <span className='text-sm font-bold'> {numComida} gr</span></p>
            <p className='text-azul md:mx-2 mt-2 flex flex-col items-center p-2'>{icon(faOilCan)} <span className='text-sm font-bold'> {numComida} gr</span></p>
          </div>

      </div>
    )
}


export default HomePage;