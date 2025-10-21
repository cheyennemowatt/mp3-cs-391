import styled from 'styled-components';
import {Link} from "react-router";

const StyledMain = styled.main`
    min-height: 100vh;
    width:70%;
    @media screen and (max-width: 750px){
        min-height: 100vh;
    width:100%;
}
`;
const StyledH2 = styled.h2`
    padding: 5% 5% 3% 5% ; /*changes the title position*/
    font-size: calc(2px + 3.5vw);
    color: #2F231F;
    font-family: 'Playfair Display', serif;
    @media screen and (max-width: 750px) {
        font-size: calc(2px + 8vw);
    }
`;
const StyledDivIntroduction = styled.div`
    display: flex;
    align-items: center;   /* vertically center image and text */
    padding: 3%;          /* space inside the section */
    /*font-size: calc(2px + 2vw);*/
    color: #3B2F2A;
    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;
const StyledImg = styled.img`
    display: block;        /* removes inline spacing issues */
    max-width: 30vw;       /* limit width */
    max-height: 40vh;      /* limit height */
    border-radius: 30px;   /* subtle curves */
    margin: 5%;
`;
const StyledLink = styled(Link)`
    color: #00524B;
`;
const StyledPIntroduction = styled.p`
    padding-top: 0;
    text-align: left;
    font-size: calc(2px + 1.5vw);
`;
const StyledP = styled.p`
    font-size: calc(2px + 1.5vw);
    padding: 3%;
`;

export default function Home(){
    return (
        <StyledMain>
            <title> Home | Cheyenne's Resume</title>
            <StyledH2>Home</StyledH2>
            <StyledDivIntroduction>
                <StyledImg src="src/headshot.jpeg" alt="Cheyenne"/>
                <StyledPIntroduction>Hi, I’m Cheyenne, a full-time student at Boston University majoring in Computer Science with a minor
                    in Innovation and Entrepreneurship.
                    I’m passionate about using technology to make a meaningful impact. After college, I hope to build a
                    career that combines technology and creativity, while advocating for diversity in the tech
                    space.</StyledPIntroduction>
            </StyledDivIntroduction>
            <StyledP>Welcome to my website! Here, you will not only be able to find my <StyledLink to ={`/education`}>Education</StyledLink> and <StyledLink to ={`/experience`}>Employment</StyledLink> history, but other information about me that might of
                use to you. </StyledP>
        </StyledMain>
    )
}