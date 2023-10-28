import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';
import { AppointmentCreate } from 'src/types/patient';

export const usePatientCreateAppointment = () =>
  useMutation((appointmentData: AppointmentCreate) =>
    api.patient.appointment.create(appointmentData),
  );

export const usePatientGetAllAppointment = () =>
  useQuery('patient-appointments', () => api.patient.appointment.getAll());

export const usePatientGetAppointmentDetail = (id: string) =>
  useQuery(['patient-appointment-detail', id], () => api.patient.appointment.get(id));

export const usePatientGetTodayAppointment = () =>
  useQuery('patient-today-appointment', () => api.patient.appointment.getToday());

export const usePatientGetUpcomingAppointment = () =>
  useQuery('patient-upcoming-appointment', () => api.patient.appointment.upcoming());

export const usePatientDeleteAppointment = () =>
  useMutation((id: string) => api.patient.appointment.delete(id));
