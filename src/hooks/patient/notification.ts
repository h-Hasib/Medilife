import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';

export const usePatientGetAllNotification = () =>
  useQuery('patient-all-notifications', () => api.patient.notification.getAll());
export const usePatientNotificationDetails = (id: number) =>
  useQuery(['patient-notification-details', id], () => api.patient.notification.getDetails(id));
export const usePatientDeleteNotification = () =>
  useMutation((id: number) => api.patient.notification.delete(id));
