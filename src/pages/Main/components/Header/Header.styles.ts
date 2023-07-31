import { styled } from 'styled-components';
import { mixins } from '../../../../styles/mixins';
import { typo } from '../../../../styles/typo';

export const Header = styled.div`
  ${mixins.flexBox('space-between', 'center')}
  position: relative;
  padding-bottom: 20px;
  z-index: 10;
`;

export const ProfileContainer = styled.div`
  margin-right: 10px;
  ${mixins.flexBox('', 'center')}
`;

export const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ProfileNameBox = styled.div`
  ${mixins.columnFlexBox('', 'center')}
  margin-left: 11px;
`;

export const ProfileNickName = styled.h2`
  ${mixins.columnFlexBox('', 'center')}
  ${typo.h2};
  height: 22px;
  font-style: normal;
  text-align: center;
  cursor: pointer;
`;

export const profileCategory = styled.p`
  color: ${({ theme }) => theme.colors.mainGray};
  ${typo.normal}
  margin-top: 3px;
`;

export const MoreDetailBox = styled.div`
  ${mixins.flexBox('flex-end')}
  cursor: pointer;
`;

export const OutsideModal = styled.div`
  position: absolute;
  height: 100vh;
  inset: 0;
  z-index: 1;
`;
