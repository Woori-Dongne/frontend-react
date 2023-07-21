import { constantList } from '../ConstantData/constantDatalist';
import Icon from '../Icon';
import * as S from './DropDownModal.style';

interface Props {
  title: string | any;
  id: number;
}

interface DropDownModalProps {
  name: string;
  width?: string;
  handleOpenModal?: () => void;
  stateValue: string;
  isOpen: boolean;
  // setSelectSort: (category: string) => void
  setSelectSort: any;
}

const DropDownModal = ({
  name,
  width,
  handleOpenModal,
  stateValue,
  isOpen,
  setSelectSort,
}: DropDownModalProps) => {
  return (
    <S.CategoryDropDownContainer>
      <S.CategoryDropDown onClick={handleOpenModal} width={width}>
        {stateValue}
        {isOpen ? (
          <Icon name="arrowdown" width="20px" height="24px" />
        ) : (
          <Icon name="arrowup" width="20px" height="24px" />
        )}
      </S.CategoryDropDown>
      {isOpen && (
        <S.DropBox>
          {constantList[name].map(({ title, id }: Props) => {
            return (
              <S.DropBoxDetail
                key={id}
                onClick={() => {
                  setSelectSort(title);
                  if (handleOpenModal != null) {
                    handleOpenModal();
                  }
                }}
              >
                {title}
              </S.DropBoxDetail>
            );
          })}
        </S.DropBox>
      )}
    </S.CategoryDropDownContainer>
  );
};

export default DropDownModal;
