import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import Header from 'src/components/common/Header';
import { InfoBox } from 'src/components/common/InfoBox';
import { ShadowBox } from 'src/components/common/ShadowBox';
import { useDoctorAppointmentDetails } from 'src/hooks/doctor/appointment';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';
type Props = {
  route: RouteProp<DoctorRootStackParamList, 'PatientAppointmentDetailsScreen'>;
};
const TodaysPatientDetailsScreen: React.FC<Props> = ({ route }) => {
  const data = useDoctorAppointmentDetails(route.params?.appointmentId ?? '');
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  return (
    <View style={ArStyles.safeAreaView}>
      <Header HeaderTitle="Today's Patients Details" onPress={() => navigation.pop()} />
      <InfoBox mode="secondary" hasStarBox={true}>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: '800', paddingVertical: 3, color: '#2F5C3D' }}>
            Process
          </Text>
          <Text style={{ fontSize: 12, paddingVertical: 5, color: '#fff' }}>
            Select Available Doctors {'>'} Filter Doctor {'>'} Create Appointment
          </Text>
        </View>
      </InfoBox>
      <ShadowBox>
        <View style={ArStyles.rowCenter}>
          <Text style={{ fontWeight: '800' }}>Need to Add a drop down here</Text>
        </View>
        <View style={ArStyles.rowSpaceBetween}>
          <View style={ArStyles.columnStart}>
            <View>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.PatientName}
              </Text>
            </View>
            <View style={ArStyles.rowStart}>
              <Text>Appointment at </Text>
              <Text>{data?.data?.data.Data.SlotTime ?? 'N/A'}</Text>
            </View>
            <View>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.VisitTypeName}
              </Text>
            </View>
          </View>
          <View style={ArStyles.row}>
            <Avatar.Image size={38} source={require('src/assets/images/marketplace/aroggo.png')} />
            <Text variant="bodySmall" style={{ fontWeight: '700', fontSize: 11 }}>
              Start Call
            </Text>
          </View>
        </View>
        <View style={{ paddingVertical: 15 }}>
          <View
            style={[
              { borderWidth: 1.5, borderBottomWidth: 0, borderColor: '#BCBCBC' },
              ArStyles.rowStart,
            ]}>
            <View
              style={{
                borderRightWidth: 1.5,
                borderColor: '#BCBCBC',
                width: '25%',
                paddingLeft: 20,
              }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800', color: '#3C9979' }}>
                Serial
              </Text>
            </View>
            <View style={{ borderWidth: 0, borderColor: '#BCBCBC', paddingLeft: 20 }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.SerialNo ?? 'N/A'}
              </Text>
            </View>
          </View>
          <View
            style={[
              { borderWidth: 1.5, borderBottomWidth: 0, borderColor: '#BCBCBC' },
              ArStyles.rowStart,
            ]}>
            <View
              style={{
                borderRightWidth: 1.5,
                borderColor: '#BCBCBC',
                width: '25%',
                paddingLeft: 20,
              }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800', color: '#3C9979' }}>
                Name
              </Text>
            </View>
            <View style={{ borderWidth: 0, borderColor: '#BCBCBC', paddingLeft: 20 }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.PatientName}
              </Text>
            </View>
          </View>
          <View
            style={[
              { borderWidth: 1.5, borderBottomWidth: 0, borderColor: '#BCBCBC' },
              ArStyles.rowStart,
            ]}>
            <View
              style={{
                borderRightWidth: 1.5,
                borderColor: '#BCBCBC',
                width: '25%',
                paddingLeft: 20,
              }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800', color: '#3C9979' }}>
                Age
              </Text>
            </View>
            <View style={{ borderWidth: 0, borderColor: '#BCBCBC', paddingLeft: 20 }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.AgeYear}
              </Text>
            </View>
          </View>
          <View
            style={[
              { borderWidth: 1.5, borderBottomWidth: 0, borderColor: '#BCBCBC' },
              ArStyles.rowStart,
            ]}>
            <View
              style={{
                borderRightWidth: 1.5,
                borderColor: '#BCBCBC',
                width: '25%',
                paddingLeft: 20,
              }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800', color: '#3C9979' }}>
                A.Time
              </Text>
            </View>
            <View style={{ borderWidth: 0, borderColor: '#BCBCBC', paddingLeft: 20 }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.SlotTime ?? 'N/A'}
              </Text>
            </View>
          </View>
          <View
            style={[
              { borderWidth: 1.5, borderBottomWidth: 0, borderColor: '#BCBCBC' },
              ArStyles.rowStart,
            ]}>
            <View
              style={{
                borderRightWidth: 1.5,
                borderColor: '#BCBCBC',
                width: '25%',
                paddingLeft: 20,
              }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800', color: '#3C9979' }}>
                Type
              </Text>
            </View>
            <View style={{ borderWidth: 0, borderColor: '#BCBCBC', paddingLeft: 20 }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.VisitTypeName}
              </Text>
            </View>
          </View>
          <View
            style={[
              { borderWidth: 1.5, borderBottomWidth: 0, borderColor: '#BCBCBC' },
              ArStyles.rowStart,
            ]}>
            <View
              style={{
                borderRightWidth: 1.5,
                borderColor: '#BCBCBC',
                width: '25%',
                paddingLeft: 20,
              }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800', color: '#3C9979' }}>
                Phone
              </Text>
            </View>
            <View style={{ borderWidth: 0, borderColor: '#BCBCBC', paddingLeft: 20 }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.MobileNo}
              </Text>
            </View>
          </View>
          <View
            style={[
              { borderWidth: 1.5, borderBottomWidth: 1.5, borderColor: '#BCBCBC' },
              ArStyles.rowStart,
            ]}>
            <View
              style={{
                borderRightWidth: 1.5,
                borderColor: '#BCBCBC',
                width: '25%',
                paddingLeft: 20,
              }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800', color: '#3C9979' }}>
                Address
              </Text>
            </View>
            <View style={{ borderWidth: 0, borderColor: '#BCBCBC', paddingLeft: 20 }}>
              <Text variant="bodyMedium" style={{ fontWeight: '800' }}>
                {data?.data?.data.Data.Address}
              </Text>
            </View>
          </View>
        </View>
        <View style={ArStyles.rowEnd}>
          <Button
            theme={{ colors: { primary: '#3C9979' } }}
            mode="contained"
            style={{ marginRight: 13 }}
            labelStyle={{
              backgroundColor: '#3C9979',
              fontSize: 10,
              lineHeight: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() => navigation.navigate('ListAppointmentsScreen')}>
            Go Back
          </Button>
          <Button
            mode="contained"
            theme={{ colors: { primary: '#5D657A' } }}
            labelStyle={{
              fontSize: 10,
              lineHeight: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() => console.log('Pressed')}>
            Edit Appointment
          </Button>
        </View>
      </ShadowBox>
    </View>
  );
};

export default TodaysPatientDetailsScreen;
