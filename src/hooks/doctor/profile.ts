import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';
import { DoctorProfileUpdate } from 'src/types/doctor/Profile';

export const useDoctorProfileUpdate = () =>
  useMutation((data: DoctorProfileUpdate) => api.doctor.profile.update(data));
export const useDoctorProfileDetails = () =>
  useQuery('doctor-profile-details', () => api.doctor.profile.getDetails());
