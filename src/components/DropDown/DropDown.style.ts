import { styled, keyframes } from 'styled-components';
import { typo } from '../../styles/typo';

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(-20%);
}
100% {
  opacity: 1;
  transform: translateY(0%);
}
`;

export const Container = styled.div<{
  width: string;
  $top: string;
}>`
  ${typo.h3};
  position: absolute;
  width: ${(props) => props.width};
  max-height: 200px;
  padding: 8px 0;
  top: ${(props) => props.$top};
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  overflow-y: scroll;
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 20;
`;

export const Text = styled.div<{ $color: boolean }>`
  padding: 5px 0;
  color: ${({ theme, $color }) =>
    $color ? theme.colors.mainBlack : theme.colors.reportRed};
  cursor: pointer;

  &:hover {
    background: rgba(217, 217, 217, 0.3);
  }
`;
