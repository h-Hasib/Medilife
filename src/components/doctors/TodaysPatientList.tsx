import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useDoctorAppointment } from 'src/hooks/doctor/appointment';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';
import AppointmentList from './AppointmentList';
import { AppointmentListItem } from 'src/types/doctor';

interface Props {
  shiftId: number;
  chamberId: number;
}
export const TodaysPatientList = (param: Props) => {
  const data = useDoctorAppointment(param);
  const appointments: AppointmentListItem[] = data.data?.data?.Data || [];
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  return <AppointmentList data={appointments} navigation={navigation} />;
};
