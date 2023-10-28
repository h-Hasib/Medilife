import axios from 'src/services/axios';
import { ApiResponse } from 'src/types/common/ApiResponse';
import { NotificationCreate, NotificationListItem } from 'src/types/doctor';

export const notification = {
  create: (data: NotificationCreate) =>
    axios.post<ApiResponse<NotificationCreate>>(`doctor/notifications/add-notification`, data),

  getAll: () => axios.get<ApiResponse<NotificationListItem[]>>('doctor/notifications/get-list'),
};
