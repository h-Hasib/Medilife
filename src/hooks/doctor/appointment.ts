import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';
import { DoctorGetAllAppointment, DoctorGetAppointment } from 'src/api/doctor';
import { AppointmentCreate } from 'src/types/doctor';

export const useDoctorAppointmentCreate = () =>
  useMutation((data: AppointmentCreate) => api.doctor.appointment.create(data));

export const useDoctorAllAppointment = (props: DoctorGetAllAppointment) =>
  useQuery(['doctor-all-appointment', props], () => api.doctor.appointment.getAll(props));

export const useDoctorAppointment = (props: DoctorGetAppointment) =>
  useQuery(['doctor-appointment', props], () =>
    api.doctor.appointment.getByChamberIdShiftId(props),
  );
export const useDoctorAppointmentDetails = (appointmentId: string) =>
  useQuery(['doctor-appointment-details', appointmentId], () =>
    api.doctor.appointment.getDetails(appointmentId),
  );
