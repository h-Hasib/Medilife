import React from 'react';
import { Text, View } from 'react-native';
import { VerifyOtp } from 'src/types/patient';
import * as yup from 'yup';

const OtpForm = () => {
  const initialValues: VerifyOtp = {
    Otp: 0,
  };
  const loginValidationSchema = yup.object().shape({
    Otp: yup
      .number()
      .typeError("That doesn't look like a OTP")
      .min(4)
      .max(4)
      .required('A OTP is required'),
  });
  return (
    <View>
      <Text>OtpForm</Text>
    </View>
  );
};

export default OtpForm;
