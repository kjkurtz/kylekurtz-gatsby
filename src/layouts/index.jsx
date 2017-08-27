import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';
import { rhythm } from '../utils/typography';

import { SiteHeader, SiteNav, NavLink, SubHeader, Logo, Name, Main } from '../components/Headings';
import {
  SocialLinks,
  SocialLink,
} from '../components/Footer';

const FooterLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/kurtzk',
    color: '#00aced',
  }, {
    name: 'Github',
    link: 'https://github.com/kjkurtz',
    color: '#4183c4',
  },
  {
    name: 'LinkedIn',
    link:'https://www.linkedin.com/in/kyle-kurtz-8b844715',
    color: '#0077B5'
  }
];

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Kyle Kurtz"
        />

        <SiteHeader>
          <Link to="/">
            <Logo page={this.props.location.pathname.replace('/', '')}>
              KK
            </Logo>
            <Name>Kyle Kurtz</Name>
          </Link>
          <SiteNav>
            <ul>
              <li>
                <NavLink underline="#16a085" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink underline="#2980b9" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </SiteNav>
        </SiteHeader>

        <Main>
          {this.props.children()}
        </Main>

        <footer className="footer">
          <SubHeader>Where to find me</SubHeader>
          <SocialLinks>
            {FooterLinks.map(link => (
              <li key={link.name}>
                <SocialLink
                  target="_blank"
                  rel="nofollow"
                  color={link.color}
                  href={link.link}
                >
                  {link.name}
                </SocialLink>
              </li>
            ))}
          </SocialLinks>
        </footer>
      </div>
    );
  }
}