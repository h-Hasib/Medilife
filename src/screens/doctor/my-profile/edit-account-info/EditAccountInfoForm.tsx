import React from 'react';
import { Text, View } from 'react-native';
import { DoctorProfileUpdate } from 'src/types/doctor';
import * as yup from 'yup';

const EditAccountInfoForm = () => {
  const initialValues: DoctorProfileUpdate = {
    Name: '',
    Email: '',
    ContactNo: '',
    DesignationId: 0,
    GenderId: 0,
    DepartmentId: 0,
  };

  const validationSchema = yup.object().shape({
    Name: yup.string().required('Name is required'),
    Email: yup.string().required('Email is required'),
    ContactNo: yup.string().required('Contact No is required'),
    DesignationId: yup.number().required('Designation Id is required'),
    GenderId: yup.number().required('Gender Id is required'),
    DepartmentId: yup.number().required('Department Id is required'),
  });

  const onSubmit = (values: DoctorProfileUpdate) => {
    //TODO:
  };

  return (
    <View>
      <Text>EditAccountInfoForm</Text>
    </View>
  );
};

export default EditAccountInfoForm;
