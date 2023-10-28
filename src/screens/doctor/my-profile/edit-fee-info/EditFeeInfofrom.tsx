import { View, Text } from 'react-native';
import React from 'react';
import * as yup from 'yup';

const EditFeeInfofrom = () => {
  //TODO:
  const validationSchema = yup.object().shape({
    NewFees: yup
      .number()
      .typeError('Please insert valid NewFees')
      .min(3)
      .required('NewFees is required'),
  });
  return (
    <View>
      <Text>EditFeeInfofrom</Text>
    </View>
  );
};

export default EditFeeInfofrom;
