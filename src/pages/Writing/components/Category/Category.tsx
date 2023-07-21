import { useState } from 'react';
import DropDownModal from '../../../../components/DropDown/DropDownModal';
import * as S from './Category.style';

interface CategoryProps {
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category = ({ selectCategory, setSelectCategory }: CategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDropBox = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.CategoryBox>
      <S.CategoryName>
        <span>✴︎</span> 카테고리
      </S.CategoryName>
      <DropDownModal
        name="CATEGORY_SORT"
        handleOpenModal={openDropBox}
        isOpen={isOpen}
        stateValue={selectCategory}
        setSelectSort={setSelectCategory}
      />
    </S.CategoryBox>
  );
};

export default Category;
