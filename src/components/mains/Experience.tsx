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
const StyledExperienceDiv = styled.div`
    text-align: left;
    padding:5%;
    font-size: calc(2px + 1.3vw);
    list-style: none;
`;
const StyledExperience1Div = styled.div`
    padding-top: 10%;
    padding-bottom: 10%;
    padding-right: 1%;
    background-color: #F0E6DC;
    border: #00524B 3px solid;
    margin-bottom: 5%;
    list-style: none;
`;
const StyledExperience2Div = styled.div`
    padding-top: 13%;
    padding-bottom: 13%;
    border: #00524B 3px solid;
    background-color: #F0E6DC;
    list-style: none;
`;
const StyledLeftLi = styled.li`
    list-style: none;
`;
const StyledSpaceLi = styled.li`
    padding-top: 1% ;
    padding-bottom: 1%  ;
`;
export default function Experience() {
    return (
        <StyledMain>
            <title> Experience | Cheyenne's Resume</title>
            <StyledH2>Experience</StyledH2>
            <StyledExperienceDiv>
                <StyledExperience1Div>
                    <ul>
                        <StyledLeftLi><h4>Software Engineering Intern (June 2025- August 2025)</h4></StyledLeftLi>
                        <StyledLeftLi><em>Discover Financial Services </em>
                            <ul>
                                <StyledSpaceLi>Researched, designed, and implemented a Spring Boot
                                    microservice using the Saga System Design Pattern and
                                    17+ REST API endpoints to support 10M+ card provisioning API requests per year.
                                </StyledSpaceLi>
                            </ul>
                        </StyledLeftLi>
                    </ul>
                </StyledExperience1Div>
                <StyledExperience2Div>
                    <ul>
                        <StyledLeftLi><h4>AI Engineer and Data Science Intern (January 2025- May 2025)</h4>
                            <StyledLeftLi><em>Commonwealth of Massachusetts: Department of Revenue</em>
                                <ul>
                                    <StyledSpaceLi>Designed and deployed a full-stack AI chatbot on AWS
                                        (Bedrock, Lambda, DynamoDB) for the Comets
                                        HD child support application, providing 24/7 automated support.
                                    </StyledSpaceLi>
                                </ul>
                            </StyledLeftLi>
                        </StyledLeftLi>
                    </ul>
                </StyledExperience2Div>
            </StyledExperienceDiv>
        </StyledMain>
)
}