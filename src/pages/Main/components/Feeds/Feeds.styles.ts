import { typo } from '../../../../styles/typo';
import { styled } from 'styled-components';

export const PostFeedContainer = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  margin-top: 30px;
`;

export const FeedImage = styled.img`
  border-radius: 8px;
  width: 100%;
`;

export const FeedTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainBlack};
  margin-top: 22px;
  ${typo.h2}
`;

export const FeedDetail = styled.div`
  color: ${({ theme }) => theme.colors.mainBlack};
  margin-top: 36px;
  ${typo.medium}
`;
