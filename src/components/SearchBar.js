import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara..."
        onChangeText={props.onSearch}
      />
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    padding: 5,
  },
});
