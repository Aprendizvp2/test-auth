import {RootState} from '@/libraries/redux';
import {createSlice} from '@reduxjs/toolkit';

export interface LoadingSlice {
  visible: boolean;
}

const initialState: LoadingSlice = {
  visible: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setShowLoading: state => {
      state.visible = true;
    },
    setHiddenLoading: state => {
      state.visible = false;
    },
  },
});

export const {setShowLoading, setHiddenLoading} = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;
