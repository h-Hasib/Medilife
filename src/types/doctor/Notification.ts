export interface NotificationCreate {
  title: string;
  message: string;
  fromDate: string;
  toDate: string;
}
export interface NotificationListItem {
  Message: string;
  CreatedAt: string;
}
