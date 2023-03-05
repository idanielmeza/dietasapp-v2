import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPersonWalkingWithCane, faRuler, faWeightScale, faPeopleArrows , faScaleBalanced, faDumbbell} from '@fortawesome/free-solid-svg-icons'

const Profile = () => {

    const icon = i => <FontAwesomeIcon icon={i} />


    const handleChange = (e) => {
    }

    return ( 
        <form className='h-fit my-auto w-11/12 mx-auto mt-5 bg-white rounded-md p-3 shadow-xl flex flex-col items-stretch'>
            <h2 className='text-center text-xl font-bold my-5'>Informacion Perosnal</h2>
            <div className='mb-2'>
                <p className='font-bold mb-1 ml-2'>Edad</p>
                <label className='block relative focus-within:text-gray-600'>
                    <input 
                        onChange={handleChange}
                    className='w-full bg-white placeholder:font-italitc border border-slate-400 rounded-md py-2 pl-3 pr-10 focus:outline-none' type="edad" name='number' placeholder='Ingresa tu edad'/>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                        {icon(faPersonWalkingWithCane)}
                    </span>
                </label>
            </div>
            <div className='mb-2'>
                <p className='font-bold mb-1 ml-2'>Estatura</p>
                <label className='block relative focus-within:text-gray-600'>
                    <input 
                        onChange={handleChange}
                    className='w-full bg-white placeholder:font-italitc border border-slate-400 rounded-md py-2 pl-3 pr-10 focus:outline-none' type="edad" name='number' placeholder='Ingresa tu estatura (cm)'/>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                        {icon(faRuler)}
                    </span>
                </label>
            </div>
            <div className='mb-2'>
                <p className='font-bold mb-1 ml-2'>Estatura</p>
                <label className='block relative focus-within:text-gray-600'>
                    <input 
                        onChange={handleChange}
                    className='w-full bg-white placeholder:font-italitc border border-slate-400 rounded-md py-2 pl-3 pr-10 focus:outline-none' type="edad" name='number' placeholder='Ingresa tu peso (kg)'/>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                        {icon(faWeightScale)}
                    </span>
                </label>
            </div>
            <div className='my-4 flex'>
                <p className='inline-flex items-center bg-azul text-white px-2 py-1 rounded-l-md'>
                    <span className='mr-2'>Genero</span>
                    {icon(faPeopleArrows)}
                </p>
                <select className='w-full bg-slate-100 p-2 rounded-r-md border-2'>
                    <option value='m'>Masculino</option>
                    <option value='f'>Femenino</option>
                </select>
            </div>
            <div className='my-4 flex'>
                
                <select className='w-full bg-slate-100 p-2 rounded-l-md border-2'>
                    <option value='m'>Masculino</option>
                    <option value='f'>Femenino</option>
                </select>
                <p className='inline-flex items-center bg-azul text-white px-2 py-1 rounded-r-md'>
                    <span className='mr-2'>Objetivo</span>
                    {icon(faScaleBalanced)}
                </p>
            </div>
            <div className='my-4 flex'>
                <p className='inline-flex items-center bg-azul text-white px-2 py-1 rounded-l-md'>
                    <span className='mr-2'>Actividad</span>
                    {icon(faDumbbell)}
                </p>
                <select className='w-full bg-slate-100 p-2 rounded-r-md border-2'>
                    <option value='m'>Masculino</option>
                    <option value='f'>Femenino</option>
                </select>
            </div>

            <input type='submit' className='bg-azul text-white px-3 py-3 rounded-md w-full my-5 font-bold' value='Guardar'/>

        </form>
     );
}
 
export default Profile;