import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyHealthFilesScreen = () => {
  return (
    <View>
      <Text style={styles.headLine}>MyHealthFilesScreen</Text>
      <Text style={styles.dataField}>Currently There is no API for this feature.</Text>
    </View>
  );
};

export default MyHealthFilesScreen;

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
