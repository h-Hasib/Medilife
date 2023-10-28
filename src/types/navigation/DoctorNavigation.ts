export type DoctorRootStackParamList = {
  MyChambersScreen: undefined;
  DoctorAuthStack: undefined;
  DoctorTabNavigation: undefined;
  NotificationScreen: undefined;
  TodaysPatientsScreen: undefined;
  PatientAppointmentDetailsScreen: undefined | { appointmentId: string };
  PatientAccountsScreen: undefined;
  ListAppointmentsScreen: undefined;
  PatientHistoryScreen: undefined;
  HomeScreen: undefined;
  AddPatientScreen: undefined;
  ProfileScreen: undefined;
  LoginScreen: undefined;
  OtpScreen: undefined | { phoneNo: string };
  AddAccountScreen: undefined;
  RegistrationScreen: undefined;
  RegistrationSuccessScreen: undefined;
};
