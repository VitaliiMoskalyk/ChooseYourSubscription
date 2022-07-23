import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    menuModal: false,
    loginModal: false,
  },
  reducers: {
    toggleMenuModal: (state, actions) => {
      state.menuModal = !state.menuModal;
      state.loginModal = false;
    },
    toggleAuthModal: (state, actions) => {
      state.loginModal = !state.loginModal;
      state.menuModal = false;
    },
  },
});

export const { toggleMenuModal, toggleAuthModal } = modalSlice.actions;
export default modalSlice.reducer;
