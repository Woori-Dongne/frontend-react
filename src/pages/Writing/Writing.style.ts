import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';
export const Container = styled.div`
  padding: 31px 20px;
`;

export const Remind = styled.h3`
  ${typo.small}
  span {
    color: ${({ theme }) => theme.colors.mainRed};
  }
`;

export const InfoBox = styled.div`
  margin-top: 20px;
`;

export const InfoTitle = styled.div`
  ${mixins.flexBox('', 'center')}
  ${typo.normal}
  margin-bottom: 8px;

  &::before {
    content: '*';
    height: 14px;
    margin-right: 6px;
    color: ${({ theme }) => theme.colors.reportRed};
    text-align: center;
  }
`;

export const DropDownWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
`;

export const DeadlineBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const DeadlineName = styled.h3`
  font-size: 14px;

  span {
    margin-right: 4px;
    color: #f9483b;
  }
`;

export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateDeadline = styled.div`
  ${mixins.flexBox('space-between', 'center')}
  height: 30px;
  margin-top: 15px;
`;

export const TimeDeadline = styled.div`
  ${mixins.flexBox('space-between', 'center')}
  margin-top:15px;
  font-size: 12px;
  font-weight: 400;
`;

export const HourDeadline = styled.div`
  ${mixins.flexBox('', 'center')}
  width: 149px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.colors.mainYellow};
  border-radius: 8px;
  padding: 5px 6.02px 5px 7.52px;
  color: #292d32;
  font-size: 12px;
  font-weight: 400;
`;

export const MinuteDeadline = styled.div`
  ${mixins.flexBox('', 'center')}
  width: 149px;
  height: 16px;
  border: 1px solid #ffdc89;
  border-radius: 8px;
  padding: 5px 6.02px 5px 7.52px;
  color: #292d32;
  font-size: 12px;
  font-weight: 400;
`;

export const ButtonBox = styled.div`
  margin-top: 60px;
`;
