export interface AuthLogin {
  countryCode: string;
  phoneNo: string;
}

export interface AuthRegister {
  fullName: string;
  email: string;
  contactNo: string;
  loginID: string;
  password: string;
  bmdcNumber: string;
}

export interface OTPVerify {
  phoneNo: string;
  otp: number;
}

export interface VerifyOTP {
  Success: boolean;
  ApproveStatus: boolean;
  Message: string;
  Token: Token;
}

export interface Token {
  AccessToken: string;
  RefreshToken: string;
  AccessTokenExpiresAt: string;
  RefreshTokenExpiresAt: string;
}
export interface AuthAccount {
  loginID: string;
  password: string;
}
