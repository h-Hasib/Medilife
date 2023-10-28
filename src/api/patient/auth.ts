import axios from 'src/services/axios';
import { Login, VerifyOtp } from 'src/types/patient';

export const auth = {
  login: (loginCredentials: Login) => axios.post('/patient/auth/login-dev', loginCredentials),
  verifyOtp: (verifyOtpCred: VerifyOtp) => axios.post('/patient/auth/verify-otp', verifyOtpCred),
  resendOtp: (phoneNumber: string) => axios.get(`/patient/auth/resend-otp?phoneNo=${phoneNumber}`),
  logout: () => axios.post(`/patient/auth/logout`),
};
