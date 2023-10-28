export interface Appointment {
  Id: string;
  PatientName: string;
  Address: string;
  MobileNo: string;
  AgeYear: string;
  ShiftId: number;
  SerialNo: number;
  SlotTime?: string;
  ShiftName: string;
  AppointmentDate: string;
  AppointmentDateVw: string;
  VisitTypeId: number;
  VisitTypeName: string;
}

export interface AppointmentListItem {
  Id: string;
  PatientName: string;
  PatientId?: number;
  MobileNo: string;
  AgeYear: string;
  GenderName?: string;
}

export interface AppointmentCreate {
  // Id: string;
  // DoctorId: string;
  // PatientName: string;
  // Address: string;
  // MobileNo: string;
  // AgeYear: string;
  // AgeMonth?: string;
  // AgeDay?: string;
  // GenderName: string;
  // ChamberId: number;
  // ShiftId: number;
  // AppointmentDate: string;
  // CreatedDate?: string;
  // StatusId?: number;
  // VisitTypeId: number;
  // ConsultancyFees: number;
  // UserId?: string;
  // SerialNo: number;
  // AppointmentYear: number;
  // AppointmentMonth: number;
  // AppointmentDay: number;
  // SlotTime?: string;
  // SlotInterval?: number;
  // StartTime?: string;
  // WeightInKg?: string;
  // HighBloodPresure?: boolean;
  // Diabetis?: boolean;
  // Covit19Positive?: boolean;
  // HasCovit19Symptom?: boolean;
  // Smoker?: boolean;
  // PreviousMedicine?: string;

  patientName: string;
  address: string;
  mobileNo: string;
  ageYear: string;
  genderName: string;
  consultancyFees: number;
  chamberId: number;
  shiftId: number;
  appointmentDate: string;
}
