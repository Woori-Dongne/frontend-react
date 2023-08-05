import * as S from './DropDown.style';

interface Props {
  width?: string;
  $top?: string;
  dropDownList: List[];
  clickValue: (value: string | number) => void;
}

interface List {
  id: number;
  title: string | number;
}

const DropDown = ({
  width = '100%',
  $top = '40px',
  dropDownList,
  clickValue,
}: Props) => {
  return (
    <S.Container width={width} $top={$top}>
      {dropDownList.map((list) => {
        return (
          <S.Text
            key={list.id}
            $color={list.title !== '신고하기'}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              clickValue(list.title);
            }}
          >
            {list.title}
          </S.Text>
        );
      })}
    </S.Container>
  );
};

export default DropDown;
