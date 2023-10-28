import React from 'react';
import { Text, View } from 'react-native';
import { ChamberCreate } from 'src/types/doctor';
import * as yup from 'yup';

const EditChamberFrom = () => {
  const initialValues: ChamberCreate = {
    doctorId: '',
    chamberName: '',
    chamberAddress: '',
    contactNo: '',
    chamberVisitStartTime: '',
    chamberVisitEndTime: '',
    notes: '',
    morningStartTime: '',
    morningEndTime: '',
    isMorningShift: false,
    isEveningShift: false,
    isOnlineAppointmentAllow: false,
    morningShiftMaxPatient: 0,
    eveningShiftMaxPatient: 0,
    isFutureAppointmentAllow: false,
    futureAppointmentMaxDays: 0,
    slotTimeInMinute: 0,
    userPerDayMaxAppointment: 0,
    Saturday: false,
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
  };
  const validationSchema = yup.object().shape({
    ChamberName: yup
      .string()
      .typeError('Please insert valid Chamber Name')
      .min(3)
      .required('Chamber Name is required'),
    chamberAddress: yup
      .string()
      .typeError('Please insert valid Chamber Address')
      .min(3)
      .required('Chamber Address is required'),
    contactNo: yup
      .number()
      .typeError('Please enter Valid Phone Number')
      .min(3)
      .max(12)
      .required('Phone number is required'),
    futureAppointmentMaxDays: yup
      .number()
      .min(5)
      .required('Future Appointment Max Day Must Be needed'),
    userPerDayMaxAppointment: yup.number().min(5).required('Day Max Appointment Needed'),
  });
  return (
    <View>
      <Text>EditChamberFrom</Text>
    </View>
  );
};

export default EditChamberFrom;
