import { useQuery } from 'react-query';
import { api } from 'src/api';

export const useDoctorAccountTodays = () =>
  useQuery('doctor-account', () => api.doctor.account.getTodaysPatients());

export const useDoctorAccountYesterdays = () =>
  useQuery('doctor-account-yesterday', () => api.doctor.account.getYesterdaysPatients());

export const useDoctorAccountLastWeek = () =>
  useQuery('doctor-account-last-week', () => api.doctor.account.getLastWeekPatient());
