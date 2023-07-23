import styled from 'styled-components'

export const PokemonDetailPageStyle = styled.div`
    /* border: 2px solid red; */
    background-color: var(--dark-background-color);
    position: relative;
    height: 100vh;

`
export const PokemonDetailTitle = styled.h1`
    padding: 10px;
    color: var(--light-text-color);
    margin-left: 15px;
`
export const PokemonDetailContainer = styled.div`
    /* border: 2px solid blue; */
    height: 663px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    z-index: 1;
    border-radius: 15px;

`

export const FrontBackImageContainer = styled.div`
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    max-width: 282px;

`
export const ImageContainer = styled.div`
    /* border: 2px solid red; */
    width: 282px;
    height: 282px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-background-color);
    img {
        height: 200px;
        width: 200px;
    }

`
export const BaseStatsContainer = styled.div`
    /* border: 2px solid black; */
    width: 340px;
    border-radius: 12px;
    height: 613px;
    background-color: var(--light-background-color);
    padding: 10px;
    h4 {
        padding-left: 20px;
        padding-top: 5px;
        border-top: 1px solid lightgray;
    }
    span {
        margin-left: 30px;
    }
    
`

export const ThirdContainer = styled.div`
    /* border: 2px solid aliceblue; */
    height: 613px;
    display: flex;
    flex-direction: column;

`
export const NameIdTypesContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 2px solid orange; */
    padding: 10px;
    color: var(--light-text-color);


`

export const MovesContainer = styled.div`
    /* border: 2px solid gray; */
    border-radius: 8px;
    width: 292px;
    height: 100%;
    padding: 10px;
    background-color: var(--light-background-color);
    z-index: 1;
    span {
        font-size: 12px;
        width: 132px;
        height: 37px;
        border-radius: 15px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 10px;
        background-color: #ECECEC;
        border: 1px dashed var(--dark-background-color);
    }
`

export const BackgroundPokeballOne = styled.img`
    position: absolute;
    right: 0;
    top: 0;
`
export const BackgroundPokeballTwo = styled.img`
    position: absolute;
    top: 16%;
    right: 35%;
    z-index: 0;
`

export const PokemonImage = styled.img`
    z-index: 1;
    align-self: start;
    width: 400px;
    height: 400px;
    
`

export const EachBaseStat = styled.div`
    /* border-bottom: 1px solid lightgray; */
    border-top: 1px solid lightgray;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    padding: 10px;
    margin-top: 5px;
    display: grid;

`

export const PowerBar = styled.div`
    height: 100%;
    border-radius: 15px;
`
export const PowerBarContainer = styled.div`
    width: 160px;
    /* border: 2px solid blueviolet; */
    height: 15px;
    border-radius: 15px;

`