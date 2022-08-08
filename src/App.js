import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import PokemonDetails from "./components/PokemonDetails";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-contaner">
      <h1>Pokemon Web App</h1>

      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats, index) => (
            <Card
              image={pokemonStats.sprites.other.dream_world.front_default}
              id={pokemonStats.id}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
