import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faOilCan, faBreadSlice, faEgg, faAngleDown} from '@fortawesome/free-solid-svg-icons'

const Card = () => {

    const icon = (i) =>  <FontAwesomeIcon icon={i} />

    return ( 
        <div className='dark:bg-menta ml-4 text-white px-6 pt-6 pb-2 rounded-xl shadow-md shadow-azul min-w-fit mx-w-fit '>
            <h4 className='font-bold text-xl text-center text-slate-50'>Comida #1</h4>
            <ul className='my-2 flex flex-col items-center'>
                <li className='my-2 inline-flex items-center'>
                    <span className='text-coral'>{icon(faEgg)}</span>
                    <span className='mx-2'>30 gr</span>
                </li>
                <li className='my-2 inline-flex items-center'>
                    <span className='text-coral'>{icon(faBreadSlice)}</span>
                    <span className='mx-2'>30 gr</span>
                </li>
                <li className='my-2 inline-flex items-center'>
                    <span className='text-coral'>{icon(faOilCan)}</span>
                    <span className='mx-2'>30 gr</span>
                </li> 

                <li className='mt-5'>
                    <button className='bg-azul text-white px-4 py-2 rounded-xl shadow-md shadow-azul w-16 inline-flex items-center justify-center'>
                        {icon(faAngleDown)}
                    </button>
                </li> 

            </ul>
        </div>
     );
}
 
export default Card;
