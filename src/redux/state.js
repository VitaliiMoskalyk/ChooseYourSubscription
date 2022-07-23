import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlace';

export default configureStore({
  reducer: {
    modals: modalReducer,
  },
});
