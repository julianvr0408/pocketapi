import poketbola from '../../assets/img/clipart2316741.png'
import { useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import PokemonCard from '../../components/pokemonCard';
import axios from 'axios';


function Listado(){
    const [pokemonList, setPokemonList] = useState([]);
    
    const fetchPokemons = async (id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemonList((prevPokemonList) => [...prevPokemonList, data]);

        } catch(error) {
            console.error('Error fetching Pokémon:', error);
        }
    }

    const fetchAllPokemons = async () => {
        setPokemonList([]); // Clear list before fetching
        
        for (let i = 1; i <= 20; i++) {
            await fetchPokemons(i);
        }
    }
    useEffect(()=>{
        fetchAllPokemons();
    },[]);

    useEffect(() => {
        console.log('Pokemon List:', pokemonList);
    }, [pokemonList]);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen relative bg-gradient-to-br from-[#cd3737] to-black py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-w-4xl border-2 border-gray-950">
                <div className='flex flex-col items-center mb-6'>
                    <h1 className="text-3xl font-bold mb-6 text-center">Lista de pokemon</h1>
                    <img src={poketbola} alt=" pokebola" style={{ width: '50px', height: '50px' }} />
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pokemonList.map((pokemon) => (
                            <PokemonCard key={pokemon.id} pokemonList={pokemon} />
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
export default Listado;