import { useWindowWidth } from '@react-hook/window-size';
import Modal from 'components/Modal/Modal';
import LogInModal from 'pages/LogInModal/LogInModal';
import MobileModal from 'pages/MobileModal/MobileModal';
import RegisterModal from 'pages/RegisterModal/RegisterModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleAuthModal,
  toggleMenuModal,
  toggleRegisterModal,
  toggleSubscriptionModal,
} from 'redux/slices/modalSlace';

const Modals = () => {
  const onlyWidth = useWindowWidth();
  const menuModalIsOpen = useSelector(state => state.modals.menuModal);
  const authModalIsOpen = useSelector(state => state.modals.loginModal);
  const registerModalIsOpen = useSelector(state => state.modals.registerModal);
  const subscriptionModalIsOpen = useSelector(
    state => state.modals.subscriptionModal
  );

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

      {registerModalIsOpen && (
        <Modal
          isOpen={registerModalIsOpen}
          onClose={() => dispatch(toggleRegisterModal())}
          color="#fff"
        >
          <RegisterModal />
        </Modal>
      )}

      {subscriptionModalIsOpen && (
        <Modal
          isOpen={subscriptionModalIsOpen}
          onClose={() => dispatch(toggleSubscriptionModal())}
          color="#fff"
        ></Modal>
      )}
    </>
  );
};

export default Modals;
