import styled from "styled-components"

export const SeatsContainer = styled.div`

    .seatsSelector {
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
    }

    form, label {
        display: flex;
        flex-direction: column;
    }

    form {
        margin: 40px auto;
        gap: 20px;
    }

    input {
        height: 50px;
        width: 300px;
    }

    button {
        background: #E8833A;
        color: #FFFFFF;
        Height: 40px;
        width: 300px;
        border-radius: 3px;
        cursor: pointer;
    }

    .choices {
        display: flex;
    }

`

export const SeatsChoices = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 10px;

    button {
        display: flex;
        border: 1px solid #808F9D;
        border-radius: 12px;
        height: 25px;
        width: 26px;
        justify-content: center;
        align-items: center;
        cursor: pointer;        
    }
`

export const Card = styled.div`
    button {
        background-color: ${props => props.isAvailable? 
            (props.isSelect? ("#1AAE9E"): "#C3CFD9")
            :("#FBE192") } ;
        
        border: 1px solid ${props => props.isAvailable? 
            (props.isSelect? ("#0E7D71"): "#808F9D")
            :("#F7C52B") };
        
    }
`

