import React from 'react';
import { Text, View } from 'react-native';
import { EditAccountInfo } from 'src/types/patient';
import * as yup from 'yup';

const EditAccountInfoForm = () => {
  const initialValues: EditAccountInfo = {
    FirstName: '',
    LastName: '',
    Email: '',
  };
  const validationSchema = yup.object().shape({
    FirstName: yup
      .string()
      .typeError('Please insert valid First Name')
      .required('First Name is required'),
    LastName: yup
      .string()
      .typeError('Please insert valid Last Name')
      .required('Last Name is required'),
    Email: yup.string().email('Please enter a valid email'),
  });
  return (
    <View>
      <Text>EditAccountInfoForm</Text>
    </View>
  );
};

export default EditAccountInfoForm;
