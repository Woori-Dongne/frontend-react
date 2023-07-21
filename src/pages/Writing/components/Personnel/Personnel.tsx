import { useState } from 'react';
import DropDownModal from '../../../../components/DropDown/DropDownModal';
import * as S from './Personnel.style';

interface PersonnelProps {
  selectPersonnel: string;
  setSelectPersonnel: any;
}

const Personnel = ({ selectPersonnel, setSelectPersonnel }: PersonnelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDropBox = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.PersonnelBox>
      <S.PersonnelName>
        <span>✴︎</span> 인원
      </S.PersonnelName>

      <DropDownModal
        handleOpenModal={openDropBox}
        stateValue={selectPersonnel}
        isOpen={isOpen}
        setSelectSort={setSelectPersonnel}
        name="PERSONNEL_LIMIT"
      />
    </S.PersonnelBox>
  );
};

export default Personnel;
