import Card from './Card';
import CardAdd from './CardAdd';

const Dieta = () => {

    return ( 
        <div className='h-fit my-auto w-11/12 mx-auto mt-5 bg-white rounded-xl shadow-xl flex flex-col items-stretch min-h-fit'>
            <h3 className='mt-5 text-center font-bold text-2xl text-azul'>Comidas</h3>
            <div className='px-1 py-4 sm:p-10 relative'>                
                <div className='flex overflow-x-auto mx-1 py-3'>
                    <Card/>
                    <Card/>
                    <CardAdd/>
                    {/* <Card/>
                    <Card/> */}
                </div>

            </div>
        </div>
     );
}
 
export default Dieta;