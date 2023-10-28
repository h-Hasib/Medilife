import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import { CollapsibleBox } from 'src/components/common/CollapsibleBox';
import Header from 'src/components/common/Header';
import InfoTable from 'src/components/common/InfoTable';
import { Container } from 'src/components/containers/home-containers';
import MyChamberDetails from 'src/components/doctors/MyChamberDetails';
import { useDoctorGetAllChamber } from 'src/hooks/doctor/chamber';
import { useDoctorProfileDetails } from 'src/hooks/doctor/profile';
import { DoctorProfile } from 'src/types/doctor';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

const ProfilePage = () => {
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  const chamberListData = useDoctorGetAllChamber();
  const profileDetails = useDoctorProfileDetails();
  const profile: DoctorProfile = profileDetails?.data?.data.Data || ({} as DoctorProfile);
  const feeInfoTitle = ['New Patient Fee', 'Follow Up fee', 'Report Fee'];
  const feeInfoColName = ['NewFees', 'Followupfees', 'ReportFees'];
  const accountInfoTitle = ['Email', 'Phone', 'Address', 'Gender', 'Language'];
  const accountInfoColName = ['Email', 'ContactNo', 'Address', 'Gender', 'Language'];
  return (
    <Container>
      <Header HeaderTitle="My Profile" onPress={() => navigation.navigate('HomeScreen')} />
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Avatar.Image size={100} source={require('src/assets/images/patients_accounts.png')} />
      </View>

      <View style={[ArStyles.columnCenter]}>
        <Text style={{ marginVertical: 10, fontSize: 25, fontWeight: 'bold', color: '#259376' }}>
          {profile.Name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#5B5B5B' }}>Designation</Text>
        <Text> {profile.Designation}</Text>
      </View>
      <View style={[ArStyles.rowSpaceBetween, { marginTop: 10 }]}>
        <View style={{ padding: 4, width: '50%' }}>
          <Button
            theme={{ colors: { primary: '#259376' } }}
            mode="contained"
            style={styles.btnStyle}
            labelStyle={styles.btnLabel}
            onPress={() => console.log('Pressed')}>
            Edit Info
          </Button>
        </View>
        <View style={{ padding: 4, width: '50%' }}>
          <Button
            mode="contained"
            style={styles.btnStyle}
            theme={{ colors: { primary: '#FF8D1D' } }}
            labelStyle={styles.btnLabel}
            onPress={() => console.log('Pressed')}>
            Reset Password
          </Button>
        </View>
      </View>
      <View style={{ paddingTop: 15, paddingBottom: 15 }}>
        <Text style={{ paddingBottom: 10 }} variant="titleMedium">
          Fee Info
        </Text>
        <InfoTable data={profile} colTitle={accountInfoTitle} colName={accountInfoColName} />
      </View>
      <View style={{ paddingTop: 5 }}>
        <Text style={{ paddingBottom: 10 }} variant="titleMedium">
          Account Info
        </Text>
        <InfoTable data={profile} colTitle={feeInfoTitle} colName={feeInfoColName} />
      </View>
      <View style={{ padding: 5 }}>
        <Text variant="bodyLarge" style={{ marginTop: 10, color: '#525252' }}>
          Chamber Info & Time Schedule
        </Text>
      </View>
      {chamberListData.data?.data.Data && (
        <FlatList
          data={chamberListData.data?.data.Data}
          renderItem={({ item }) => (
            <CollapsibleBox
              title={item.ChamberName}
              description={item.ChamberAddress}
              child={<MyChamberDetails chamberId={item.Id} />}
            />
          )}
          keyExtractor={item => item.Id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  // dividerStyle: {
  //   height: 2,
  //   width: '90%',
  //   marginVertical: 10,
  //   backgroundColor: '#259376',
  //   alignSelf: 'center',
  // },
  // grayDividerStyle: {
  //   height: 1,
  //   width: '100%',
  //   marginVertical: 10,
  //   backgroundColor: '#BCBCBC',
  //   alignSelf: 'center',
  // },
  // availabilityRow: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   paddingLeft: 15,
  //   paddingRight: 15,
  // },
  // textTitle: {
  //   color: '#259376',
  //   fontWeight: '800',
  // },
  btnLabel: {
    fontSize: 12,
    fontWeight: '800',
  },
  btnStyle: { width: '100%', borderRadius: 15 },
});
