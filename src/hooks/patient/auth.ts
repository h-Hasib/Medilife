import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';
import { Login, VerifyOtp } from 'src/types/patient';

export const usePatientLogin = () =>
  useMutation((loginCredentials: Login) => api.patient.auth.login(loginCredentials));
export const usePatientVerifyOtp = () =>
  useMutation((verifyCredentials: VerifyOtp) => api.patient.auth.verifyOtp(verifyCredentials));
export const usePatientResendOtp = (phoneNumber: string) =>
  useQuery('patient-resendOtp', () => api.patient.auth.resendOtp(phoneNumber));
export const usePatientLogout = () => useMutation(() => api.patient.auth.logout());
