import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { Appointment, AppointmentCreate, AppointmentListItem } from 'src/types/doctor';

export interface DoctorGetAllAppointment {
  chamberId: number;
  shiftId: number;
  fromDate: string | Date;
  toDate: string | Date;
}

export interface DoctorGetAppointment {
  chamberId: number;
  shiftId: number;
}
export const appointment = {
  create: (data: AppointmentCreate) =>
    axios.post<ApiResponse<AppointmentCreate>>(`doctor/appointments/create-appointment`, data),

  getAll: ({ chamberId, shiftId, fromDate, toDate }: DoctorGetAllAppointment) =>
    axios.get<ApiResponse<AppointmentListItem[]>>(
      `doctor/appointments/get-list?chamberId=${chamberId}&shiftId=${shiftId}&fromDate=${fromDate}&toDate=${toDate}`,
    ),
  getByChamberIdShiftId: ({ chamberId, shiftId }: DoctorGetAppointment) =>
    axios.get<ApiResponse<AppointmentListItem[]>>(
      `doctor/appointments/todays-patients?chamberId=${chamberId}&shiftId=${shiftId}`,
    ),
  getDetails: (appointmentId: string) =>
    axios.get<ApiResponse<Appointment>>(
      `doctor/appointments/get-details?appointmentId=${appointmentId}`,
    ),
};
