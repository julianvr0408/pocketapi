import poketbola from '../../assets/img/clipart2316741.png'
import { useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Capturados(){
    const [capturedPokemon, setCapturedPokemon] = useState([]);
    useEffect(() => {
        const loadCapturedPokemon = () => {
            try {
                const saved = localStorage.getItem('capturedPokemon');
                const pokemonList = saved ? JSON.parse(saved) : [];
                setCapturedPokemon(pokemonList);
            } catch (error) {
                console.error('Error loading captured pokemon:', error);
                setCapturedPokemon([]);
            };
        };
        loadCapturedPokemon();
    }, []);

    const togglePokemonStatus = (pokemonName) => {
        const updatedList = capturedPokemon.map(pokemon => {
            if (pokemon.name.toLowerCase() === pokemonName.toLowerCase()) {
                return {
                    ...pokemon,
                    status: pokemon.status === 'pendiente' ? 'capturado' : 'pendiente'
                };
            }
            return pokemon;
        });
        
        setCapturedPokemon(updatedList);
        localStorage.setItem('capturedPokemon', JSON.stringify(updatedList));
    };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen relative bg-gradient-to-br from-[#cd3737] to-black py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-w-4xl border-2 border-gray-950">
                <div className='flex flex-col items-center mb-6'>
                    <h1 className="text-3xl font-bold mb-6 text-center">Pokémon Capturados</h1>
                    <img src={poketbola} alt=" pokebola" style={{ width: '50px', height: '50px' }} />
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {capturedPokemon.map((pokemon, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold mb-2 capitalize">{pokemon.name}</h3>
                                        <img 
                                            src={pokemon.image} 
                                            alt={pokemon.name} 
                                            className="mx-auto mb-3 w-32 h-32"
                                        />
                                        <div className="text-sm text-gray-600 space-y-1">
                                            <p><strong>Especie:</strong> {pokemon.species}</p>
                                            <p><strong>Altura:</strong> {pokemon.altura} </p>
                                            <p><strong>Peso:</strong> {pokemon.peso} </p>
                                            <p><strong>Tipo:</strong> {pokemon.tipo}</p>
                                        </div>
                                        
                                        <button
                                            onClick={() => togglePokemonStatus(pokemon.name)}
                                            className={'mt-3 px-4 py-2 rounded text-sm font-medium'}
                                        >
                                            {(pokemon.status || 'capturado') === 'capturado' ? 'Capturado' : 'Pendiente'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
            
            <button className='mt-6 mb-10'>
                <a href="Menu" className='bg-gray-400 hover:bg-red-800 text-black p-2 rounded-lg mb-20'>Volver al Menú</a>
            </button>
        </div>
    )
}
export default Capturados;