import { View, Text } from 'react-native';
import React from 'react';
import * as yup from 'yup';
import { AuthAccount } from 'src/types/doctor';

const AddAccountFrom = () => {
  const initialValues: AuthAccount = {
    loginID: '',
    password: '',
  };
  const validationSchema = yup.object().shape({
    loginID: yup
      .string()
      .typeError('Please insert valid Login ID')
      .min(3)
      .required('Login ID is required'),
    password: yup
      .string()
      .typeError('Please insert atleast 6 characters')
      .min(6)
      .required('Password is required'),
  });
  return (
    <View>
      <Text>AddAccountFrom</Text>
    </View>
  );
};

export default AddAccountFrom;
