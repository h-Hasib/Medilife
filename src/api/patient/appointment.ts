import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { AppointmentCreate, AppointmentDetail, AppointmentList } from 'src/types/patient';

export const appointment = {
  create: (appointmentData: AppointmentCreate) => {
    return axios.post('/patient/appointments/create-appointment', appointmentData);
  },
  getAll: () => axios.get<ApiResponse<AppointmentList[]>>(`/patient/appointments/get-list`),
  get: (id: string) =>
    axios.get<ApiResponse<AppointmentDetail>>(
      `/patient/appointments/get-details?appointmentId=${id}`,
    ),
  getToday: () =>
    axios.get<ApiResponse<AppointmentDetail[]>>(`/patient/appointments/todays-appointments`),
  upcoming: () =>
    axios.get<ApiResponse<AppointmentDetail[]>>(`/patient/appointments/upcoming-appointments`),
  delete: (id: string) =>
    axios.delete(`/patient/appointments/delete-appointment?appointmentId=${id}`),
};
