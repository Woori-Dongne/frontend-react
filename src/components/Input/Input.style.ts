import { CSSProperties } from 'react';
import { styled } from 'styled-components';

export const InputTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  & span {
    margin-right: 6px;
    color: #f9483b;
    text-align: center;
  }
`;

export const InputTeg = styled.input<CSSProperties>`
  width: 320px;
  height: ${({ height }) => height ?? '30px'};
  padding: 9px 10px;

  border: 1px solid #ffdc89;
  border-radius: 8px;

  background: #ffffff;
  color: ${({ color }) => color};

  &::placeholder {
    color: #9e9e9e;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid #808080;
  border-radius: 50%;

  &:checked {
    background-image: url('/icons/checkTrue.svg');
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;
