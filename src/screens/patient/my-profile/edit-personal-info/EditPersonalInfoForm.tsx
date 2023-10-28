import React from 'react';
import { Text, View } from 'react-native';
import { EditPersonalInfo } from 'src/types/patient';
import * as yup from 'yup';

const EditPersonalInfoForm = () => {
  const initialValues: EditPersonalInfo = {
    GenderId: 0,
    DOB: '',
    BloodGroupId: 0,
    Language: '',
    Occupation: '',
    Address: '',
  };
  const validationSchema = yup.object().shape({
    GenderId: yup.number().typeError('Please insert valid gender'),
    DOB: yup.date().required('Date of Birth is required'),
    BloodGroupId: yup.number().nullable().typeError('Please insert valid input'),
    Language: yup.string().nullable().typeError('Please insert valid input'),
    Occupation: yup.string().nullable().typeError('Please insert valid input'),
    Address: yup.string().nullable().typeError('Please insert valid input'),
  });
  return (
    <View>
      <Text>EditPersonalInfoForm</Text>
    </View>
  );
};

export default EditPersonalInfoForm;
