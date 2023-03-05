import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faHamburger, faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const MenuBar = () => {
    const icon = (i) =>  <FontAwesomeIcon icon={i} />

    return (
        <div className='w-full mt-3 mb-1 relative bottom-0'>
            <ul className='bg-grisOscuro text-slate-100 w-11/12 mx-auto flex justify-around items-center rounded-xl shadow-md'>
                <li>
                    <Link to='/'>
                    <div className='flex flex-col items-center hover:text-slate-300 cursor-pointer'>
                        <span className='mt-4'>{icon(faHome)}</span>
                        <span className=''>Home</span>
                    </div>
                    </Link>
                </li>
                <li className='my-6 cursor-pointer'>
                    <Link to='/dieta'>
                    <span className='rounded-full bg-slate-100 text-black px-5 py-4 mt-0 hover:bg-slate-200'>
                        {icon(faHamburger)}
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <div className='flex flex-col items-center hover:text-slate-300 cursor-pointer'>
                            <span className='mt-4'>{icon(faUser)}</span>
                            <span className=''>Profile</span>
                        </div>
                    </Link>
                    
                </li>

            </ul>
        </div>
    )
}

export default MenuBar;