import React from 'react';
import { Image } from 'react-native';

interface Images {
  [index: string]: any;
}

export const images: Images = {
  logo: require('../../assets/images/logo.png'),
  bgAuth: require('../../assets/images/bg_auth.png'),
  bgHome: require('../../assets/images/bg_home.png'),
  todaysPatient: require('../../assets/images/todays_patient.png'),
  patientsAccounts: require('../../assets/images/patients_accounts.png'),
  listOfAppointments: require('../../assets/images/list_of_appointments.png'),
  myChamber: require('../../assets/images/my_chamber.png'),
  manageAppointments: require('../../assets/images/manage_appointments.png'),
  findPatientHistory: require('../../assets/images/find_patient_history.png'),
  PatientMyDoctors: require('../../assets/images/patient/service1.png'),
  doctorProfile: require('../../assets/images/defaultImage.png'),
};

interface ImgProps {
  name: keyof Images;
  [x: string]: any;
}

export const Img = ({ name, ...rest }: ImgProps) => <Image {...rest} source={images[name]} />;
