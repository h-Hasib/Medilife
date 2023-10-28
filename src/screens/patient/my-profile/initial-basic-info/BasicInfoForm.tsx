import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InitialBasicInfo } from 'src/types/patient';
import * as yup from 'yup';

const BasicInfoForm = () => {
  const initialValues: InitialBasicInfo = {
    FirstName: '',
    LastName: '',
    Email: '',
    GenderId: 0,
    BloodGroupId: 0,
    DOB: Date.now().toString(),
  };
  const validationSchema = yup.object().shape({
    FirstName: yup
      .string()
      .required('First Name is required')
      .max(50, 'First Name must be less than 50 characters')
      .min(2, 'First Name must be more than 2 characters'),
    LastName: yup
      .string()
      .required('Last Name is required')
      .max(50, 'Last Name must be less than 50 characters')
      .min(2, 'Last Name must be more than 2 characters'),
    Email: yup.string().email('Please enter a valid email'),
    GenderId: yup.number().typeError('Invalid').required('Gender is required'),
    BloodGroupId: yup.number().typeError('Invalid').required('Blood Group is required'),
    DOB: yup.date().required('Date of Birth is required'),
  });

  return (
    <View>
      <Text>BasicInfoForm</Text>
    </View>
  );
};

export default BasicInfoForm;

const styles = StyleSheet.create({});
