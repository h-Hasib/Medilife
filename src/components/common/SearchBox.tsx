import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Surface } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import ArStyles from './ArStyles';

const SearchBox = () => {
  const [input, setInput] = useState('');

  console.log(input);
  return (
    <Surface
      style={{
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        width: '95%',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10,
      }}>
      <View style={[ArStyles.rowStart]}>
        <Feather
          name="search"
          size={20}
          color={'black'}
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <TextInput
          value={input}
          placeholder="find a patient or account or file ..."
          onChangeText={text => setInput(text)}
        />
      </View>
    </Surface>
  );
};

export default SearchBox;
