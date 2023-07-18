import LogoBox from './components/LogoBox';
import Buttons from './components/Buttons';
import Feeds from './components/Feeds';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.Container>
      <LogoBox />
      <Buttons />
      <Feeds />
    </S.Container>
  );
};

export default Main;
