import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BackgroundPokeballOne,
  BackgroundPokeballTwo,
  BaseStatsContainer,
  EachBaseStat,
  FrontBackImageContainer,
  ImageContainer,
  MovesContainer,
  NameIdTypesContainer,
  PokemonDetailContainer,
  PokemonDetailPageStyle,
  PokemonDetailTitle,
  PokemonImage,
  PowerBar,
  PowerBarContainer,
  ThirdContainer,
} from "./pokemonDetailPageStyle";
import { TypesContainer } from "../../components/PokemonCard/pokemonCardStyle";
import pokeballLogo from "../../assets/svgs/pngwing-2.png";
import addLeadingZero from "../../utils/addLeadingZero";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import getTypeBackground from "../../utils/typeBackgroundColor";
import getLogo from "../../utils/typeLogo";
import getCardBackground from "../../utils/cardBackground";
import Header from "../../components/Header/Header";
import getPowerBar from "../../utils/getPowerBar";
import getStatName from "../../utils/getStatName";

export default function PokemonDetailPage() {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const params = useParams();

  const getPokemonDetail = async (id) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setPokemonDetail([res.data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPokemonDetail(params.id);
  }, []);

  const detailCard = pokemonDetail.map((detail) => {
    return (
      <PokemonDetailContainer
        key={detail.name}
        style={{
          backgroundColor: getCardBackground(detail.types[0].type.name),
        }}
      >
        <FrontBackImageContainer>
          <ImageContainer>
            <img src={detail.sprites.front_default} />
          </ImageContainer>
          <ImageContainer>
            <img src={detail.sprites.back_default} />
          </ImageContainer>
        </FrontBackImageContainer>
        <BaseStatsContainer>
          <h1>Base stats:</h1>
          {detail.stats.map((stat) => {
            return (
              <EachBaseStat key={stat.stat.name}>
                <p>{getStatName(stat.stat.name)}</p>
                <p>{stat.base_stat}</p>
                <PowerBarContainer>
                  <PowerBar style={getPowerBar(stat.base_stat)}></PowerBar>
                </PowerBarContainer>
              </EachBaseStat>
            );
          })}
          <h4>
            Total:{" "}
            <span>
              {detail.stats
                .map((eachStat) => eachStat.base_stat)
                .reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                )}
            </span>
          </h4>
        </BaseStatsContainer>
        <ThirdContainer>
          <NameIdTypesContainer>
            <h3>#{addLeadingZero(detail.id)}</h3>
            <h1>{capitalizeFirstLetter(detail.name)}</h1>
            <TypesContainer>
              {detail.types.map((type) => {
                return (
                  <span
                    style={{
                      backgroundColor: getTypeBackground(type.type.name),
                    }}
                    key={type.type.name}
                  >
                    <p>{capitalizeFirstLetter(type.type.name)}</p>
                    <img src={getLogo(type.type.name)} />
                  </span>
                );
              })}
            </TypesContainer>
          </NameIdTypesContainer>
          <MovesContainer>
            <h1>Moves:</h1>
            <span>{detail.moves[0].move.name}</span>
            <span>{detail.moves[1].move.name}</span>
            <span>{detail.moves[2].move.name}</span>
            <span>{detail.moves[3].move.name}</span>
          </MovesContainer>
        </ThirdContainer>
        <PokemonImage
          src={detail.sprites.other["official-artwork"].front_default}
        />
        <BackgroundPokeballOne src={pokeballLogo} />
      </PokemonDetailContainer>
    );
  });

  return (
    <PokemonDetailPageStyle>
      <Header currentPage='details' pokemonId={params.id}  />
      <PokemonDetailTitle> Detalhes</PokemonDetailTitle>
      {detailCard}

      <BackgroundPokeballTwo src={pokeballLogo} />
    </PokemonDetailPageStyle>
  );
}
