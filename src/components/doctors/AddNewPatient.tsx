import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ShadowBox } from '../common/ShadowBox';

import { Avatar, Button, Text } from 'react-native-paper';
import ArStyles from '../common/ArStyles';

const AddNewPatient = () => {
  const id = '20010173501';
  const name = 'Hasibul Hasan';
  const phone = '01798787878';
  const age = 23;
  const gender = 'M';
  return (
    <ShadowBox>
      <View style={styles.container}>
        <View style={styles.descriptionSection}>
          <View style={{ width: '25%' }}>
            <Avatar.Text
              label={name.charAt(0).toUpperCase()}
              size={50}
              style={{ backgroundColor: '#259376' }}
              labelStyle={{ color: 'white' }}
            />
          </View>
          <View style={styles.description}>
            <Text variant="bodySmall" style={{ fontWeight: '500', color: '#BCBCBC' }}>
              ID {id}
            </Text>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: '600',
                color: '#525252',
                borderBottomWidth: 1,
                borderColor: '#BCBCBC',
                paddingBottom: 5,
              }}>
              {name}
            </Text>
            <View style={ArStyles.rowSpaceBetween}>
              <View
                style={{
                  borderRightWidth: 1,
                  borderColor: '#BCBCBC',
                  paddingRight: 8,
                  paddingVertical: 8,
                }}>
                <Text variant="bodySmall" style={{ fontWeight: '500', color: '#BCBCBC' }}>
                  PHONE
                </Text>
                <Text variant="titleMedium" style={{ fontWeight: '600', color: '#259376' }}>
                  {phone}
                </Text>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  borderColor: '#BCBCBC',
                  paddingRight: 8,
                  paddingVertical: 8,
                  alignItems: 'center',
                }}>
                <Text variant="bodySmall" style={{ fontWeight: '500', color: '#BCBCBC' }}>
                  AGE
                </Text>
                <Text variant="titleMedium" style={{ fontWeight: '600', color: '#259376' }}>
                  {age}
                </Text>
              </View>
              <View style={{ paddingRight: 8, alignItems: 'center' }}>
                <Text variant="bodySmall" style={{ fontWeight: '500', color: '#BCBCBC' }}>
                  SEX
                </Text>
                <Text variant="titleMedium" style={{ fontWeight: '600', color: '#259376' }}>
                  {gender}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <Button
            mode="contained"
            style={{ marginTop: 15, marginBottom: 2.5 }}
            buttonColor="#259376"
            labelStyle={{
              fontSize: 10,
              lineHeight: 10,
              paddingLeft: 1,
              paddingRight: 1,
            }}
            onPress={() => console.log('AddToList Pressed')}>
            Add to List
          </Button>
          <Button
            mode="contained"
            style={{ marginTop: 2.5, marginBottom: 10 }}
            buttonColor="#5D657A"
            labelStyle={{
              fontSize: 10,
              lineHeight: 10,
              paddingLeft: 2,
              paddingRight: 2,
            }}
            onPress={() => console.log('NewVisit Pressed')}>
            New Visit
          </Button>
        </View>
      </View>
    </ShadowBox>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  descriptionSection: { width: '70%', flexDirection: 'row', justifyContent: 'space-between' },
  description: { width: '75%', borderRightWidth: 1, borderColor: '#BCBCBC' },
  buttonSection: { width: '30%', paddingLeft: 5 },
});

export default AddNewPatient;
