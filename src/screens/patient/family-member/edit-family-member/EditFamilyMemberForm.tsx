import React from 'react';
import { Text, View } from 'react-native';
import { FamilyMember } from 'src/types/patient';
import * as yup from 'yup';

const EditFamilyMemberForm = () => {
  const initialValues: FamilyMember = {
    FullName: '',
    GenderId: 0,
    DateOfBirth: '',
    ContactNumber: '',
    RelationshipId: 0,
    Email: '',
    Address: '',
    AgeTypeId: 0,
  };
  const validationSchema = yup.object().shape({
    FullName: yup
      .string()
      .typeError('Please insert valid Name')
      .min(3)
      .required('Name is required'),
    GenderId: yup.number().typeError('Please insert valid gender'),
    DateOfBirth: yup.date().required('Date of Birth is required'),
    ContactNumber: yup
      .string()
      .typeError("That doesn't look like a phone number")
      .min(11)
      .required('A phone number is required'),
    RelationshipId: yup.number().typeError('Please insert valid gender'),
    Email: yup.string().email('Please enter a valid email'),
    Address: yup.string().nullable().typeError('Please insert valid input'),
    AgeTypeId: yup.number().typeError('Please insert valid age'),
  });
  return (
    <View>
      <Text>EditFamilyMemberForm</Text>
    </View>
  );
};

export default EditFamilyMemberForm;
