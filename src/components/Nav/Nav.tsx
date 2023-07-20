import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../Icon';
import * as S from './Nav.style';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === '/';
  const unnecessaryMyPage =
    location.pathname === '/signup' || location.pathname === '/myPage';

  if (isLoginPage) return <></>;

  return (
    <S.Container>
      <Icon
        name="navLogo"
        clickAction={() => {
          navigate('/main');
        }}
      />
      {!unnecessaryMyPage && (
        <Icon
          name="myPage"
          clickAction={() => {
            navigate('/myPage');
          }}
        />
      )}
    </S.Container>
  );
};

export default Nav;
