import { CSSProperties } from 'react';
import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';
import theme from '../../styles/theme';

export const InputTitleWrapper = styled.div`
  ${mixins.flexBox('', 'center')}
  ${typo.normal}
  flex-wrap: wrap;
  text-align: center;

  & span {
    height: 14px;
    margin-right: 6px;
    color: #f9483b;
    text-align: center;
  }
`;

export const Input = styled.input<CSSProperties>`
  width: 100%;
  height: ${({ height }) => height ?? '30px'};
  padding: 0px 10px;
  margin-top: 8px;

  border: 1px solid ${({ theme }) => theme.colors.mainYellow};
  border-radius: 8px;

  background: ${theme.colors.white};
  color: ${({ color }) => color};
  ${typo.medium}
  &::placeholder {
    font-style: normal;
    line-height: normal;
    color: ${theme.colors.disable};

    ${typo.small}
  }
`;

export const CheckContainer = styled.div`
  display: flex;
`;

export const GenderContainer = styled.div`
  ${mixins.flexBox('', 'center')}
`;

export const GenderCheckbox = styled.input`
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

export const GenderLabel = styled.label`
  width: 60px;
  ${typo.small}
`;
