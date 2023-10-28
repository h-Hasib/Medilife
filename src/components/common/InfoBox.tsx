import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import { shadow } from '../../config/theme';

interface Props {
  children: React.ReactNode;
  mode: string;
  hasStarBox: boolean;
}

export const InfoBox = ({ children, mode, hasStarBox }: Props) => {
  return (
    <LinearGradient
      colors={mode === 'primary' ? ['#FC686F', '#FF934C'] : ['#259376', '#91C18E']}
      style={{
        padding: 15,
        // marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 12,
        ...shadow[5],
      }}>
      {hasStarBox && (
        <View style={styles.starBox}>
          <Entypo name="star" size={24} color={'#000000'} />
        </View>
      )}
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  starBox: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 31,
    height: 31,
    left: 29,
    top: -12,
    backgroundColor: '#d3f36b',
    borderRadius: 100,

    elevation: 4, // Controls the depth of the shadow
    shadowColor: '#000', // Color of the shadow
    shadowOffset: { width: 0, height: 4 }, // Offset of the shadow
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 4, // Radius of the shadow
  },
});
