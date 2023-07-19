import { styled } from 'styled-components';

export const DimmedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  width: 259px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LogosImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 63px;
  height: 42px;
`;

export const ReportBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: #000;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ReportTextarea = styled.textarea`
  display: flex;
  height: 108px;
  border-radius: 8px;
  border: 1px solid #ffdc89;
  background: #fff;
  padding: 5px 6px;
  line-height: normal;
  resize: none;
  margin-top: 9px;
  font-size: 12px;
  color: #292d32;
  font-family: Noto Sans;
`;

export const ConfrimContentBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfrimContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  font-weight: 400;
  font-size: 14px;
  color: #292d32;
  font-family: Noto Sans;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
`;
