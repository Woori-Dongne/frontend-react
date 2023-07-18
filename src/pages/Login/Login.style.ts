import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
// padding: 348px 55px 72px 55px;
export const Container = styled.div`
  height: 81vh;
  padding-top: 10vh;
  gap: 20vh;

  ${mixins.columnFlexBox('center', 'center')}
`;

export const LogoContainer = styled.div`
  ${mixins.columnFlexBox()}
`;

export const LogoIcon = styled.img`
  width: 260px;
`;

export const LogoText = styled.img`
  width: 130px;
`;

export const ButtonContainer = styled.div`
  ${mixins.flexBox('center', '')}
`;
