import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 54px;

  left: 0;

  width: 100%;
  min-height: 100vh;
  background-color: #ecf3fb;
  overflow-y: auto;
  z-index: 2;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;

  max-width: 375px;
  /* height: fit-content; */

  padding: 24px;
  background-color: #ecf3fb;
  margin-left: auto;
  margin-right: auto;
`;
