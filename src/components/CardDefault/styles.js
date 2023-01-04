import styled from "@emotion/styled";
export const Card = styled.div`
    display: grid;
    grid-template-areas:
        "img surname"
        "img email";
        grid-template-columns: 5rem 12rem;
        grid-template-rows: 2.5rem 2rem;
        padding-top: 10px;
        align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: fit-content;
    grid-area: img;

`;
export const Name = styled.p`
    grid-area: surname;
    font-weight: bold;
    text-align: center
`;
export const Email = styled.p`
    grid-area: email;
    font-size: 0.8rem;
    padding:0;
    margin:0;
    text-align: center
`;
