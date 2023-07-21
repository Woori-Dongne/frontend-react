import Input from '../../../../components/Input/Input';
import * as S from './Title.style';

interface TitleProps {
  titleText: string;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Title = ({ titleText, handleChangeTitle }: TitleProps) => {
  return (
    <S.TitleBox>
      <Input
        title="제목"
        required={true}
        type=""
        placeholder="최대 30글자까지 입력 가능합니다"
        maxLength={30}
        value={titleText}
        onChange={handleChangeTitle}
        name="titleText"
      />
    </S.TitleBox>
  );
};

export default Title;
