export interface DoctorProfile {
  Id: string;
  Name: string;
  Email: string;
  ContactNo: string;
  Designation: string;
  Gender: string;
  GenderId: number;
  DepartmentId: number;
  DesignationId: number;
  DivisionId?: number;
  Department: string;
  GeneralDescription?: string;
  Qualification: string;
  Experience: string;
  PhotoPath: string;
  NewFees: number;
  ReportFees: number;
  FollowupFees: number;
}
export interface DoctorProfileUpdate {
  Name: string;
  Email: string;
  ContactNo: string;
  DesignationId: number;
  GenderId: number;
  DepartmentId: number;
  GeneralDescription?: string;
  Qualification?: string;
  Experience?: number;
  PhotoPath?: string;
  NewFees?: number;
  ReportFees?: number;
  FollowupFees?: number;
}
