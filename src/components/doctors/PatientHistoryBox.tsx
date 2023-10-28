import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ShadowBox } from '../common/ShadowBox';

import { FlashList } from '@shopify/flash-list';
import { Avatar, Button, Text } from 'react-native-paper';
import { PatientHistory } from 'src/types/doctor';
import ArStyles from '../common/ArStyles';
interface Props {
  data: PatientHistory[];
}
const PatientHistoryBox = (param: Props) => {
  const { data } = param;
  return (
    <FlashList
      data={data}
      estimatedListSize={{ height: 100, width: 50 }}
      estimatedItemSize={100}
      renderItem={({ item }) => (
        <ShadowBox>
          <View style={styles.container}>
            <View style={styles.descriptionSection}>
              <View style={{ width: '25%' }}>
                <Avatar.Text
                  label={item.Name.charAt(0).toUpperCase()}
                  size={50}
                  style={{ backgroundColor: '#259376' }}
                  labelStyle={{ color: 'white' }}
                />
              </View>
              <View style={styles.description}>
                <Text variant="bodySmall" style={{ fontWeight: '500', color: '#BCBCBC' }}>
                  ID {item.PatientId}
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
                  {item.Name}
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
                      {item.Phone}
                    </Text>
                  </View>
                  <View
                    style={{
                      borderRightWidth: 1,
                      borderColor: '#BCBCBC',
                      paddingVertical: 8,
                      alignItems: 'center',
                    }}>
                    <Text variant="bodySmall" style={{ fontWeight: '500', color: '#BCBCBC' }}>
                      AGE
                    </Text>
                    <Text variant="titleMedium" style={{ fontWeight: '600', color: '#259376' }}>
                      {item.Age}
                    </Text>
                  </View>
                  <View style={{ paddingRight: 8, alignItems: 'center' }}>
                    <Text variant="bodySmall" style={{ fontWeight: '500', color: '#BCBCBC' }}>
                      SEX
                    </Text>
                    <Text variant="titleMedium" style={{ fontWeight: '600', color: '#259376' }}>
                      {item.Sex}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.buttonSection}>
              <Button
                mode="contained"
                style={{ marginTop: 5, marginBottom: 2.5 }}
                buttonColor="#259376"
                labelStyle={{
                  fontSize: 10,
                  lineHeight: 10,
                  paddingLeft: 1,
                  paddingRight: 1,
                }}
                onPress={() => console.log('Reports Pressed')}>
                Reports
              </Button>
              <Button
                mode="contained"
                style={{ marginTop: 2.5, marginBottom: 2.5 }}
                buttonColor="#FF8D1D"
                labelStyle={{
                  fontSize: 10,
                  lineHeight: 10,
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
                onPress={() => console.log('ViewRx Pressed')}>
                View Rx
              </Button>
              <Button
                mode="contained"
                style={{ marginTop: 2.5, marginBottom: 5 }}
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
      )}
    />
  );
};

export default PatientHistoryBox;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  descriptionSection: { width: '70%', flexDirection: 'row', justifyContent: 'space-between' },
  description: { width: '75%', borderRightWidth: 1, borderColor: '#BCBCBC' },
  buttonSection: { width: '30%', paddingLeft: 5 },
});
