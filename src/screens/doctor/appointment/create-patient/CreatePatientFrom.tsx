import React from 'react';
import { Text, View } from 'react-native';
import { AppointmentCreate } from 'src/types/doctor';
import * as yup from 'yup';

const CreatePatientFrom = () => {
  const initialValues: AppointmentCreate = {
    patientName: '',
    address: '',
    mobileNo: '',
    ageYear: '',
    genderName: '',
    consultancyFees: 0,
    chamberId: 0,
    shiftId: 0,
    appointmentDate: '',
  };

  const validationSchema = yup.object().shape({
    patientName: yup
      .string()
      .typeError('Please insert valid Patient Name')
      .min(3)
      .required('Patient Name is required'),
    address: yup
      .string()
      .typeError('Please insert valid Address')
      .min(3)
      .required('Address is required'),
    mobileNo: yup
      .string()
      .typeError('Please insert valid Mobile Number')
      .required('Mobile Number is required'),
    ageYear: yup.string().typeError('Please insert valid Age').required('Age is required'),
    consultancyFees: yup
      .string()
      .typeError('Please insert valid Consultancy Fee')
      .required('Consultancy Fee is required'),
    chamberId: yup
      .string()
      .typeError('Please insert valid Chamber')
      .required('Chamber is required'),
    shiftId: yup.string().typeError('Please insert valid Shift').required('Shift is required'),
    appointmentDate: yup
      .string()
      .typeError('Please insert valid Appointment Date')
      .required('Appointment Date is required'),
  });
  return (
    <View>
      <Text>CreatePatientFrom</Text>
    </View>
  );
};

export default CreatePatientFrom;
