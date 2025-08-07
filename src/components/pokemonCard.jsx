function PokemonCard({ pokemonList }){
    if(!pokemonList){
        return <h1>Cargando pokemon...</h1>;
    }
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{pokemonList.name}</h2>
            <img src={pokemonList.sprites.front_default} alt={pokemonList.name} className="w-32 h-32" />
            <p><strong>Especie:</strong> {pokemonList.species.name}</p>
            <p><strong>Altura:</strong> {pokemonList.height} </p>
            <p><strong>Peso:</strong> {pokemonList.weight} </p>
        </div>
    );
}
export default PokemonCard;