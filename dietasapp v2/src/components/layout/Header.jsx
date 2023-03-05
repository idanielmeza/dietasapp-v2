// import { ScaleIcon, LogoutIcon } from "@heroicons/react/solid";
import {useRef} from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    const navRef = useRef();
    const ulRef = useRef();

    const handleClick = () => {
        navRef.current.classList.toggle('hidden');
        ulRef.current.classList.toggle('h-auto');
    }

    // const [isOpen, setIsOpen] = useState(false);

    return ( 
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-sm dark:bg-gray-800 shadow-sm shadow-slate-900 md:shadow-slate-600 mb-1 md:mb-0">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <p href="https://flowbite.com/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mx-2">DietasApp</span>
                    {/* <ScaleIcon className="h-5 w-5 fill-current text-gray-600" /> */}
                </p>
                <button 
                onClick={handleClick}
                data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div 
                ref={navRef}
                className= 'hidden w-full md:block md:w-auto mr-2' id="mobile-menu">
                    <ul 
                    ref={ulRef}
                    className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium align-middle transition-all ease-out duration-500 md:transition-none">
                        <li>
                            <Link to='/profile' href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Perfil</Link>
                        </li>
                        <li>
                            <Link to='/' href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dieta</Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-2 pr-4 pl-3 text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                {/* <LogoutIcon className="h-5 w-5  text-red-800 md:hidden" /> */}
                                Salir
                            </a>
                            
                        </li>

                        
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;