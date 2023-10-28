export interface MyDoctorList {
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
