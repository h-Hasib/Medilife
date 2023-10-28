import React from 'react';
import { Text, View } from 'react-native';
import * as yup from 'yup';
function OtpFrom() {
  const loginValidationSchema = yup.object().shape({
    Otp: yup
      .string()
      .typeError("That doesn't look like a OTP")
      .min(4)
      .max(4)
      .required('A OTP is required'),
  });
  return (
    <View>
      <Text>OtpFrom</Text>
    </View>
  );
}

export default OtpFrom;
