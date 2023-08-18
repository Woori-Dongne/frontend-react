import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import * as S from './Modal.style';
interface ModalProps {
  confirmMessage?: string | React.ReactNode;
  type: string;
  confirmAction: () => void;
  cancelAction?: () => void;
}

const Modal = ({
  confirmMessage,
  type,
  confirmAction,
  cancelAction,
}: ModalProps) => {
  return (
    <S.DimmedBackground>
      <S.ModalContainer>
        <Icon name="logos" width="63px" />
        {type === 'report' ? (
          <S.ReportBox>
            <S.ReportTitle>신고 사유 작성</S.ReportTitle>
            <S.ReportTextarea placeholder="상세하게 신고 사유를 작성해주세요" />
          </S.ReportBox>
        ) : (
          <S.ConfrimContent>{confirmMessage}</S.ConfrimContent>
        )}

        <S.ButtonsBox>
          {(type === 'confirm' || type === 'report') && (
            <>
              <Button
                title={type === 'report' ? '신고하기' : '네'}
                $border="none"
                $buttonsize="medium"
                $buttonbackground="mainGreen"
                $font="white"
                onClick={confirmAction}
              />
              <Button
                title={type === 'report' ? '취소하기' : '아니오'}
                $border="none"
                $buttonsize="medium"
                $buttonbackground="mainRed"
                $font="white"
                onClick={cancelAction}
              />
            </>
          )}

          {(type === 'goback' || type === 'follow') && (
            <Button
              title={type === 'goback' ? '뒤로 돌아가기' : '채팅 계속하기'}
              $border="none"
              $buttonsize="medium"
              $buttonbackground="mainYellow"
              $font="black"
              onClick={confirmAction}
            />
          )}
        </S.ButtonsBox>
      </S.ModalContainer>
    </S.DimmedBackground>
  );
};

export default Modal;
