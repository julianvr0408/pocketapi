import poketbola from '../../assets/img/clipart2316741.png'
import { useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Captura (){

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [isCaptured, setIsCaptured] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [pokemonData, setPokemonData] = useState({
        name: '',
        species: '',
        image: '',
        altura: '',
        peso: '',
        tipo: ''
    });

    const searchPokemon = ()=>{
        // Reset error state
        setErrorMessage('');

        const capturedPokemon = JSON.parse(localStorage.getItem('capturedPokemon') || '[]');
        const isAlreadyCaptured = capturedPokemon.some(pokemon => pokemon.name.toLowerCase() === pokemonName.toLowerCase());
        
        if (isAlreadyCaptured) {
            const capturedPokemonData = capturedPokemon.find(pokemon => pokemon.name.toLowerCase() === pokemonName.toLowerCase());
            setPokemonData(capturedPokemonData);
            setPokemonChosen(true);
            setIsCaptured(true);
            return;
        }

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
            console.log(response.data);
            setPokemonData({
                name:pokemonName, 
                species: response.data.species.name, 
                image: response.data.sprites.front_default, 
                altura:response.data.height, 
                peso: response.data.weight, 
                tipo: response.data.types[0].type.name});
            setPokemonChosen(true);
            setIsCaptured(false);
        }).catch((error) => {
            console.error('Pokémon no encontrado:', error);
            setErrorMessage('Nombre incorrecto. Verifica e intenta de nuevo.');
            setPokemonChosen(false);
        });
    };

    const capturePokemon = () => {
        const capturedPokemon = JSON.parse(localStorage.getItem('capturedPokemon') || '[]');
        const isAlreadyCaptured = capturedPokemon.some(pokemon => pokemon.name.toLowerCase() === pokemonData.name.toLowerCase());
        
        if (!isAlreadyCaptured) {
            const newCapturedPokemon = [...capturedPokemon, {
                ...pokemonData,
                status: 'capturado',  // Add default status
                capturedAt: new Date().toISOString()
            }];
            
            localStorage.setItem('capturedPokemon', JSON.stringify(newCapturedPokemon));
            setIsCaptured(true);
        }
    };

    useEffect(() => {
        if (pokemonData.name) {
            const capturedPokemon = JSON.parse(localStorage.getItem('capturedPokemon') || '[]');
            const isAlreadyCaptured = capturedPokemon.some(pokemon => pokemon.name.toLowerCase() === pokemonData.name.toLowerCase());
            setIsCaptured(isAlreadyCaptured);
        }
    }, [pokemonData.name]);
    return(
        <div className="flex flex-col items-center justify-center min-h-screen relative bg-gradient-to-br from-[#cd3737] to-black">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 border-2 border-gray-950 mt-16">
                <div className='flex flex-col items-center mb-6'>
                    <h1 className="text-3xl font-bold mb-6 text-center">Captura</h1>
                    <img src={poketbola} alt=" pokebola" style={{ width: '50px', height: '50px' }} />
                </div>
                <div className='flex flex-col items-center mb-6'>
                    <input type="text"  className='border-2 border-gray-300 p-2 rounded-lg w-full mb-4' placeholder='Buscar el pokémon...'
                     onChange={event=>{setPokemonName(event.target.value)}}/>
                    <button onClick={searchPokemon} className='bg-red-800 text-white p-2 rounded-lg '>Buscar</button>
                    {errorMessage && (
                        <p className='text-red-600 mt-2 text-sm'>{errorMessage}</p>
                    )}
                </div>
                <div>
                    {pokemonChosen && (
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold mb-4'>{pokemonData.name}</h2>
                            <img src={pokemonData.image} alt={pokemonData.name} className='mb-4 mx-auto block w-60 h-60'  />
                            <p><strong>Especie:</strong> {pokemonData.species}</p>
                            <p><strong>Altura:</strong> {pokemonData.altura} </p>
                            <p><strong>Peso:</strong> {pokemonData.peso} </p>
                            <p><strong>Tipo:</strong> {pokemonData.tipo}</p>
                            
                            <div className='mt-6'>
                                {isCaptured ? (
                                    <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded'>
                                        <strong>Pokémon capturado ✅</strong>
                                        <br />
                                        <small className='text-green-600'>Este Pokémon ya está en tu colección</small>
                                    </div>
                                ) : (
                                    <div className='text-center'>
                                        <p className='text-gray-600 mb-3'>Pokémon pendiente de captura</p>
                                        <button 
                                            onClick={capturePokemon}
                                            className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors'
                                        >
                                            Agregar a lista de captura
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )} 
                </div>
                
            </div>
            <button className='mt-6 mb-10'>
                <a href="Menu" className='bg-gray-400 hover:bg-red-800 text-black p-2 rounded-lg mb-20'>Volver al Menú</a>
            </button>
            
        </div>
        
    )
}
export default Captura;