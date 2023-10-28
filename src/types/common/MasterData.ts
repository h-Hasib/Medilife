export interface MasterData {
  relationshipType: MData[];
  gender: MData[];
  appointmentShift: MData[];
  appointmentStatus: MData[];
  visitType: MData[];
  ageType: MData[];
  deptDesignation: MData[];
  patientType: MData[];
  Division: MData[];
  BloodType: MData[];
}

export interface MData {
  Id: number;
  Name: string;
  InputHelpTypeId?: number;
}

export type Any = any;
