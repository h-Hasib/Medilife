import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { Prescription, PrescriptionList } from 'src/types/patient';

export const prescription = {
  getAll: () => axios.get<ApiResponse<PrescriptionList[]>>(`/patient/prescriptions/get-list`),
  getDetails: (id: string) => axios.get<ApiResponse<Prescription>>(`/patient/prescriptions/${id}`),
};
