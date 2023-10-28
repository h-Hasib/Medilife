import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { FamilyMember } from 'src/types/patient';

export const familyMember = {
  getAll: () => axios.get<ApiResponse<FamilyMember[]>>(`/patient/family-members/get-list`),
  getDetails: (id: number) =>
    axios.get<ApiResponse<FamilyMember>>(`/patient/family-members/get-details?Id=${id}`),
  add: (familyMemberData: FamilyMember) =>
    axios.post('/patient/family-members/add-member', familyMemberData),
  delete: (id: number) => axios.delete(`/patient/family-members/delete-member/${id}`),
  update: (id: number, familyMemberUpdateData: FamilyMember) =>
    axios.put(`/patient/family-members/update-member?Id=${id}`, familyMemberUpdateData),
};
