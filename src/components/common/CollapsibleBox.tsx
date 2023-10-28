import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, List, Surface } from 'react-native-paper';
import { CollapsibleBoxModel } from 'src/types/common/CollapsibleBoxModel';

export const CollapsibleBox = (data: CollapsibleBoxModel) => {
  const { title, description, child } = data;
  return (
    <Surface style={styles.surfaceStyle}>
      <List.Accordion
        theme={{ colors: { primary: '#3C9979' } }}
        style={styles.cardStyle}
        left={props => (
          <Avatar.Text
            size={50}
            label={title.charAt(0).toUpperCase()}
            style={{ backgroundColor: '#259376' }}
          />
        )}
        title={title}
        description={description}>
        {child}
      </List.Accordion>
    </Surface>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  surfaceStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 3,
    margin: 3,
    marginBottom: 5,
  },
});
