import { useState } from "react";
import { InView } from "react-intersection-observer";
import { memoizedApi } from "../../../utils/cacheApi";
const PokemonCard = (props) => {
    const { data } = props;
    const [pokemon, setData] = useState();
    const loadPokemon = async (data) => {
        if (!memoizedApi.has(["pokemon" + data.pokemon_species.name])) {
            memoizedApi(
                "pokemon" + data.pokemon_species.name,
                `https://pokeapi.co/api/v2/pokemon/${data.pokemon_species.name}`
            );
        }
        const dataPokemon = memoizedApi.get([
            "pokemon" + data.pokemon_species.name,
        ]);
        const response = await dataPokemon;
        setData(response);
    };
    return (
        <div className={`list-item ${!pokemon ? " loading" : ""}`}>
            <InView
                as="div"
                className={`pokemon-item`}
                triggerOnce={true}
                onChange={(change) => {
                    if (change) {
                        loadPokemon(data);
                    }
                }}
            >
                <h3>{pokemon?.name}</h3>
                <img src={pokemon?.sprites?.front_default} />
            </InView>
            <style jsx>
                {`
                    .list-item {
                        text-align: center;
                        height: 200px;
                        background: #e1e1e1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: solid 3px #fff;
                        padding: 10px;
                        flex: 0 0 auto;
                        width: 33.333333%;
                        box-sizing: border-box;
                        transition: all 500ms ease-in-out;
                    }
                    @media screen and (max-width: 991px) {
                        .list-item {
                            width: 50%;
                        }
                    }
                    @media screen and (max-width: 600px) {
                        .list-item {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default PokemonCard;
