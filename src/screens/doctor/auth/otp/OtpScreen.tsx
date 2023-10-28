import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { Button, Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import { Body, Container } from 'src/components/containers/auth-containers';
import { setAccessToken } from 'src/config/temp-config';
import { useDoctorVerifyOtp } from 'src/hooks/doctor/auth';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';
type Props = {
  route: RouteProp<DoctorRootStackParamList, 'OtpScreen'>;
};

const OtpScreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  const contactNo = route.params?.phoneNo;
  const { mutateAsync, isLoading } = useDoctorVerifyOtp();
  const [otpValue, setOtpValue] = useState('');

  const handleChange = (code: string) => {
    try {
      if (code.length <= 4) {
        setOtpValue(code);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleSubmit = async () => {
    try {
      const res = await mutateAsync({ phoneNo: contactNo as string, otp: parseInt(otpValue) });
      if (res.data.ApproveStatus) {
        setAccessToken(res.data.Token.AccessToken);
        navigation.navigate('DoctorTabNavigation');
      } else {
        console.log('Render Here Congrats Page!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <Container>
      <Body>
        <View
          style={{
            width: '85%',
            backgroundColor: '#ffffff',
            paddingHorizontal: 30,
            paddingTop: 20,
            paddingBottom: 70,
            alignSelf: 'center',
          }}>
          <View style={ArStyles.columnCenter}>
            <Text
              style={{
                color: '#525252',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontWeight: '700',
                paddingBottom: 20,
                fontSize: 15,
                lineHeight: 16,
              }}>
              A
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                  fontWeight: '800',
                  fontSize: 17,
                  lineHeight: 16,
                }}>
                Verification OTP
              </Text>
              code is sent to your phone number, please check your phone and find the code
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontWeight: '900',
                fontSize: 42,
                // lineHeight: 28,
              }}>
              OTP
            </Text>
          </View>
          <View style={{ width: '100%' }}>
            <OtpInputs
              inputStyles={{
                // color: activeColors.textPrimary,
                // backgroundColor: activeColors.secondary,
                paddingHorizontal: '8%',
                borderRadius: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                // borderColor: activeColors.inputBorder,
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                shadowColor: '#838383',
                shadowOffset: {
                  width: 0,
                  height: 18,
                },
                shadowOpacity: 0.25,
                shadowRadius: 20.0,
                elevation: 24,
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
              numberOfInputs={4}
              handleChange={handleChange}
              autofillFromClipboard={true}
            />
          </View>
          <View>
            <Button
              mode="contained"
              buttonColor="#259376"
              style={{ marginTop: 40 }}
              onPress={handleSubmit}
              disabled={isLoading}>
              Continue
            </Button>
          </View>
        </View>
      </Body>
    </Container>
  );
};
export default OtpScreen;
