import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { DoctorProfile, DoctorProfileUpdate } from 'src/types/doctor/Profile';

export const profile = {
  update: (data: DoctorProfileUpdate) =>
    axios.put<ApiResponse<DoctorProfileUpdate>>(`doctor/profile/update`, data),

  getDetails: () => axios.get<ApiResponse<DoctorProfile>>(`doctor/profile/get-details`),
};
