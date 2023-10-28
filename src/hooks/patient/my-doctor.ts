import { useMutation, useQuery } from 'react-query';
import { api } from 'src/api';

export const usePatientGetAllFavoriteDoctor = () =>
  useQuery('patient-all-favorite-doctors', () => api.patient.myDoctor.getAllFavoriteDoctor());
export const usePatientAddFavoriteDoctor = () =>
  useMutation((id: string) => api.patient.myDoctor.addFavoriteDoctor(id));
export const usePatientDeleteFavoriteDoctor = () =>
  useMutation((id: string) => api.patient.myDoctor.deleteFavorite(id));
