import { useWindowWidth } from '@react-hook/window-size';
import Modal from 'components/Modal/Modal';
import LogInModal from 'pages/LogInModal/LogInModal';
import MobileModal from 'pages/MobileModal/MobileModal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuthModal, toggleMenuModal } from 'redux/slices/modalSlace';

const Modals = () => {
  const onlyWidth = useWindowWidth();
  const menuModalIsOpen = useSelector(state => state.modals.menuModal);
  const authModalIsOpen = useSelector(state => state.modals.loginModal);
  const dispatch = useDispatch();

  return (
    <>
      {menuModalIsOpen && onlyWidth < 1440 && (
        <Modal
          isOpen={menuModalIsOpen}
          onClose={() => dispatch(toggleMenuModal())}
        >
          <MobileModal />
        </Modal>
      )}

      {authModalIsOpen && (
        <Modal
          isOpen={authModalIsOpen}
          onClose={() => dispatch(toggleAuthModal())}
          color="#fff"
        >
          <LogInModal />
        </Modal>
      )}
    </>
  );
};

export default Modals;
