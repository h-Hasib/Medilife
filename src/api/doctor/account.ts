import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { MyAccountPatient } from 'src/types/doctor';

export const account = {
  getTodaysPatients: () =>
    axios.get<ApiResponse<MyAccountPatient>>(`doctor/my-account/todays-patients`),
  getYesterdaysPatients: () =>
    axios.get<ApiResponse<MyAccountPatient>>(`doctor/my-account/yesterdays-patient`),
  getLastWeekPatient: () =>
    axios.get<ApiResponse<MyAccountPatient>>(`doctor/my-account/last-week-patients`),
};
