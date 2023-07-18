import more from '../../../assets/more.svg';
import * as S from '../Main.style';

const Header = () => {
  return (
    <S.Header>
      <S.ProfileContainer>
        <S.ProfileImage />
        <S.ProfileNameBox>
          <S.ProfileNickName>자허블</S.ProfileNickName>
          <S.profileCategory>카테고리</S.profileCategory>
        </S.ProfileNameBox>
      </S.ProfileContainer>
      <S.MoreDetailBox>
        <S.MoreSvg src={more} />
      </S.MoreDetailBox>
    </S.Header>
  );
};

export default Header;
