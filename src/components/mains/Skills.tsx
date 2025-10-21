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
const StyledDivSkillsMain = styled.div`
    text-align: left;
    list-style: none;
    padding: 4% 5% 5% 10%;
    font-size: calc(2px + 1vw);
`;
const StyledDivSkills = styled.div`
    margin-bottom: 5%;
    /*margin-left: 5%;*/
    border-left: #00524B 2px solid;
`;
const StyledSkillsP=styled.p`
    font-size: calc(2px + 1.8vw);
    padding: 0 1% 1.5% 1%;
    margin-left: 2%;
`;
const StyledSkillsLi= styled.li`
    padding-bottom: 2%;
    margin-left: 7% ;
    list-style: circle;
`;
export default function Skills() {
    return (
        <StyledMain>
            <title> Skills | Cheyenne's Resume</title>
            <StyledH2>Skills</StyledH2>
            <StyledDivSkillsMain id="skills-main">
                <StyledDivSkills>
                    <StyledSkillsP><strong>Languages </strong></StyledSkillsP>
                    <ul>
                        <StyledSkillsLi>Python</StyledSkillsLi>
                        <StyledSkillsLi>Java</StyledSkillsLi>
                        <StyledSkillsLi>SQL</StyledSkillsLi>
                        <StyledSkillsLi>Assembly</StyledSkillsLi>
                    </ul>
                </StyledDivSkills>
                <StyledDivSkills>
                    <StyledSkillsP><strong>Frameworks/ Libraries</strong></StyledSkillsP>
                    <ul>
                        <StyledSkillsLi>Spring Boot</StyledSkillsLi>
                        <StyledSkillsLi>Rest API</StyledSkillsLi>
                    </ul>
                </StyledDivSkills>
                <StyledDivSkills>
                    <StyledSkillsP><strong>Developer Tools</strong></StyledSkillsP>
                    <ul>
                        <StyledSkillsLi>Git</StyledSkillsLi>
                        <StyledSkillsLi>Docker</StyledSkillsLi>
                        <StyledSkillsLi>AWS</StyledSkillsLi>
                        <StyledSkillsLi>Jira</StyledSkillsLi>
                        <StyledSkillsLi>Figma</StyledSkillsLi>
                        <StyledSkillsLi>Postman</StyledSkillsLi>
                    </ul>
                </StyledDivSkills>
            </StyledDivSkillsMain>
        </StyledMain>
    )
}