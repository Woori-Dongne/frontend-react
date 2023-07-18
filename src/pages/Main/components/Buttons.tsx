import * as S from '../Main.style';

const Buttons = () => {
  return (
    <S.ButtonContainer>
      <S.ButtonBox>
        <S.FilterButton>최신순</S.FilterButton>
        <S.FilterButton>카테고리</S.FilterButton>
      </S.ButtonBox>
      <S.WritingButton>글 작성하기</S.WritingButton>
    </S.ButtonContainer>
  );
};

export default Buttons;
