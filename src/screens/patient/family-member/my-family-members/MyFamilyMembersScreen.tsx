import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { usePatientGetAllFamilyMember } from 'src/hooks/patient';

const MyFamilyMembersScreen = () => {
  const { data } = usePatientGetAllFamilyMember();
  return (
    <ScrollView>
      <Text style={styles.headLine}>MyFamilyMembersScreen</Text>
      <Text style={styles.dataField}>{JSON.stringify(data?.data, null, 2)}</Text>
    </ScrollView>
  );
};

export default MyFamilyMembersScreen;

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
