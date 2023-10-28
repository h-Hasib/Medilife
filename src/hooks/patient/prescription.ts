import { useQuery } from 'react-query';
import { api } from 'src/api';

export const usePatientGetAllPrescriptions = () =>
  useQuery('patient-all-prescriptions', () => api.patient.prescription.getAll());
export const usePatientGetPrescriptionDetails = (id: string) =>
  useQuery(['patient-details-prescription', id], () => api.patient.prescription.getDetails(id));
