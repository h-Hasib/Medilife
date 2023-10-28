import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { usePatientProfileDetails } from 'src/hooks/patient';

const ProfileScreen = () => {
  const { data } = usePatientProfileDetails();
  return (
    <ScrollView>
      <Text style={styles.headLine}>ProfileScreen</Text>
      <Text style={styles.dataField}>{JSON.stringify(data?.data, null, 2)}</Text>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headLine: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  dataField: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
});
