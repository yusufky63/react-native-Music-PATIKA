import React from 'react';
import { View, Text, FlatList } from 'react-native';
import music_data from './music_data.json';
import MusicCard from './src/components/MusicCard';
import SearchBar from './src/components/SearchBar';
function App() {
  const [list, setList] = React.useState(music_data);

  const renderSong = ({ item }) => <MusicCard data={item} />


  const handleSearch = (text) => {
    const filteredData = music_data.filter((song) => {
      const itemData = song.title.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    }
    );
    setList(filteredData);
  }

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={list}
        renderItem={renderSong}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default App;