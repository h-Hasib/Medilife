// interface for the app store state auth
export interface AuthState {
  token?: string;
  refreshToken?: string;
  expiresAt?: number;
  phone?: string;
  isAuthenticated: boolean;
  statusText?: string;
  role?: 'DOCTOR' | 'PATIENT' | 'ASSISTANT';
  isNew: boolean;
  doctorApprovedStatus: boolean;
}
