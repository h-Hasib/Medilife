import { useQuery } from 'react-query';
import { api } from 'src/api';

// export const useDoctorAllPatient = () =>
//   useQuery('doctor-patient-by-page', () => api.doctor.patient.getAll());

// export const useDoctorPatientByPage = (pageNo: number) =>
//   useQuery(['doctor-all-patient', pageNo], () => api.doctor.patient.getAllByPageNo(pageNo));

export const useDoctorPatientHistory = () =>
  useQuery('doctor-patient-history', () => api.doctor.patient.getHistory());
