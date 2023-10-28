import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';
import { NotificationCreate } from 'src/types/doctor';

export const useDoctorNotificationCreate = () =>
  useMutation((data: NotificationCreate) => api.doctor.notification.create(data));

export const useDoctorNotification = () =>
  useQuery('doctor-notification', () => api.doctor.notification.getAll());
