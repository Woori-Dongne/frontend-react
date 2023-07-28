import { useNavigate } from 'react-router-dom';
import * as S from './WritingEditModal.styles';

const WritingEditModal = () => {
  const navigate = useNavigate();

  const goToWritingEdit = () => {
    navigate('/writing');
  };

  return (
    <S.WritingEditModalBox onClick={goToWritingEdit}>
      글 수정하기
    </S.WritingEditModalBox>
  );
};

export default WritingEditModal;
