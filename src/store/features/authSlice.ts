import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/types/common/app-store';
import storage from 'src/utils/mmkv-storage';

const initialState: AuthState = {
  isAuthenticated: false,
  expiresAt: undefined,
  phone: '',
  statusText: undefined,
  role: undefined,
  token: undefined,
  refreshToken: undefined,
  isNew: false,
  doctorApprovedStatus: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    patientLogin: (state, action: PayloadAction<AuthState>) => {
      state.phone = action.payload.phone;
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.expiresAt = action.payload.expiresAt;

      // Save auth state to local storage using react-native-mmkv
      storage.setItem('auth', JSON.stringify(state));
    },
    doctorLogin: (state, action: PayloadAction<AuthState>) => {
      state.phone = action.payload.phone;
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.expiresAt = action.payload.expiresAt;
      state.isNew = action.payload.isNew;
      state.doctorApprovedStatus = action.payload.doctorApprovedStatus;
      storage.setItem('auth', JSON.stringify(state));
    },
    logout: state => {
      state = initialState;
      // Clear auth state from local storage
      storage.removeItem('auth');
    },
    // Add other actions for additional features
  },
});

export default authSlice.reducer;
export const { patientLogin, logout } = authSlice.actions;
