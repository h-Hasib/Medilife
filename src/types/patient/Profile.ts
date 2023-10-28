export interface PatientProfile {
  Avatar?: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Age?: number;
  Email?: string;
  GenderId: number;
  Address?: string;
  DOB?: string;
  BloodGroupId: number;
  Language?: string;
  Phone?: string;
  Diabatis?: boolean;
  BP?: string;
  Smoking?: boolean;
  Allergies?: boolean;
  FamilyHeartDisease?: boolean;
  COVIDVaccinated?: boolean;
  Occupation?: string;
  NeedSpectaculars?: boolean;
  CardioAttack?: boolean;
  HBHistory?: boolean;
  Tenuous?: boolean;
  Accident?: boolean;
  VaccinationInfo?: string;
}

export interface InitialBasicInfo {
  FirstName: string;
  LastName: string;
  Email?: string;
  GenderId: number;
  BloodGroupId: number;
  DOB?: string;
}

export interface EditPersonalInfo {
  GenderId: number;
  DOB?: string;
  BloodGroupId: number;
  Address?: string;
  Language?: string;
  Occupation?: string;
}

export interface EditAccountInfo {
  FirstName: string;
  LastName: string;
  Email?: string;
}

export interface EditHealthInfo {
  Diabatis?: boolean;
  BP?: string;
  Smoking?: boolean;
  Allergies?: boolean;
  FamilyHeartDisease?: boolean;
  COVIDVaccinated?: boolean;
  NeedSpectaculars?: boolean;
  CardioAttack?: boolean;
  HBHistory?: boolean;
  Tenuous?: boolean;
  Accident?: boolean;
  VaccinationInfo?: string;
}
