import Heading5 from 'library/typography/Heading5';
import React from 'react';

import * as S from './DefaultHeader.styled';

const DefaultHeader = () => (
    <S.DefaultHeaderContainer>
        <Heading5>Gatsby starter</Heading5>
    </S.DefaultHeaderContainer>
);

export default DefaultHeader;
