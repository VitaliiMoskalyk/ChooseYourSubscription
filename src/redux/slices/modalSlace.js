import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    menuModal: false,
    loginModal: false,
    registerModal: false,
    subscriptionModal: false,
  },
  reducers: {
    toggleMenuModal: (state, actions) => {
      state.menuModal = !state.menuModal;
      state.loginModal = false;
      state.registerModal = false;
      state.subscriptionModal = false;
    },
    toggleAuthModal: (state, actions) => {
      state.loginModal = !state.loginModal;
      state.menuModal = false;
      state.registerModal = false;
      state.subscriptionModal = false;
    },
    toggleRegisterModal: (state, actions) => {
      state.registerModal = !state.registerModal;
      state.menuModal = false;
      state.loginModal = false;
      state.subscriptionModal = false;
    },
    toggleSubscriptionModal: (state, actions) => {
      state.subscriptionModal = !state.subscriptionModal;
      state.menuModal = false;
      state.loginModal = false;
      state.registerModal = false;
    },
  },
});

export const {
  toggleMenuModal,
  toggleAuthModal,
  toggleRegisterModal,
  toggleSubscriptionModal,
} = modalSlice.actions;
export default modalSlice.reducer;
