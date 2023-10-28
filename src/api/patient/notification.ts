import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { Notification } from 'src/types/patient';

export const notification = {
  getAll: () => axios.get<ApiResponse<Notification[]>>(`/patient/notification/get-list`),
  getDetails: (id: number) =>
    axios.get<ApiResponse<Notification>>(`/patient/notification/get-details?id=${id}`),
  delete: (id: number) => axios.delete(`/patient/notification/delete-notification?id=${id}`),
};
