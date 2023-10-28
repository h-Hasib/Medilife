import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OtherServicesScreen = () => {
  return (
    <View>
      <Text style={styles.headLine}>OtherServicesScreen</Text>
      <Text style={styles.dataField}>Currently There is no API for this feature.</Text>
    </View>
  );
};

export default OtherServicesScreen;

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
