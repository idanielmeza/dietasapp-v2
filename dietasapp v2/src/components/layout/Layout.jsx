import Header from "./Header";
import Footer from "./Footer";
import MenuBar from "./MenuBar";


const Layout = ({children}) => {
    return ( 
        <>
            {children}
            <MenuBar/>
        </>

     );
}
 
export default Layout;