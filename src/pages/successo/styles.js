import styled from "styled-components"

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400px;

    .sucessOrder {
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: #247A6B;
    }

    button {
        background: #E8833A;
        color: #FFFFFF;
        Height: 40px;
        width: 225px;
        border-radius: 3px;
        cursor: pointer;
    }


`

export const TicketContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 30px auto;

    .title {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
    }

    .content {
        font-family: 'Roboto', sans-serif;
        font-size: 22px;
        font-weight: 400;
        color: #293845;
    }

`