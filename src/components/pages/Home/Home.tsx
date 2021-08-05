import React from 'react';

import Body1 from 'library/typography/Body1';
import Heading5 from 'library/typography/Heading5';
import * as S from './Home.styled';

const Home: React.FC = () => (
    <S.HomeContainer>
        <Heading5>GATSBY STARTER</Heading5>
        <Body1>Typescript, ESlint, Prettier, Styled-components and some basic components</Body1>
    </S.HomeContainer>
);

export default Home;