import { useState, useRef } from 'react';
import {
  CATEGORY_SORT,
  DEADLINE_YEAR,
  PERSONNEL_LIMIT,
  DEADLINE_MONTH,
  DEADLINE_DAY,
  DEADLINE_HOUR,
  DEADLINE_MINUTE,
  SI_LIST,
  GU_LIST,
  DONG_LIST,
} from '../../constants/dropdownList';
import { DataList, Placeholder } from '../../types/writingType';
import Icon from '../../../../components/Icon';
import DropDown from '../../../../components/DropDown/DropDown';
import * as S from './DropDownBox.style';

interface Props {
  width?: string;
  placeholder: string | number;
  type: string;
  prevText?: string | number;
  changeValue: (data: string, value: string | number) => void;
}

const DropDownBox = ({
  width = 'inherit',
  placeholder,
  type,
  prevText,
  changeValue,
}: Props) => {
  const [curDropdownData, setCurDropdownData] = useState('');

  const list: DataList = {
    category: CATEGORY_SORT,
    personnel: PERSONNEL_LIMIT,
    year: DEADLINE_YEAR,
    month: DEADLINE_MONTH,
    day: DEADLINE_DAY,
    hour: DEADLINE_HOUR,
    minute: DEADLINE_MINUTE,
    si: SI_LIST,
    gu: GU_LIST.filter((el) => el.prev === prevText),
    dong: DONG_LIST.filter((el) => el.prev === prevText),
  };

  const placeholderText: Placeholder = {
    category:
      placeholder === undefined ? '카테고리를 선택해 주세요' : placeholder,
    personnel: placeholder === 0 ? '인원을 선택해 주세요' : placeholder,
    year: placeholder === '' ? '연' : placeholder,
    month: placeholder === '' ? '월' : placeholder,
    day: placeholder === '' ? '일' : placeholder,
    hour: placeholder === '' ? '시간' : placeholder,
    minute: placeholder === '' ? '분' : placeholder,
    si: placeholder === '' ? '시' : placeholder,
    gu: placeholder === '' ? '구' : placeholder,
    dong: placeholder === '' ? '동' : placeholder,
  };

  const openDropDown = (data: string) => {
    curDropdownData === '' ? setCurDropdownData(data) : setCurDropdownData('');
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const selectValue = (value: string | number): void => {
    changeValue(type, value);
    setCurDropdownData('');
  };

  return (
    <S.CategoryDropDown
      width={width}
      onClick={() => {
        openDropDown(type);
      }}
    >
      <S.CategoryValue>
        {placeholderText[type]}
        {curDropdownData === type ? (
          <Icon name="arrowdown" width="20px" height="24px" />
        ) : (
          <Icon name="arrowup" width="20px" height="24px" />
        )}
      </S.CategoryValue>
      {curDropdownData === type && (
        <DropDown
          dropDownList={list[type]}
          clickValue={selectValue}
          modalRef={modalRef}
          setState={setCurDropdownData}
        />
      )}
    </S.CategoryDropDown>
  );
};

export default DropDownBox;
