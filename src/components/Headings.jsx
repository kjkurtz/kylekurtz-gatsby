import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

import { media } from '../components/Breakpoints';

const about = '#F7B733';
const contact = '#4ABDAC';

const SiteTitle = styled.h1`
  margin-top: 40px;
  font-size: 64px;
  font-weight: 300;
  line-height: 1.2;
`;

const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  text-align: center;
`;

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  &:hover {
    h1 {
      transform: translate3d(80px, 0, 0);
      transition: 0.3s all cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`;

const SubHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 40px;
  letter-spacing: 5px;
  text-align: center;
  font-size: 1.17em;
`;

const SiteNav = styled.nav`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    > li {
      margin: 0;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 15px 10px 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  display: block;
  transition: all 0.3s ease;
  ${media.tablet`
    font-size: 16px;
    padding: 15px 20px 18px;
  `}
  &:hover {
    border-bottom: 4px solid ${props => props.underline};
  }
`;

const Main = styled.main`
  max-width: 960px;
  margin: 60px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`;

const MainWrapper = styled.div`
  a {
    color: ${props => props.color};
  }
`;

const Logo = styled.span`
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  background: #FC4A1A;
  color: #111;
  padding: 10px;
  position: relative;
  z-index: 10;
  overflow: hidden;
  font-size: 26px;
  height: 52px;
  width: 60px;
  display: block;
  &:before {
    content: '';
    top: 0;
    left: 0;
    height: 60px;
    width: 156px;
    position: absolute;
    display: block;
    z-index: -1;
    transform: translate3d(${
  (props) => {
    if (props.page === 'about') return '0px';
    if (props.page === 'contact') return '-60px';
    return '60px';
  }
  }, 0, 0);
    background-image: linear-gradient(90deg, ${about} 33.333%, ${contact} 66.667%);
    background-size: 180px 60px;
    transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const Name = styled.h1`
  margin: 0;
  top: 0;
  position: absolute;
  display:none;
  z-index: 5;
  transform: translate3d(-100%, 0, 0);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  font-size: 24px;
  text-decoration: none;
  font-weight: 900;
  line-height: 52px;
  color:#FFF;
  transition: 0.3s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
  ${media.tablet`display: block;`}
`;


export {
  SiteTitle,
  Title,
  SiteHeader,
  SubHeader,
  NavLink,
  SiteNav,
  MainWrapper,
  Main,
  Logo,
  Name,
};