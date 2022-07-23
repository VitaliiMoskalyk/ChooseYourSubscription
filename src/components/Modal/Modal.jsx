import { useWindowWidth } from '@react-hook/window-size';
import Svg from 'components/Svg/Svg';
import { useEffect } from 'react';
import { ModalContent, ModalWrapper, SvgWrapper } from './Modal.styled';

const Modal = ({ children, onClose, isOpen }) => {
  const onlyWidth = useWindowWidth();

  useEffect(() => {
    window.addEventListener('keydown', close);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', close);
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    };
  });

  const close = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') onClose();
  };

  return (
    isOpen && (
      <ModalWrapper onClick={close}>
        <ModalContent>
          {onlyWidth > 768 && (
            <SvgWrapper>
              <Svg width="28" height="28" icon="icon-Close" onClick={onClose} />
            </SvgWrapper>
          )}
          {children}
        </ModalContent>
      </ModalWrapper>
    )
  );
};

export default Modal;
