import { View, Text } from 'react-native';
import React from 'react';
import { AuthRegister } from 'src/types/doctor';
import * as yup from 'yup';

const RegistrationFrom = () => {
  const initialValues: AuthRegister = {
    contactNo: '',
    fullName: '',
    bmdcNumber: '',
    password: '',
    loginID: '',
    email: '',
  };

  const validationSchema = yup.object().shape({
    contactNo: yup
      .string()
      .typeError("That doesn't look like a phone number")
      .min(11)
      .required('A phone number is required'),
    fullName: yup
      .string()
      .typeError('Please insert valid Name')
      .min(3)
      .required('Name is required'),
    bmdcNumber: yup
      .string()
      .typeError('Please insert valid BMDC Number')
      .min(3)
      .required('BMDC Number is required'),
    password: yup
      .string()
      .typeError('Please insert atleast 6 characters')
      .min(6)
      .required('Password is required'),
    loginID: yup
      .string()
      .typeError('Please insert atleast 6 characters')
      .min(6)
      .required('loginID is required'),
  });
  return (
    <View>
      <Text>RegistrationFrom</Text>
    </View>
  );
};

export default RegistrationFrom;
