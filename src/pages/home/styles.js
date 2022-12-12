import styled from "styled-components";

export const Container = styled.div`        

    display: flex;
    flex-direction: column;
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
    margin: 0 auto;
    cursor: pointer;

    .moviesGrid {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
    }

    img {
        width: 150px;
    }
`