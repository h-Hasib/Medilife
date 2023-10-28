import React from 'react';
import { Text, View } from 'react-native';
import { AppointmentCreate } from 'src/types/patient';
import * as yup from 'yup';

const CreateAppointmentForm = () => {
  const initialValues: AppointmentCreate = {
    AppointmentFor: 'self',
    ChamberId: 0,
    DoctorId: '',
    ShiftId: 0,
    PatientName: '',
    GenderId: 0,
    MobileNo: '',
    Address: '',
    Diabatis: false,
    HighBloodPresure: '',
    Smoker: false,
    Covit19Positive: false,
    HasCovit19Symptom: false,
    PreviousMedicine: '',
    AppointmentDate: '',
    StatusId: 0,
    VisitTypeId: 0,
    DateOfBirth: '',
  };
  const validationSchema = yup.object().shape({
    PatientName: yup
      .string()
      .typeError('Please insert valid Patient Name')
      .min(3)
      .required('Patient Name is required'),
    GenderId: yup.number().typeError('Please insert valid Gender').required('Gender is required'),
    AppointmentDate: yup
      .date()
      .typeError('Please insert valid Appointment Date')
      .required('Appointment Date is required'),
    DateOfBirth: yup
      .date()
      .typeError('Please insert valid Date of birth')
      .required('Date of birth is required'),
    ShiftId: yup
      .number()
      .required('Appointment Shift is required')
      .min(1, 'Please select valid Appointment Shift'),
    StatusId: yup
      .number()
      .typeError('Please insert valid Appointment Status')
      .required('Appointment Status is required'),
    VisitTypeId: yup
      .number()
      .typeError('Please insert valid Visit Type')
      .required('Visit Type is required'),
  });
  return (
    <View>
      <Text>CreateAppointmentForm</Text>
    </View>
  );
};

export default CreateAppointmentForm;
