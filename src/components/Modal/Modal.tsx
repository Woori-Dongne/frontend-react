import Button from '../Button/Button';
import logos from '../../assets/logos.svg';
import * as S from './Modal.style';

interface ModalProps {
  confirmMessage?: string;
  type: string;
  goToPreviousPage: () => void;
  goToNextPage?: () => void;
}

const Modal = ({
  confirmMessage,
  type,
  goToPreviousPage,
  goToNextPage,
}: ModalProps) => {
  return (
    <S.DimmedBackground>
      <S.ModalContainer>
        <S.LogosImgBox>
          <S.LogoImg src={logos} />
        </S.LogosImgBox>

        <S.ConfrimContentBox>
          <S.ConfrimContent>{confirmMessage} </S.ConfrimContent>
        </S.ConfrimContentBox>

        {type === 'report' && (
          <S.ReportBox>
            <h2>신고 사유 작성</h2>
            <S.ReportTextarea placeholder="상세하게 신고 사유를 작성해주세요" />
          </S.ReportBox>
        )}

        <S.ButtonsBox>
          {(type === 'confirm' || type === 'report') && (
            <>
              <Button
                title={type === 'report' ? '네' : '신고하기'}
                $border="none"
                $buttonsize="medium"
                $buttonbackground="mainGreen"
                $font="white"
              />
              <Button
                title={type === 'report' ? '아니오' : '취소하기'}
                $border="none"
                $buttonsize="medium"
                $buttonbackground="mainRed"
                $font="white"
              />
            </>
          )}

          {(type === 'goback' || type === 'follow') && (
            <Button
              title={type === 'goback' ? '뒤로 돌아가기' : '채팅 계속하기'}
              $border="none"
              $buttonsize="large"
              $buttonbackground="mainYellow"
              $font="black"
            />
          )}
        </S.ButtonsBox>
      </S.ModalContainer>
    </S.DimmedBackground>
  );
};

export default Modal;
