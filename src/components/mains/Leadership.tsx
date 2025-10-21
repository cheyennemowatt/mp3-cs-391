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
const StyledSpaceLi = styled.li`
    padding-top: 1% ;
    padding-bottom: 1%  ;
`;
const StyledParagraph = styled.p`
    font-size: calc(2px + 1.8vw);
    padding: 0 1% 1.5% 1%;
    margin-left: 2%;
`;
const StyledLi = styled.li`
    padding-bottom: 5%;
    margin-left: 2% ;
    list-style: circle;
`;

export default function Leadership() {
    return (
        <StyledMain>
            <title> Leadership | Cheyenne's Resume</title>
            <StyledH2>Leadership</StyledH2>
            <StyledDivSkillsMain>
                <StyledDivSkills>
                    <StyledParagraph><strong>Management Leadership for Tomorrow</strong></StyledParagraph>
                    <ul>
                        <StyledLi>
                            <StyledSpaceLi><strong> Position:</strong> Career Preparation Fellow</StyledSpaceLi>
                            <StyledSpaceLi><strong>Date Joined:</strong> February 2024</StyledSpaceLi>
                            <li>Accepted into a selective 18-month professional development program for high-achieving
                                diverse talent.
                            </li>
                            <li>Complete business case studies and assignments to grow leadership and technical skills.</li>
                        </StyledLi>
                    </ul>
                </StyledDivSkills>
                <StyledDivSkills>
                    <StyledParagraph><strong>Boston University FORGE Design Studios</strong></StyledParagraph>
                    <ul>
                        <StyledLi>
                                <StyledSpaceLi><strong> Position:</strong> Events Coordinator</StyledSpaceLi>
                                <StyledSpaceLi><strong>Date Joined:</strong> January 2024</StyledSpaceLi>
                                <li>Orchestrate and lead UI/UX hackathons, workshops, and networking events biweekly.</li>
                        </StyledLi>
                    </ul>
                </StyledDivSkills>
                <StyledDivSkills>
                    <StyledParagraph><strong>Boston University Allocations Board</strong></StyledParagraph>
                    <ul>
                        <StyledLi>
                            <StyledSpaceLi><strong>Positon:</strong> Director of Marketing</StyledSpaceLi>
                            <StyledSpaceLi><strong>Date Joined:</strong> January 2024</StyledSpaceLi>
                            <li>Evaluate funding proposals within budget constraints for all 450 organizations at Boston
                                University.
                            </li>
                            <li>Foster positive relationships between the Allocation Board and student organizations as an
                                advisor to 40
                                organizations.
                            </li>
                        </StyledLi>
                    </ul>
                </StyledDivSkills>
            </StyledDivSkillsMain>
        </StyledMain>
    )
}