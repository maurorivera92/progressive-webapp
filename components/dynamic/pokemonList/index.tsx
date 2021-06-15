import PokemonCard from "./pokemonCard";

export default function PokemonList({ entries }) {
    return (
        <div className="list-container">
            {entries.map((entry, index) => (
                <PokemonCard key={`pokemon-${index}`} data={entry} />
            ))}
            <style jsx>{`
                .list-container {
                    display: flex;
                    flex-wrap: wrap;
                }
            `}</style>
        </div>
    );
}
