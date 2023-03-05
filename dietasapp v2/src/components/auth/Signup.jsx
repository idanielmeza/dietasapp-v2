import {MailIcon, KeyIcon, UserCircleIcon } from '@heroicons/react/solid';
import {Link} from 'react-router-dom';
import Footer from '../layout/Footer';

const SingUp = () => {
    return (
        <>
        <div className='flex h-screen my-auto items-center'>
        <form className='bg-slate-100 rounded-sm mx-auto w-80 sm:w-auto p-10'>
            <h2 className='text-2xl mb-5 ml-2 sm:ml-0'>Bienvenido a DietasApp {''}
            <a className='font-black'>
              by LedezmaDev
            </a>
            </h2>

            <div className='mb-5'>
              <p className='font-bold mb-1 ml-2'>Nombre</p>
                <label className='block relative focus-within:text-gray-600'>
                    <input className='w-full bg-white placeholder:font-italitc border border-slate-400 rounded-md py-2 pl-3 pr-10 focus:outline-none' type="text" name='nombre' placeholder='Ingresa tu nombre'/>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                      <UserCircleIcon className='h-5 w-5 fill-slate-700'/>
                    </span>
                </label>
               
            </div>
            <div className='mb-5'>
              <p className='font-bold mb-1 ml-2'>Correo</p>
                <label className='block relative focus-within:text-gray-600'>
                    <input className='w-full bg-white placeholder:font-italitc border border-slate-400 rounded-md py-2 pl-3 pr-10 focus:outline-none' type="email" name='email' placeholder='Ingresa tu correo'/>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                      <MailIcon className='h-5 w-5 fill-slate-700'/>
                    </span>
                </label>
               
            </div>
            <div className='mb-5'>
                <p className='font-bold mb-1 ml-2'>Contraseña</p>
                <label className='block relative focus-within:text-gray-600'>
                    <input className='w-full bg-white placeholder:font-italitc border border-slate-400 rounded-md py-2 pl-3 pr-10 focus:outline-none' type="password" name='password' placeholder='Ingresa tu contraseña'/>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                      <KeyIcon className='h-5 w-5 fill-slate-700'/>
                    </span>
                </label>
            </div>
            <div className>
                <p className='font-bold mb-1 ml-2'>Confirmar contraseña</p>
                <label className='block relative focus-within:text-gray-600'>
                    <input className='w-full bg-white placeholder:font-italitc border border-slate-400 rounded-md py-2 pl-3 pr-10 focus:outline-none' type="password2" name='password' placeholder='Confirma tu contraseña'/>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                      <KeyIcon className='h-5 w-5 fill-slate-700'/>
                    </span>
                </label>
            </div>

            <div className='flex justify-end my-2 text-sm'>
                  <Link to='/auth/signin' className="sm:mx-2 cursor-pointer hover:text-gray-500">
                    Ya tengo una cuenta
                  </Link>
            </div>

            <div clasName='flex justify-end'>
                <input
                  className='cursor-pointer w-full p-3 mt-2 placeholder-gray-400 rounded-md bg-slate-600 hover:bg-slate-700 text-white'
                type='submit' value='Registrarse'/>
            </div>

        </form>
        </div>
        <Footer/>
        </>
      );
}
 
export default SingUp;