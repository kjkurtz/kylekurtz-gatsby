import React from 'react';

import { Title, MainWrapper } from '../components/Headings';

export default class Index extends React.Component {
  render() {
    return (
      <MainWrapper>
        <Title>Contact</Title>
        <p>
          Email: <a href="mailto:kyle@kurtz.io?Subject=Lets%20Chat" target="_top">kyle@kurtz.io</a>
        </p>
        <p>
          Twitter: <a href="https://twitter.com/kurtzk">@kurtzk</a>
        </p>
      </MainWrapper>
    );
  }
}