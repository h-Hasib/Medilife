import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import ProfileNotificationBadge from 'src/components/common/ProfileNotificationBadge';
import SearchBox from 'src/components/common/SearchBox';
import { Container } from 'src/components/containers/home-containers';
import { ServiceCard } from 'src/components/doctors/ServiceCard';
import { images } from 'src/components/elements/images';
import { useDoctorProfileDetails } from 'src/hooks/doctor/profile';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

type Props = StackNavigationProp<DoctorRootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const navigation = useNavigation<Props>();
  const profileInfo = useDoctorProfileDetails().data?.data.Data;
  const User = {
    Avatar: false,
    PhotoPath: '',
  };
  return (
    <Container>
      <View style={[ArStyles.rowSpaceBetween, styles.section, { marginVertical: 15 }]}>
        <View style={{ width: '70%' }}>
          <Text
            variant="titleMedium"
            style={{
              fontWeight: '700',
              color: '#000000',
              fontFamily: 'Lato',
              fontSize: 14,
              padding: 3,
              lineHeight: 26,
            }}>
            Welcome Back
          </Text>
          <Text
            variant="headlineMedium"
            numberOfLines={1}
            style={{ fontWeight: '800', fontSize: 24 }}>
            {profileInfo?.Name}
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Text
              variant="titleMedium"
              numberOfLines={1}
              style={{
                fontWeight: '700',
                color: '#000000',
                fontFamily: 'Lato',
                fontSize: 14,
                padding: 3,
                paddingBottom: 0,
              }}>
              {profileInfo?.Designation}
            </Text>
            <Text
              variant="titleMedium"
              numberOfLines={1}
              style={{
                fontWeight: '700',
                color: '#000000',
                fontFamily: 'Lato',
                fontSize: 12,
                padding: 3,
                paddingTop: 0,
              }}>
              {profileInfo?.Department}
            </Text>
          </View>
        </View>
        <View style={{ width: '30%', alignItems: 'flex-end' }}>
          <ProfileNotificationBadge
            avatar={
              User?.Avatar ? (
                <Image
                  source={User?.PhotoPath ? User?.PhotoPath : images.doctorProfile}
                  alt=""
                  resizeMode="contain"
                  style={{
                    height: 66,
                    width: 66,
                    borderRadius: 50,
                    borderColor: '#DCDCDC',
                    borderWidth: 2,
                  }}
                />
              ) : (
                <Avatar.Text
                  label={profileInfo?.Name.charAt(0).toUpperCase() ?? 'D'}
                  size={66}
                  style={{ backgroundColor: '#259376' }}
                  labelStyle={{ color: 'white' }}
                />
              )
            }
            notificationCount={2}
            onPress={() => navigation.navigate('NotificationScreen')}
          />
        </View>
      </View>
      <View>
        <SearchBox />
      </View>
      <View style={styles.section}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ marginVertical: 5 }}>
            <ServiceCard
              imageName="todaysPatient"
              title="Today's"
              subtitle="Patients"
              description="List of today's visitors and old Patients"
              OnPress={() => navigation.navigate('TodaysPatientsScreen')}
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <ServiceCard
              imageName="patientsAccounts"
              title="Patient"
              subtitle="Accounts"
              description="List of new and followup patients with report"
              OnPress={() => navigation.navigate('PatientAccountsScreen')}
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <ServiceCard
              imageName="listOfAppointments"
              title="List of"
              subtitle="Appointments"
              description="List of appointments by chambers, shifts and dates"
              OnPress={() => navigation.navigate('ListAppointmentsScreen')}
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <ServiceCard
              imageName="myChamber"
              title="All about"
              subtitle="My Chambers"
              description="List of my chambers and availability"
              OnPress={() => navigation.navigate('MyChambersScreen')}
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <ServiceCard
              imageName="findPatientHistory"
              title="Find"
              subtitle="Patient History"
              description="Find patients those are already received treatment"
              OnPress={() => navigation.navigate('PatientHistoryScreen')}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  section: {
    marginVertical: 2.5,
    marginHorizontal: 10,
  },
});
