import styled from "styled-components";

export const Container = styled.div`     
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    gap: 10px;  

    .movieSelection {
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
    }

`
export const MoviesContainer = styled.div`
    cursor: pointer;

    .moviesGrid {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
    }

    @media (min-width: 1000px and max-width: 1150px){
        .moviesGrid{
            justify-content: flex-start;
            align-items: center;
            margin-left: 35px; 
        }
    }

    @media (min-width: 1150px){
        .moviesGrid{
            justify-content: flex-start;
            align-items: center;
            margin: auto 30px;
        }
    }

    img {
        width: 150px;
    }
`