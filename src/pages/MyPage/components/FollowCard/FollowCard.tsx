import { Follow } from '../../../../types/feedType';
import * as S from './FollowCard.style';

const FollowCard = ({ id, userName, imageUrl }: Follow) => {
  return (
    <S.UserInfoWrap>
      <S.UserImg />
      <S.NickName>{userName}</S.NickName>
    </S.UserInfoWrap>
  );
};

export default FollowCard;
