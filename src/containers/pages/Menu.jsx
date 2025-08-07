import poketbola from '../../assets/img/clipart2316741.png'
import { useNavigate, useLocation} from 'react-router-dom';
function Menu (){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen relative bg-gradient-to-br from-[#cd3737] to-black">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 border-2 border-gray-950">
                <div className='flex flex-col items-center mb-6'>
                    <h1 className="text-3xl font-bold mb-6 text-center">Menu</h1>
                    <img src={poketbola} alt=" pokebola" style={{ width: '70px', height: '70px' }} />

                </div>
                
                <div className='flex flex-col space-y-4'>
                    <a href="Captura" className="bg-gray-300 p-4 rounded-2xl text-center hover:bg-gray-400 block">Captura</a>
                    <a href="Capturados" className="bg-gray-300 p-4 rounded-2xl text-center hover:bg-gray-400 block">Capturados</a>
                    <a href="Listado" className="bg-gray-300 p-4 rounded-2xl text-center hover:bg-gray-400 block">Listado</a>
                </div>
            </div>
        </div>
    )
}
export default Menu;