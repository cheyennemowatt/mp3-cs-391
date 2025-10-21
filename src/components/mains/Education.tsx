import styled from 'styled-components';

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
const StyledLeftLi = styled.li`
    list-style: none;
`;
const StyledSpaceLi = styled.li`
    padding-top: 1% ;
    padding-bottom: 1%  ;
`;
const StyledEducationDiv = styled.div`
    text-align: left;
    padding:5%;
    font-size: calc(2px + 1.3vw);
    list-style: none;
    color: #3F3A38;
`;
const StyledEducation1Div = styled.div`
    padding-top: 10%;
    padding-bottom: 10%;
    padding-right: 1%;
    background-color: #F0E6DC;
    border: #00524B 3px solid;
    margin-bottom: 5%;
    list-style: none;
`;
const StyledEducation2Div = styled.div`
    padding-top: 13%;
    padding-bottom: 13%;
    border: #00524B 3px solid;
    background-color: #F0E6DC;
    list-style: none;
`;
export default function Education() {
    return (
        <StyledMain>
            <title> Education | Cheyenne's Resume</title>
            <StyledH2>Education</StyledH2>
            <StyledEducationDiv>
                <StyledEducation1Div>
                    <ul>
                        <StyledLeftLi><h4>Boston University</h4></StyledLeftLi>
                        <StyledLeftLi><em>Bachelor of Arts in Computer Science, Minor in Innovation and
                            Entrepreneurship </em>
                            <ul>
                                <StyledSpaceLi><strong>Graduation Date:</strong> May 2026</StyledSpaceLi>
                                <li><strong>Relevant Coursework:</strong>Data Structures, Algorithms, Linear Algebra,
                                    Computer Systems, Software Engineering,
                                    Computing Probability, Artificial Intelligence
                                </li>
                            </ul>
                        </StyledLeftLi>
                    </ul>
                </StyledEducation1Div>
                <StyledEducation2Div>
                    <ul>
                        <StyledLeftLi><h4>Pioneer Charter School of Science II</h4>
                            <ul>
                                <StyledSpaceLi><strong>Graduation Date</strong>: June 2022</StyledSpaceLi>
                                <li><strong>Clubs & Activities:</strong> Track, Girls Who Code, Kode with Klossy</li>
                            </ul>
                        </StyledLeftLi>
                    </ul>
                </StyledEducation2Div>
            </StyledEducationDiv>
        </StyledMain>
    )
}