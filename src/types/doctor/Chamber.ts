export interface Chamber {
  DoctorId?: string;
  ChamberName: string;
  ChamberAddress: string;
  ContactNo: string;
  ChamberVisitStartTime: string;
  ChamberVisitEndTime: string;
  Notes: string;
  MorningStartTime: string;
  MorningEndTime: string;
  IsMorningShift: boolean;
  IsEveningShift: boolean;
  IsOnlineAppointmentAllow: boolean;
  MorningShiftMaxPatient: number;
  EveningShiftMaxPatient: number;
  IsFutureAppointmentAllow: boolean;
  FutureAppointmentMaxDays?: number;
  SlotTimeInMinute: number;
  UserPerDayMaxAppointment?: number;
  ChamberId: number;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
}

export interface ChamberListItem {
  Id: number;
  DoctorId: string;
  ChamberName: string;
  ChamberAddress: string;
  ContactNo: string;
  ChamberVisitStartTime: string;
  ChamberVisitEndTime: string;
  Notes: string;
  CreatedAt?: any;
  UpdatedAt?: any;
  MorningStartTime: string;
  MorningEndTime: string;
  IsMorningShift: boolean;
  IsEveningShift: boolean;
  IsOnlineAppointmentAllow: boolean;
  MorningShiftMaxPatient?: number;
  EveningShiftMaxPatient?: number;
  IsFutureAppointmentAllow: boolean;
  FutureAppointmentMaxDays: number;
  SlotTimeInMinute: number;
  UserPerDayMaxAppointment?: number;
}

export interface ChamberCreate {
  doctorId: string;
  chamberName: string;
  isMorningShift: boolean;
  morningStartTime: string;
  morningEndTime: string;
  morningShiftMaxPatient: number;
  isEveningShift: boolean;
  eveningShiftMaxPatient: number;
  isOnlineAppointmentAllow: boolean;
  isFutureAppointmentAllow: boolean;
  futureAppointmentMaxDays: number;
  contactNo: string;
  slotTimeInMinute: number;
  userPerDayMaxAppointment: number;
  chamberAddress: string;
  notes?: string;
  chamberVisitStartTime: string;
  chamberVisitEndTime: string;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
}
