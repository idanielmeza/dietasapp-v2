import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const CardAdd = () => {

    const icon = (i) =>  <FontAwesomeIcon icon={i} />

    return ( 
        <div className='dark:bg-menta ml-4 text-white px-6 pt-6 pb-2 rounded-xl shadow-md shadow-azul min-w-fit mx-w-fit flex items-center justify-center'>
            <span className='inline-flex items-center justify-center p-8 bg-azul shadow-md rounded-full cursor-pointer text-2xl hover:shadow-xl '>
              {icon( faPlus )}
            </span>
        </div>
     );
}
 
export default CardAdd;
