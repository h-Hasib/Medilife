import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Field, Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextField } from 'src/components/elements/inputs/TextField';
import { useDoctorLogin } from 'src/hooks/doctor/auth';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';
import * as yup from 'yup';
interface MyFormValues {
  phoneNo: '';
  countryCode: '+88';
}
const loginValidationSchema = yup.object().shape({
  phoneNo: yup
    .string()
    .typeError("That doesn't look like a phone number")
    .min(11)
    .required('A phone number is required'),
});
const LoginFrom = () => {
  const initialValues: MyFormValues = { phoneNo: '', countryCode: '+88' };
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  const { mutateAsync, isLoading } = useDoctorLogin();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await mutateAsync(values);
          if (result.data.Message === 'User OTP sent')
            navigation.navigate('OtpScreen', { phoneNo: values.phoneNo });
        } catch (error) {
          console.log(error);
        } finally {
          setSubmitting(false);
        }
      }}
      validationSchema={loginValidationSchema}>
      {({ handleSubmit, isSubmitting }) => (
        <View>
          <Field
            component={TextField}
            name="phoneNo"
            keyboardType="phone-pad"
            label="Your Mobile Number"
            placeholder="01XXXXXXXXX"
          />
          <Button
            mode="contained"
            buttonColor="#259376"
            style={{ marginTop: 40 }}
            onPress={handleSubmit}
            disabled={isSubmitting}>
            Continue
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default LoginFrom;
