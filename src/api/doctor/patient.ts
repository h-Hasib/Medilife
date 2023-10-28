import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { PatientHistory } from 'src/types/doctor';

export const patient = {
  // getAll: () => axios.get<ApiResponse<PatientHistory[]>>(`doctor/my-patients/get-list`),
  getHistory: () => axios.get<ApiResponse<PatientHistory[]>>(`doctor/patient-history`),
  // getAllByPageNo: (pageNo: number) =>
  //   axios.get<ApiResponse<PatientHistory[]>>(`doctor/appointments/all-patients?pageNo=${pageNo}`),
};
