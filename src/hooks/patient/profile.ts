import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';
import { PatientProfile } from 'src/types/patient';

export const usePatientProfileDetails = () =>
  useQuery('patient-profile-details', () => api.patient.profile.getDetails());

export const usePatientProfileUpdate = () =>
  useMutation((updateProfileData: PatientProfile) => api.patient.profile.update(updateProfileData));

//TODO: Hook Upload Photo

//TODO: Hook Delete Account
