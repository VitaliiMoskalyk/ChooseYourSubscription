import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 54px;
  left: 0;

  width: 100%;
  min-height: 100vh;
  background-color: ${props =>
    props.color ? props.color : props.theme.color.background};
  overflow-y: auto;
  z-index: 2;
  @media (min-width: ${props => props.theme.width.tablet}) {
    top: 0;
    background-color: rgba(23, 73, 179, 0.1);
    backdrop-filter: blur(15px);
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 375px;

  padding: 24px;
  background-color: ${props =>
    props.color ? props.color : props.theme.color.background};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.width.tablet}) {
    margin-top: 180px;
    margin-bottom: 180px;
    max-width: 592px;
    padding: 40px;

    background: ${props => props.theme.color.white};
    box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2);
    border-radius: 32px;
  }
  @media (min-width: ${props => props.theme.width.desktop}) {
    margin-top: 102px;
    margin-bottom: 57px;
    max-width: 581px;
  }
`;

export const SvgWrapper = styled.div`
  position: absolute;
  right: 40px;
  top: 40px;
  display: block;
  width: fit-content;
  fill: #171717;
  transition: fill 0.5s;
  :focus,
  :hover {
    fill: #1749b3;
    transform: scale(1.1);
  }
`;
