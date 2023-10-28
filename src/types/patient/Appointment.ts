export interface AppointmentDetail {
  Id: string;
  PatientName: string;
  AgeYear: string;
  AgeMonth: string;
  AgeDay: string;
  Address: string;
  Department?: string;
  Designation?: string;
  MobileNo: string;
  GenderName: string;
  ChamberId: number;
  ShiftId: number;
  StatusId: number;
  SerialNo: number;
  ShiftName: string;
  StatusName: string;
  DoctorId: string;
  AppointmentDate: string;
  AppointmentDateVw: string;
  ConsultancyFees?: number;
  UserId: string;
  DoctorName: string;
  ChamberName?: string;
  ChamberAddress?: string;
  DoctorPhotoPath: string;
  VisitTypeId: number;
  VisitTypeName: string;
  SlotTime?: string;
  SlotInterval?: number;
  StartTime?: string;
  EndTime?: string;
  RunningSerial: number;
  ChamberStatus?: any;
  PaymentStatus: string;
  UploadedOld?: any;
  Prescription?: any;
}

// check

export interface AppointmentCreate {
  Address: string;
  DateOfBirth: string;
  AppointmentDate: string;
  AppointmentFor: string;
  ChamberId: number;
  Covit19Positive: boolean;
  Diabatis: boolean;
  DoctorId: string;
  GenderId: number;
  HasCovit19Symptom: boolean;
  HighBloodPresure: string;
  MobileNo: string;
  PatientName: string;
  PreviousMedicine: string;
  ShiftId: number;
  Smoker: boolean;
  StatusId: number;
  VisitTypeId: number;
}

export interface AppointmentList {
  Id: string;
  DoctorName: string;
  SerialNo: number;
  ShiftId: number;
  ShiftName: string;
  AppointmentDate: string;
  AppointmentDateVw: string;
  VisitTypeId: number;
  VisitTypeName: string;
}

// TODO:

// Today's appointment

// upcoming appointment
