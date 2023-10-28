export interface Login {
  CountryCode: string;
  PhoneNo: string;
}

export interface VerifyOtp {
  PhoneNo?: string;
  Otp: number;
}
