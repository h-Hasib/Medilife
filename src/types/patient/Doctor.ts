export interface DoctorChamberList {
  DoctorId: string;
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
  MorningShiftMaxPatient?: any;
  EveningShiftMaxPatient?: any;
  IsFutureAppointmentAllow: boolean;
  FutureAppointmentMaxDays: number;
  SlotTimeInMinute: number;
  UserPerDayMaxAppointment?: any;
  ChamberId: number;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
}

export interface DoctorList {
  Id: string;
  Name: string;
  Email: string;
  ContactNo: string;
  Designation: string;
  Department: string;
  DepartmentId: number;
  DesignationId: number;
  Gender: string;
  DivisionId?: any;
  AllowOnlineAppointment: boolean;
  Qualification: string;
  Experience: string;
  PhotoPath?: any;
  NewFees?: any;
  ReportFees?: any;
  FollowupFees?: any;
}
