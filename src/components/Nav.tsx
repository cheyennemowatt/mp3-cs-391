import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: #D8C9B8;
    width:30%;
    display:flex;
    justify-content: center;
    @media screen and (max-width: 750px) {
        width:100%;
        max-width: 100vw;
    }
`;
const StyledNavUl = styled.ul`
    padding-left: 0;
    list-style: none;
    width: 100%;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 750px) {
        flex-direction: row;
        justify-content: center;
    }
`;
const StyledNavLi = styled.li`
    margin: 8%;
    padding:8%;
    background-color: #E8F0E5;
    border: #A8BFA5 5px solid;
    @media screen and (max-width: 750px) {
        margin: 0.4vw;
        padding: 0.3vw;
        display: flex;
        justify-content: space-evenly;
        border: #A8BFA5 2px solid;
    }
`;
const StyledNavLink = styled(Link)`
    text-decoration: none;
    color:#3F3A38
`;
export default function Nav(){
    return (
        <StyledNav>
            <StyledNavUl>
                <StyledNavLi><StyledNavLink to ={`/`}>Home</StyledNavLink></StyledNavLi>
                <StyledNavLi><StyledNavLink to ={`/education`}>Education</StyledNavLink></StyledNavLi>
                <StyledNavLi><StyledNavLink to ={`/experience`}>Experience</StyledNavLink></StyledNavLi>
                <StyledNavLi><StyledNavLink to ={`/skills`}>Skills</StyledNavLink></StyledNavLi>
                <StyledNavLi><StyledNavLink to ={`/projects`}>Projects</StyledNavLink></StyledNavLi>
                <StyledNavLi><StyledNavLink to ={`/leadership`}>Leadership</StyledNavLink></StyledNavLi>
            </StyledNavUl>
        </StyledNav>
    );
}