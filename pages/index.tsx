import Link from "next/link";
import PokemonCard from "../components/dynamic/pokemonCard";

const fetch = require("node-fetch");

const Home = function ({ data }) {
    return (
        <>
            {data.pokemon_entries.map((pokemon) => (
                <PokemonCard data={pokemon} />
            ))}
        </>
    );
};

export default Home;
export const getServerSideProps = async () => {
    const data = fetch("https://pokeapi.co/api/v2/pokedex/kanto").then((resp) =>
        resp.json()
    );
    const pokedexData = await data;
    return { props: { data: pokedexData } };
};
