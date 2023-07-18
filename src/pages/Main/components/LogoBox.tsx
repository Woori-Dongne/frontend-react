import * as S from '../Main.style';

import logo from '../../../assets/logo.png';
import mypage from '../../../assets/mypage.svg';
const LogoBox = () => {
  return (
    <S.LogoBox>
      <S.LogoImg src={logo} />
      <S.ProfileIconsBox>
        <S.MyPageImg src={mypage} />
      </S.ProfileIconsBox>
    </S.LogoBox>
  );
};

export default LogoBox;
