import { typo } from '../../../../styles/typo';
import { styled } from 'styled-components';

export const PostFeedContainer = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
`;

export const FeedImage = styled.div`
  margin: 22px 0;
  background-color: ${({ theme }) => theme.colors.mainGray};
  height: 340px;
  border-radius: 20px;
`;

export const FeedTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainBlack};
  margin-top: 22px;
  ${typo.h2}
`;

export const FeedDetail = styled.p`
  color: ${({ theme }) => theme.colors.mainBlack};
  margin-top: 6px;
  ${typo.medium}
`;
