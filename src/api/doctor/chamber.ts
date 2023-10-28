import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { Chamber, ChamberCreate, ChamberListItem } from 'src/types/doctor';

export const chamber = {
  create: (data: ChamberCreate) =>
    axios.post<ApiResponse<ChamberCreate>>(`doctor/chambers/add`, data),
  update: (id: number, data: Chamber) =>
    axios.put<ApiResponse<Chamber>>(`doctor/chambers/update?chamberId=${id}`, data),
  delete: (id: number) =>
    axios.delete<ApiResponse<Chamber>>(`doctor/chambers/delete?chamberId=${id}`),
  getAll: () => axios.get<ApiResponse<ChamberListItem[]>>('doctor/chambers/get-list'),
  getDetails: (id: number) =>
    axios.get<ApiResponse<Chamber>>(`doctor/chambers/get-details?chamberId=${id}`),
};
