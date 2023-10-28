import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { PatientProfile } from 'src/types/patient';

export const profile = {
  getDetails: () => axios.get<ApiResponse<PatientProfile>>(`/patient/profile/get-details`),
  update: (updateProfileData: PatientProfile) =>
    axios.put(`/patient/profile/update`, updateProfileData),

  //TODO: Upload Photo

  //TODO: Delete Account
};
