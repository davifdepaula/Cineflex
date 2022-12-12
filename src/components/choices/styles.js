import styled from "styled-components"

export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px auto;

    .option {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


`
export const Circle = styled.div`
   width: 25px;
   height: 25px;
   background: ${props => props.background};
   border: 1px solid ${props => props.color};
   border-radius: 17px; 

`