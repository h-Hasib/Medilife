import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from 'src/api';
import { Chamber, ChamberCreate } from 'src/types/doctor';

export const useDoctorChamberCreate = () =>
  useMutation((data: ChamberCreate) => api.doctor.chamber.create(data));

// export const useDoctorChamberUpdate = () =>
//   useMutation((data: Chamber) => api.doctor.chamber.update(data.ChamberId, data));

export const useDoctorChamberUpdate = () =>
  useMutation(({ id, data }: { id: number; data: Chamber }) => api.doctor.chamber.update(id, data));

export const useDoctorChamberDelete = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => api.doctor.chamber.delete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('DoctorChamber');
    },
  });
};
export const useDoctorGetAllChamber = () =>
  useQuery('DoctorChamber', () => api.doctor.chamber.getAll());

export const useDoctorChamberDetails = (chamberId: number) =>
  useQuery(['doctor-chamber-details', chamberId], () => api.doctor.chamber.getDetails(chamberId));
