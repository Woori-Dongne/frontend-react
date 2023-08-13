import { useEffect } from 'react';
import * as S from './DropDown.style';

interface Props {
  width?: string;
  $top?: string;
  dropDownList: List[];
  clickValue: (value: string | number, index: number) => void;
  modalRef: React.RefObject<HTMLDivElement>;
  setState: any;
  stateType?: string;
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
  modalRef,
  setState,
  stateType,
}: Props) => {
  const handleOutsideClick = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setState(stateType === 'boolean' ? false : '');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <S.Container width={width} $top={$top} ref={modalRef}>
      {dropDownList.map((list) => {
        return (
          <S.Text
            key={list.id}
            $color={list.title !== '신고하기'}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              clickValue(list.title, list.id);
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
