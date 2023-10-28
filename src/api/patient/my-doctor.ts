import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { MyDoctorList } from 'src/types/patient';

export const myDoctor = {
  getAllFavoriteDoctor: () =>
    axios.get<ApiResponse<MyDoctorList[]>>(`/patient/my-doctors/get-list`),
  addFavoriteDoctor: (id: string) => axios.post(`/patient/my-doctors/add-favorite?doctorId=${id}`),
  deleteFavorite: (id: string) =>
    axios.delete(`/patient/my-doctors/delete-favorite?doctorId=${id}`),
};
