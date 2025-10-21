import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from 'react-router';
import Home from "../components/mains/Home.tsx"
import Education from "../components/mains/Education";
import Experience from "../components/mains/Experience";
import Skills from "../components/mains/Skills";
import Projects from "../components/mains/Projects";
import Leadership from "../components/mains/Leadership";
import styled from "styled-components";

import '../../App.css';
const StyledPageWrapper = styled.div`
    width: 80vw;
    background-color: #F5F2EF;
    /*59114D*/
    margin: 0 auto;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export default function Root(){
    return (
        <StyledPageWrapper>
            <Header />
            <StyledContainer>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path={`/experience`} element={<Experience/>}/>
                    <Route path={`/skills`} element={<Skills/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                    <Route path={`/leadership`} element={<Leadership/>}/>
                </Routes>
            </StyledContainer>
            <Footer/>
        </StyledPageWrapper>
    );
}