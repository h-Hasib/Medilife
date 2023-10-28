import React from 'react';
import { Text, View } from 'react-native';
import { EditHealthInfo } from 'src/types/patient';
import * as yup from 'yup';

const EditHealthInfoForm = () => {
  const initialValues: EditHealthInfo = {
    Diabatis: false,
    BP: 'false',
    Smoking: false,
    Allergies: false,
    FamilyHeartDisease: false,
    COVIDVaccinated: false,
    NeedSpectaculars: false,
    CardioAttack: false,
    HBHistory: false,
    Tenuous: false,
    Accident: false,
    VaccinationInfo: '',
  };

  const validationSchema = yup.object().shape({
    Diabatis: yup.boolean().typeError('Please insert valid input'),
    BP: yup.string().typeError('Please insert valid input'),
    Smoking: yup.boolean().typeError('Please insert valid input'),
    Allergies: yup.boolean().typeError('Please insert valid input'),
    FamilyHeartDisease: yup.boolean().typeError('Please insert valid input'),
    COVIDVaccinated: yup.boolean().typeError('Please insert valid input'),
    NeedSpectaculars: yup.boolean().typeError('Please insert valid input'),
    CardioAttack: yup.boolean().typeError('Please insert valid input'),
    HBHistory: yup.boolean().typeError('Please insert valid input'),
    Tenuous: yup.boolean().typeError('Please insert valid input'),
    Accident: yup.boolean().typeError('Please insert valid input'),
    VaccinationInfo: yup.string().typeError('Please insert valid input'),
  });
  return (
    <View>
      <Text>EditHealthInfoForm</Text>
    </View>
  );
};

export default EditHealthInfoForm;
