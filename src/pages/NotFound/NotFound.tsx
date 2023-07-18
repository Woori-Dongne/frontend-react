import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import Button from '../../components/Button/Button';
import * as S from './NotFound.style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <div></div>
      <S.AlertBox>
        <Icon name="notFound" />
        <S.Message>
          페이지를 찾을 수 없습니다!
          <br />
          메인으로 이동해 주세요!
        </S.Message>
      </S.AlertBox>
      <Button
        title="메인으로 이동하기"
        $border="none"
        $buttonsize="large"
        $buttonbackground="mainYellow"
        $font="black"
        onClick={() => {
          navigate('/main');
        }}
      />
    </S.Container>
  );
};

export default NotFound;
