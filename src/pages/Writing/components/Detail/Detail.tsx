import * as S from './Detail.style';

interface DetailProps {
  detailText: string;
  handleChangeDetail: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Detail = ({ detailText, handleChangeDetail }: DetailProps) => {
  return (
    <S.DetailBox>
      <S.DetailName>상세 내용</S.DetailName>
      <S.DetailContent
        placeholder="최대 300글자까지 입력 가능합니다"
        maxLength={300}
        value={detailText}
        onChange={handleChangeDetail}
        name="content"
      />
    </S.DetailBox>
  );
};

export default Detail;
