import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useDoctorAllAppointment } from 'src/hooks/doctor/appointment';
import { AppointmentListItem } from 'src/types/doctor/Appointment';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';
import AppointmentList from './AppointmentList';
interface Props {
  chamberId: number;
  shiftId: number;
  fromDate: string;
  toDate: string;
}
const AppointmentWithinRangeList = (param: Props) => {
  const data = useDoctorAllAppointment(param);
  const appointments: AppointmentListItem[] = data.data?.data?.Data || [];
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  return <AppointmentList data={appointments} navigation={navigation} />;
};

export default AppointmentWithinRangeList;
