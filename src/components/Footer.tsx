import styled from 'styled-components';
import {Link} from "react-router";
const StyledFooterP = styled.footer`
    background-color: #7EA9A1;
    color: #E8F0E5;
    font-size: calc(2px + 1.5vw);
`;
const StyledLink = styled(Link)`
    color: #00524B;
`;
export default function Footer() {
    return (
        <StyledFooterP> All Rights Reserved by Cheyenne Mowatt <StyledLink to={''}>Credits</StyledLink> &#169;</StyledFooterP>
    );
}