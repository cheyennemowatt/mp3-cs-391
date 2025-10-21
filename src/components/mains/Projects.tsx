import styled from 'styled-components';
import {useState} from "react";

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
const StyledCalculatorDiv = styled.div`
    display: grid;
    justify-content: center;
    margin-left: 17% ;
    text-align: center;
    background-color: #F0E6DC;
    border-radius: 20%;
    padding:5%;
    max-height: 25%;
    max-width: 35%;
    border: #C4B4A8 3px solid;
`;
const StyledCalculatorLabel = styled.label`
    padding-bottom: 3%;
    display: block;
    width: 100%;
`;
const StyledButtons = styled.button`
    
    display: flex;
    justify-content: space-around;

    
    background-color: unset;
    color: #2F231F;
    border: #C4B4A8 3px solid;
    font-size: calc(2px + .5vw);
    
`;
const StyledButtonsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 6% 0;
    
    
`;
const StyledDivSkillsMain = styled.div`
    text-align: left;
    list-style: none;
    padding: 4% 5% 5% 10%;
    font-size: calc(2px + 1vw);
    @media screen and (max-width: 750px){
    font-size: calc(2px + 1.9vw);
}
`;
const StyledDivSkills = styled.div`
    margin-bottom: 3%;
    /*margin-left: 5%;*/
    border-left: #00524B 2px solid;
`;
const StyledSpaceLi = styled.li`
    padding-top: 1% ;
    padding-bottom: 1%  ;
    list-style: circle;
`;
const StyledParagraph = styled.p`
    font-size: calc(2px + 1.8vw);
    padding: 0 1% 1.5% 1%;
    margin-left: 2%;
`;
const StyledOutput = styled.h2<{ $color: string }>`
    margin-top: 1%;
    color: ${(props) => props.$color};
    padding: 5% 5% 3% 5% ; /*changes the title position*/
    font-size: calc(2px + 3vw);
    font-family: 'Playfair Display', serif;
`;
const StyledLi = styled.li`
    list-style: circle;
`;


export default function Projects () {
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");

    const [result, setResult] = useState("Answer");
    const [color, setColor] = useState("black");

    function setResultAndColor(value: number) {
        setResult(String(value));
        setColor(value < 0 ? "red" : "black");
    }
    function doPower(one:number, two:number) {
        let result = 1;
        for (let i = 0; i < two; i++) {
            result *= one;
        }
        return result;
    }

    function doClear() {
        setOne("");
        setTwo("");
        setResult("Answer");
        setColor("black");
    }

    return (
        <StyledMain>
            <title> Projects | Cheyenne's Resume</title>
            <StyledH2>Projects</StyledH2>
            <StyledDivSkillsMain>
                <StyledDivSkills>
                    <StyledParagraph><strong>Movie Max</strong></StyledParagraph>
                    <ul>
                        <StyledSpaceLi><strong> Tech Stack:</strong> Python, Flask, SQLAlchemy, Docker, Visual
                            Studio Code
                        </StyledSpaceLi>
                        <StyledLi>Developed a Python/Flask backend with 15 REST API endpoints to manage movie data and user
                            watch
                            lists in a team of 3.
                        </StyledLi>
                        <StyledLi>Implemented 40+ unit tests, logging, and a smoke test to ensure proper app functionality and
                            API interaction.
                        </StyledLi>
                    </ul>
                </StyledDivSkills>
                <StyledDivSkills>
                    <StyledParagraph><strong>Civic Duties</strong></StyledParagraph>
                    <ul>
                        <StyledSpaceLi><strong> Tech Stack:</strong> React, HTML, CSS, MySQL, Visual Studio
                            Code
                        </StyledSpaceLi>
                        <StyledLi>Awarded Girls Who Code stipend to build a website that increases voting and government
                            knowledge in
                            underrepresented communities through the incorporation of a MySQL discussion forum, Cloud
                            Translation API,
                            and searchable politician database.
                        </StyledLi>
                    </ul>
                </StyledDivSkills>
                <StyledDivSkills>
                    <StyledParagraph><strong>Calculator</strong></StyledParagraph>
                    <StyledCalculatorDiv>
                        <div id="input1">
                            <StyledCalculatorLabel htmlFor={one}>First Number: </StyledCalculatorLabel>
                            <input id="one"
                                   value={one}
                                   onChange={(e) => setOne(e.target.value)}
                            />
                        </div>
                        <div id="input2">
                            <StyledCalculatorLabel htmlFor={two}>Second Number: </StyledCalculatorLabel>
                            <input id="two"
                                   value={two}
                                   onChange={(e) => setTwo(e.target.value)}/>
                        </div>
                        <StyledButtonsDiv>
                            <StyledButtons onClick={() => setResultAndColor(Number(one) + Number(two))}>+</StyledButtons>
                            <StyledButtons onClick={() => setResultAndColor(Number(one) - Number(two))}>-</StyledButtons>
                            <StyledButtons onClick={() => setResultAndColor(Number(one) * Number(two))}>*</StyledButtons>
                            <StyledButtons onClick={() => setResultAndColor(Number(one) / Number(two))}>/</StyledButtons>
                            <StyledButtons onClick={() => setResultAndColor(doPower(Number(one), Number(two)))}>^</StyledButtons>
                            <StyledButtons onClick={doClear}>Clear</StyledButtons>
                        </StyledButtonsDiv>
                        <StyledOutput $color={color}> {result}</StyledOutput>
                    </StyledCalculatorDiv>
                </StyledDivSkills>
            </StyledDivSkillsMain>
        </StyledMain>
    )
}