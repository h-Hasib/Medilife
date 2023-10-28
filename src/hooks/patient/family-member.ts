import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';
import { FamilyMember } from 'src/types/patient';

export const usePatientGetAllFamilyMember = () =>
  useQuery('patient-family-members', () => api.patient.familyMember.getAll());

export const usePatientGetFamilyMemberDetail = (id: number) =>
  useQuery(['patient-family-member-detail', id], () => api.patient.familyMember.getDetails(id));

export const usePatientAddFamilyMember = () =>
  useMutation((familyMemberData: FamilyMember) => api.patient.familyMember.add(familyMemberData));

export const usePatientUpdateFamilyMember = () =>
  useMutation(({ id, data }: { id: number; data: FamilyMember }) =>
    api.patient.familyMember.update(id, data),
  );

export const usePatientDeleteFamilyMember = () =>
  useMutation((id: number) => api.patient.familyMember.delete(id));

//TODO: usePatientFamilyMemberUploadPhoto
//id: number, familyMemberUpdateData: FamilyMember
