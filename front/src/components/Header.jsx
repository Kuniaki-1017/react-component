import styled from 'styled-components';
import {gvP,gvB,gv,mediaP, mediaB, media } from '../mixin';

const HeaderWrap = styled.header`
    background-color: #1877F2;
    height: 80px;
    line-height: 80px;
    
    ${mediaP(`
    height: ${gvP(80)};
    line-height:  ${gvP(80)};
    font-size:${gvP(36)};
    `)}
    ${mediaB(`
    height: ${gvB(80)};
    line-height:  ${gvB(80)};
    `)}
    ${media(`
    height: ${gv(60)};
    line-height:  ${gv(60)};
    `)}



    .header{ 
        &__in{
            padding: 0 30px;
            ${mediaP(`
            padding:0 ${gvP(30)};
            `)}
            ${mediaB(`
                padding:0 ${gvB(30)};
            `)}
            ${media(`
                padding:0 ${gv(20)};
            `)}
        }

        &__logo{
            font-size: 3.4rem;
            color:#fff;
            font-weight:bold;
            ${mediaP(`
                font-size: 3.4rem;
            `)}
            ${mediaB(`
                font-size:3rem;
            `)}
            ${media(`
                font-size: 2.4rem;
            `)}
        }
    }
`;



const Header = () => {
    return (
        <HeaderWrap className="header">
        <div className="header__in"><a href="#" className="header__logo">Know How</a></div>
        </HeaderWrap>
    )
}

export default Header;


