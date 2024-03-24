import {combineReducers} from '@reduxjs/toolkit';
import InitialReducer from './Slices/InitialSlice';
import ModalReducer from './Slices/ModalSlice';

const RootReducer = combineReducers({
  initial: InitialReducer,
  modal: ModalReducer,
});

export default RootReducer;
