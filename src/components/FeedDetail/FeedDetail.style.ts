import styled from 'styled-components';

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
`;

export const SubTitle = styled.p`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  margin-top: 15px;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 8px;
  width: 250px;
  flex-wrap: wrap;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #808080;
`;

export const InfoDetail = styled.span`
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.mainYellow};
  font-size: 14px;
  font-weight: 600;
`;
