import styled from 'styled-components';

const OutsideModal = () => {
  return <OutsideModalContainer>BlackModal</OutsideModalContainer>;
};

const OutsideModalContainer = styled.div`
  position: absolute;
  height: 100vh;
  inset: 0;
  background-color: red;
  z-index: 1;
`;

export default OutsideModal;
