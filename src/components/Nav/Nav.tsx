import { useLocation, useNavigate } from 'react-router-dom';
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
      <img
        src="/assets/navLogo.svg"
        alt="logo"
        onClick={() => {
          navigate('/main');
        }}
      />
      {!unnecessaryMyPage && (
        <img
          src="/icons/myPage.svg"
          alt="myPage"
          onClick={() => {
            navigate('/myPage');
          }}
        />
      )}
    </S.Container>
  );
};

export default Nav;
