import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';
import { AuthLogin, AuthRegister, OTPVerify } from 'src/types/doctor';

export const useDoctorLogin = () => useMutation((data: AuthLogin) => api.doctor.auth.login(data));

export const useDoctorRegister = () =>
  useMutation((data: AuthRegister) => api.doctor.auth.register(data));

export const useDoctorVerifyOtp = () =>
  useMutation((data: OTPVerify) => api.doctor.auth.verifyOtp(data));

export const useDoctorAddAccount = () =>
  useMutation((data: AuthRegister) => api.doctor.auth.addAccount(data));

export const useDoctorResendOtp = (data: string) =>
  useQuery(['doctor-resend-opt', data], () => api.doctor.auth.resendOtp(data));
