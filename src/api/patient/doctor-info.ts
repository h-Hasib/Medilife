import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { DoctorChamberList, DoctorList } from 'src/types/patient';

export const doctorInfo = {
  getAllChamber: (id: string) =>
    axios.get<ApiResponse<DoctorChamberList[]>>(`/patient/doctor-chamber/get-list?doctorId=${id}`),
  getAllDoctor: () => axios.get<ApiResponse<DoctorList[]>>(`patient/doctor-list/get-list`),
};
