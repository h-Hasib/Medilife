export interface Prescription {
  Id: string;
  DoctorId: string;
  PatientId: string;
  PatientName: string;
  VisitNo: number;
  TreatmentOn: string;
  DrugHistory: string;
  PhysicalFindings: string;
  Instructions: string;
  ReferralOrComment: string;
  FollowUpAfter: string;
  TotalVisit: number;
  Age: string;
  PatientAddress: string;
  Phone: string;
  Tests: Test[];
  Drugs: Drug[];
  Notes: Note[];
}

export interface Drug {
  Id: string;
  Dose: string;
  DrugFullName: string;
  GenericId: number;
  GenericName: string;
  BrandId: number;
  StrengthName: string;
  SerialNo: number;
  CompanyName: string;
}

export interface Test {
  Id: string;
  TestId: number;
  Name: string;
  SerialNo: number;
  BlobName?: any;
  FileDisplayName?: any;
}

export interface Note {
  id: string;
  prescriptionId: string;
  name?: string;
}

export interface PrescriptionList {
  Id: string;
  PatientId: string;
  DoctorName: string;
  PatientName: string;
  TreatmentDate: string;
  VisitNo: number;
  PhotoPath: string;
}
