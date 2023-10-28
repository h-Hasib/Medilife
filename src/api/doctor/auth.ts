import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { AuthLogin, AuthRegister, OTPVerify, VerifyOTP } from 'src/types/doctor';

export const auth = {
  login: (data: AuthLogin) => axios.post<ApiResponse<AuthLogin>>(`doctor/auth/login-dev`, data),

  verifyOtp: (data: OTPVerify) => axios.post<VerifyOTP>(`doctor/auth/verify-otp`, data),

  addAccount: (data: AuthRegister) =>
    axios.post<ApiResponse<AuthRegister>>(`doctor/auth/add-account`, data),
  register: (data: AuthRegister) =>
    axios.post<ApiResponse<AuthRegister>>(`doctor/auth/register`, data),

  resendOtp: (data: string) =>
    axios.get<ApiResponse<AuthLogin[]>>(`doctor/auth/resend-otp-dev?phoneNo=${data}`),
};
