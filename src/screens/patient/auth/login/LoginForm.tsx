import React from 'react';
import { Text, View } from 'react-native';
import { Login } from 'src/types/patient';
import * as yup from 'yup';

const LoginForm = () => {
  const initialLoginValues: Login = {
    CountryCode: '+88',
    PhoneNo: '',
  };
  const loginValidationSchema = yup.object().shape({
    PhoneNo: yup
      .string()
      .typeError("That doesn't look like a phone number")
      .min(11)
      .required('A phone number is required'),
  });
  return (
    <View>
      <Text>LoginForm</Text>
    </View>
  );
};

export default LoginForm;
