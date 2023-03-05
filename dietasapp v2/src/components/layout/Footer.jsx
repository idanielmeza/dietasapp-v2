const Footer = () => {
    return ( 
        <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-end md:p-6 dark:bg-gray-800 rounded-t-sm">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://github.com/idanielmeza" className="hover:underline">LedezmaDev</a>. All Rights Reserved.
            </span>
        </footer>
     );
}
 
export default Footer;