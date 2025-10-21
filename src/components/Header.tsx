import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 1%;
    text-align: left;
    background-color: #7EA9A1;
    color: #E8F0E5;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const StyledHeaderP = styled.p`
    font-size: calc(2px + 1vw);
    font-family: 'Lato', sans-serif;
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Cheyenne Mowatt</h1>
            <StyledHeaderP>My Online Resume</StyledHeaderP>
        </StyledHeader>
    );
}