import Icon from '../Icon';
import * as S from './EmptyCard.style';

const EmptyCard = () => {
  return (
    <S.Container>
      <Icon name="notFound" width="150px" height="150px" />
      <S.Text>
        아직 아무것도 없네요!
        <br />
        빨리 채워볼까요?
      </S.Text>
    </S.Container>
  );
};

export default EmptyCard;
