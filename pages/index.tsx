import PokemonList from "../components/dynamic/pokemonList/";
import { memoizedApi } from "../utils/cacheApi";

const fetch = require("node-fetch");

const Home = function ({ data }) {
    return (
        <>
            <PokemonList entries={data.pokemon_entries} />
        </>
    );
};

export default Home;
export const getServerSideProps = async () => {
    if (!memoizedApi.has(["pokemonKanto"])) {
        memoizedApi("pokemonKanto", `https://pokeapi.co/api/v2/pokedex/kanto`);
    }
    const dataPokemon = memoizedApi.get(["pokemonKanto"]);
    const pokedexData = await dataPokemon;
    return { props: { data: pokedexData } };
};
