import { useQuery } from 'react-query';
import { api } from 'src/api';

export const usePatientGetDoctorAllChamber = (id: string) =>
  useQuery(['patient-all-chamber', id], () => api.patient.doctorInfo.getAllChamber(id));
export const usePatientGetAllDoctor = () =>
  useQuery('patient-all-doctor', () => api.patient.doctorInfo.getAllDoctor());
