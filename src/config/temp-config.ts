// import { AppointmentCreate, AuthLogin, ChamberCreate } from 'src/types/doctor';
import { AppointmentCreate, FamilyMember, PatientProfile } from 'src/types/patient';

export let access_token = '';
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDAwMDAwMDAiLCJqdGkiOiJmNzVkOGVmMS0yMjY5LTQwYWItOWFhOC0wMWZjOWEzNDQyM2YiLCJzaWQiOiIxMDQzODljMy0zOGI5LTQzNDQtYTFkMy03MGU5YjIwM2ZkYWMiLCJSb2xlSWQiOiJDZkRKOEVJdlFIazRDdVpPdklFUlVvR2dNdk53b3J1NHpBQVhCWE1fOFJaOWk0MnUyeC11RjBacnJuYkVuUjhlemR6aVZ6NTBOQjg5RVpreXYtNEQ4bkZyRkROYmpLLTFxYy0xeTBVZVNUOV80UHpvWGNsS0RuRE90N0xMLTUzMkRZQ2tUZyIsImV4cCI6MTY4ODkxNTIyNiwiaXNzIjoiaHR0cHM6Ly9tZWRpbGlmZWFwcC5jb20iLCJhdWQiOiJodHRwczovL21lZGlsaWZlYXBwLmNvbSJ9.X8RXWKK6Xk';
export function setAccessToken(token: string) {
  access_token = token;
}

// export const chamberCreateData: ChamberCreate = {
//   chamberName: 'mediacal 2222 ',
//   isMorningShift: true,
//   morningStartTime: '2023-03-04T14:09:56Z',
//   morningEndTime: '2023-03-04T14:09:56Z',
//   morningShiftMaxPatient: 10,
//   isEveningShift: true,
//   eveningShiftMaxPatient: 20,
//   isOnlineAppointmentAllow: true,
//   isFutureAppointmentAllow: true,
//   futureAppointmentMaxDays: 15,
//   contactNo: '01749237060',
//   slotTimeInMinute: 5,
//   userPerDayMaxAppointment: 50,
//   chamberAddress: 'Dhaka Medical',
//   notes: '',
//   chamberVisitStartTime: '2023-03-04T14:09:56Z',
//   chamberVisitEndTime: '2023-03-04T14:09:56Z',
//   Friday: true,
//   Saturday: true,
//   Sunday: true,
//   Monday: true,
//   Tuesday: true,
//   Wednesday: true,
//   Thursday: true,
// };

// export const appointmentCreate: AppointmentCreate = {
//   patientName: 'Razwan test V2 ',
//   address: 'Dhaka',
//   mobileNo: '01948493149',
//   ageYear: '2001',
//   genderName: 'Male',
//   consultancyFees: 1,
//   chamberId: 131,
//   shiftId: 2,
//   appointmentDate: '2023-3-14',
// };
export const ChamberId = 178;

export const Id = '6b9021ea-3ee9-4bb4-e6fa-08db6d85d0d8';

export const DoctorId = '6f912bcd-ee7f-4fb3-ba16-f7453797580a';

// export const AuthLoginData: AuthLogin = {
//   phoneNo: '00000000000',
//   countryCode: '+88',
// };

export const appointmentId = '4aabd971-8ba8-42b3-1240-08db6d7134c3';

export const patientProfileUpdateData: PatientProfile = {
  Avatar: '',
  FirstName: 'Munir',
  LastName: 'Hassan',
  PhoneNumber: '01840048486',
  Age: 25,
  Email: 'mhswagboy@gmail.com',
  GenderId: 1,
  Address: '',
  DOB: '',
  BloodGroupId: 1,
  Language: 'English',
  Phone: '01001778899',
  Diabatis: false,
  BP: 'true',
  Smoking: false,
  Allergies: true,
  FamilyHeartDisease: false,
  COVIDVaccinated: false,
  Occupation: 'false',
  NeedSpectaculars: false,
  CardioAttack: false,
  HBHistory: false,
  Tenuous: false,
  Accident: false,
  VaccinationInfo: 'false',
};

export const familyMemberAddData: FamilyMember = {
  FullName: 'Mr Cofee pot',
  Address: 'string@bari',
  AgeTypeId: 1,
  GenderId: 1,
  DateOfBirth: '2006-09-25T03:34:44.703Z',
  ContactNumber: '07718989323',
  Email: ' ',
  RelationshipId: 1,
  Height: '12',
  Weight: '23',
  IsSmoker: false,
  HasDiabetis: false,
  IsCovidVaccinated: false,
  HasHighBloodPresure: false,
  CreatedAt: '2022-02-14T20:27:14.576Z',
  UpdatedAt: '2022-09-26T08:52:20.668Z',
  Avatar: '',
};
export const familyMemberUpdateData: FamilyMember = {
  FullName: 'Mr Changed',
  Address: 'string',
  AgeTypeId: 1,
  GenderId: 1,
  DateOfBirth: '2006-09-25T03:34:44.703Z',
  ContactNumber: '07718989323',
  Email: ' ',
  RelationshipId: 1,
  Height: '167',
  Weight: '63',
  IsSmoker: false,
  HasDiabetis: false,
  IsCovidVaccinated: false,
  HasHighBloodPresure: false,
  CreatedAt: '2022-02-14T20:27:14.576Z',
  UpdatedAt: '2022-09-26T08:52:20.668Z',
  Avatar: '',
};

export const loginCredentials = {
  CountryCode: '+88',
  PhoneNo: '01840048486',
};

export const verifyCredentials = {
  PhoneNo: '01840048486',
  Otp: 1111,
};

export const PatientAppointmentCreateData: AppointmentCreate = {
  Address: 'Dhaka Bangladesh',
  DateOfBirth: '1995-10-11',
  AppointmentDate: '2023-06-28',
  AppointmentFor: 'self',
  ChamberId: 177,
  Covit19Positive: false,
  Diabatis: false,
  DoctorId: '6f912bcd-ee7f-4fb3-ba16-f7453797580a',
  GenderId: 1,
  HasCovit19Symptom: false,
  HighBloodPresure: 'true',
  MobileNo: '011777777777771',
  PatientName: 'MuxxxxxXXXXn',
  PreviousMedicine: 'something',
  ShiftId: 2,
  Smoker: false,
  StatusId: 1,
  VisitTypeId: 1,
};
